import { LitElement, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import * as silly from 'silly';
import { Settings } from '../settings/settings';
import { generateContext } from './context';
import { Feedback } from './feedback';
import './popup';
import { Popup } from './popup';
import './thumb';
import { Thumb, ThumbLabels, ThumbType } from './thumb';

/**
 * The `Controls` element holds the elements and state for feedback in the
 * form of thumbs buttons and handles the popup container for further details.
 */
@customElement('ant-feedback-controls')
export class Controls extends LitElement {
    /** The feedback container for the current feedback state of the message. */
    @state()
    private accessor _feedback: Feedback | undefined;

    /** Whether or not the popup is considered open. */
    @state()
    private accessor _popupOpen = false;

    /** The popup element associated with these vote controls. */
    @query('ant-feedback-popup')
    private accessor _popup!: Popup;

    /** The timeout id of the timeout for closing or opening the popup. */
    private _toggleTimeoutId?: number;

    /** Whether or not the element is being hovered over. */
    private _mouseOver = false;

    private _eventListener?: Function;

    /**
     * Returns the message id from SillyTavern based on the DOM position of the
     * vote controls.
     */
    get messageId() {
        return parseInt(
            this.closest('.mes')!.attributes.getNamedItem('mesid')!.value
        );
    }

    /**
     * Returns the current message instance from SillyTavern's internal state.
     */
    get message() { return silly.chat[this.messageId] }

    constructor() {
        super();

        /**
         * Handle `MESSAGE_SWIPED` event from SillyTavern to switch feedback
         * container instances.
         */
        this._eventListener = this._onSwipe.bind(this);

        silly.eventSource.on(
            silly.event_types.MESSAGE_SWIPED,
            this._eventListener
        );
    }

    render() {
        if (this.message?.swipe_id == undefined) return;
        if (!this._feedback) this._loadFeedback();

        return html`
            <div
                @mouseover=${this._onMouseEvent}
                @mouseleave=${this._onMouseEvent}
            >
                <ant-feedback-thumb
                    type=${ThumbType.Up}
                    ?active=${this._feedback?.rating === ThumbType.Up}
                    @click=${this._vote}
                ></ant-feedback-thumb>
                <ant-feedback-thumb 
                    type=${ThumbType.Down}
                    ?active=${this._feedback?.rating === ThumbType.Down}
                    @click=${this._vote}
                ></ant-feedback-thumb>
                <ant-feedback-popup
                    ?open=${this._popupOpen}
                    anchor=${this.messageId < 3 ? 'bottom' : 'top'}
                    .feedback=${this._feedback}
                    @close=${this._onClose}
                ></ant-feedback-popup>
            </div>
        `;
    }

    /**
     * Loads a feedback container based on the message id for this element.
     */
    private async _loadFeedback() {
        // Ignore loading data of swipes that haven't been generated yet. 
        if (this.message.swipe_id && this.message.swipe_info &&
            (this.message.swipe_id >= this.message.swipe_info?.length)) return;

        this._feedback = new Feedback(this.messageId);

        this._feedback?.load();
    }

    /**
     * Handles a `swipe` event whenever the message is swiped in SillyTavern,
     * and loads the appropriate cached feedback container.
     * @param messageId The message id of the message that is swiped towards.
     */
    private _onSwipe(messageId: number) {
        // Remove orphaned event listeners
        if (!this.isConnected) {
            silly.eventSource.removeListener(this._eventListener);

            return;
        }
        // Ignore if not swiped on the message this controls is bound to.
        if (messageId !== this.messageId) return;

        this._reset();

        this._loadFeedback();
    }

    /**
     * Deletes the currently stored feedback container for this element and
     * reinitializes a new one.
     */
    private _deleteFeedback() {
        this._feedback?.delete();

        this._reset();
    }

    /**
     * Handles a {@link MouseEvent} to determine whether or not the mouse is
     * currently hovering over one of the thumbs.
     * @param event The {@link MouseEvent} to handle.
     */
    private _onMouseEvent(event: MouseEvent) {
        if (!event.relatedTarget) return;

        this._mouseOver = event.type === 'mouseover' ? true : false;

        this._schedulePopup(this._mouseOver);
    }

    /**
     * Handles the `vote` event whenever one of the thumbs is clicked.
     * @param event The `vote` event.
     */
    private async _vote(event: Event) {
        const type: ThumbType = parseInt(
            (event.target as Thumb).attributes.getNamedItem('type')!.value
        );

        // Create new feedback object, removing previous values.
        this._feedback = new Feedback(
            this.messageId,
            this._feedback?.rating !== type ? type : undefined
        );

        // Close popup when deleting rating.
        if (this._feedback.rating === undefined) {
            this._popupOpen = false;
        } else {
            // Otherwise schedule open popup if still hovering.
            this._schedulePopup(true);
        }

        this._submitFeedback();
    }

    /**
     * Schedules opening and closing of the popup with a timeout.
     * @param open Whether or not to open the popup.
     */
    private _schedulePopup(open: boolean) {
        if (!this._shouldToggle(open)) return;

        clearTimeout(this._toggleTimeoutId);

        this._toggleTimeoutId = window.setTimeout(() => {
            if (!this._shouldToggle(open)) return;

            this._popupOpen = open;
        }, open ? 500 : 750);
    }

    /**
     * Determines whether or not the popup should open based on the current
     * state of the vote controls.
     * @param open Whether or not to open the popup.
     */
    private _shouldToggle(open: boolean) {
        return (
            // If open state is different from requested.
            open !== this._popupOpen &&
            // If requested state matches hover state.
            open === this._mouseOver &&
            // If popup not marked stuck.
            !this._popup.stuck &&
            // If feedback has been rated rated.
            this._feedback?.rating !== undefined
        );
    }

    /**
     * Handles the `close` event from the popup whenever the popup indicates
     * that closing is requested.
     * 
     * If marked as a `submit` it will save the current feedback container to
     * the cache and submits the feedback.
     * 
     * @param event The `close` event.
     * @returns 
     */
    private _onClose(event: CustomEvent) {
        this._popupOpen = false;

        if (!event.detail.submit) return;

        this._feedback?.save();

        this._submitFeedback();
    }

    /**
     * Resets the state of the controls. Closes and resets the popup, and clears
     * the stored feedback instance.
     */
    private _reset() {
        this._popupOpen = false;
        this._popup.reset();
        this._feedback = undefined;
    }

    /**
     * Handles submitting feedback to a remote endpoint as configured by the
     * `endpoint` in {@link Settings}.
     * 
     * Will display an error message if anything goes wrong, and if not
     * partially filled will reset the feedback state.
     */
    private async _submitFeedback() {
        if (!this._feedback) return;

        try {
            const context = await generateContext();
            delete context.generationType;

            const response = await fetch(
                `${Settings.container.endpoint}/feedback` +
                `/${Settings.container.userId}/${this._feedback.messageId}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({
                        prompt: context.prompt,
                        completion: context.completion,
                        model: context.model,
                        label: this._feedback.rating
                            ? ThumbLabels[this._feedback.rating]
                            : null,
                        explanation: this._feedback.explanation,
                        tags: this._feedback.tags
                    }),
                });

            if (!response.ok) throw response;

            // Delete feedback if rating removed.
            if (!this._feedback.rating) {
                this._deleteFeedback();

                return;
            }

            this._feedback.save();

            // If still hovering at this point, open popup.
            if (this._mouseOver) this._popupOpen = true;
        } catch (e) {
            if (e instanceof Response) {
                switch (e.status) {
                    case 429:
                    case 503:
                        toastr.warning(
                            'Rate limit has been reached. Please try again later.',
                            'Failed to send feedback',
                        );
                        break;
                    default:
                        toastr.error(
                            'Invalid response when submitting feedback, please check console for further details.',
                            'Failed to send feedback'
                        );
                }
            } else {
                toastr.error(
                    'Unknown error occurred, please check console for further details.',
                    'Failed to send feedback'
                );
            }

            console.error(e);

            // Keep partial unsaved changes when performing an update.
            if (this._feedback.partiallyFilled) return;

            this._deleteFeedback();
        }
    }
}