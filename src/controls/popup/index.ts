import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Style } from '../../style';
import { Feedback } from '../feedback';
import { popupStyles } from './style';
import './tags';

/**
 * The `Popup` element is responsible for displaying and allowing to edit
 * feedback instances.
 */
@customElement('ant-feedback-popup')
export class Popup extends Style {
    static styles = popupStyles;

    /** Whether or not the popup is open. */
    @property({ type: Boolean })
    accessor open = false;

    /** The anchor point of the popup. */
    @property({ type: String, reflect: true })
    accessor anchor: 'top' | 'bottom' = 'top';

    /**
     * Whether the popup is marked as `stuck`. This means it will not close
     * automatically.
     */
    @property({ type: Boolean })
    accessor stuck = false;

    /** The feedback container associated with this popup. */
    @property({ type: Object })
    accessor feedback: Feedback | undefined;

    /**
     * Holds a formatted state of currently selected tags for `ant-vote-tags`.
     */
    private get selected() {
        return this.feedback?.tags?.reduce((map, curr) => {
            map[curr] = true;
            return map;
        }, {} as Record<string, boolean>) ?? {};
    }

    render() {
        return html`
            ${super.render()}
            <div id='container' @click=${this._onClick}>
                <div id='header'>
                    <p>💬  Leave some feedback</p>
                    <div
                        title='Close'
                        class='mes_button fa-regular fa-xmark interactable'
                        data-i18n='[title]Close'
                        tabindex='0'
                        @click=${this._onClose}
                    ></div>
                </div>
                <textarea
                    id='explanation'
                    placeholder=${`Feel free to give an explanation of what happened, e.g. The AI didn't stick to the character well.`}
                    .value=${this.feedback?.explanation ?? ''}
                    @input=${this._onExplanationInput}
                    maxlength=${6.4e2}
                ></textarea>
                <ant-feedback-tags
                    type=${ifDefined(this.feedback?.rating)}
                    .selected=${this.selected}
                    @selected=${this._onTagSelect}></ant-feedback-tags>
                <div id='controls'>
                    <button
                        class='menu_button'
                        @click=${this._onClose}
                    >
                        Cancel
                    </button>
                    <button
                        class='menu_button'
                        @click=${(e: Event) => this._onClose(e, true)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Resets the (`stuck`) state on this popup.
     */
    public reset() {
        this.stuck = false;
    }

    /**
     * Sets the `stuck` state on the popup when clicked inside of, signalling it
     * should not be automatically closed from this point forward.
     */
    private _onClick() {
        this.stuck = true;
    }

    /**
     * Handles `input` events for explanation, updating the feedback container
     * instance to reflect the changes.
     * @param event The `input` event.
     */
    private _onExplanationInput(event: Event) {
        this.feedback!.explanation =
            (event.target as HTMLTextAreaElement).value;
    }

    /**
     * Handles tag `select` event updating the feedback container
     * instance to reflect the changes.
     * @param event The `select` event.
     */
    private _onTagSelect(event: CustomEvent) {
        this.feedback!.tags = Object.keys(event.detail.selected);
    }

    /**
     * Handles when the popup is requested to be closed (e.g. close button, or
     * submit button pressed.) It sends out a custom event letting the parent
     * know of the request.
     * @param event The event that triggered this handler.
     * @param submit Whether or not to mark the `close` event as a submit event.
     */
    private _onClose(event: Event, submit?: boolean) {
        event.stopPropagation();

        this.stuck = false;

        this.dispatchEvent(new CustomEvent('close', { detail: { submit } }));
    }
}