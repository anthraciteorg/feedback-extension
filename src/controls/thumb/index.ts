import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Style } from '../../style';

/** Represents the type of thumb. */
export enum ThumbType {
    Up = 1,
    Down = -1
}

/** Mapping between {@link ThumbType} and label association. */
export const ThumbLabels: Record<ThumbType, boolean> = {
    [ThumbType.Up]: true,
    [ThumbType.Down]: false,
}

/**
 * The `Thumb` element holds the thumb button and displays it's current state
 * based on the given attributes.
 */
@customElement('ant-feedback-thumb')
export class Thumb extends Style {
    static styles = css`
        > div:focus-visible {
            opacity: 1;
        }

        :host([active]) {
            > div {
                opacity: 1;
            }
        }
    `;

    /** The type of thumb. */
    @property({ type: Number }) accessor type = ThumbType.Up;

    /** Whether or not this thumb is active (clicked.) */
    @property({ type: Boolean }) accessor active = false;

    /**
     * Returns tooltip content based on the current thumb state.
     */
    get title() {
        return this.active
            ? 'Remove vote'
            : this.type === ThumbType.Up
                ? 'Upvote'
                : 'Downvote';
    }

    render() {
        return html`
            ${super.render()}
            <div
                title='${this.title}'
                class='mes_button interactable fa-regular fa-thumbs-${this.type === ThumbType.Up ? 'up' : 'down'}'
                data-i18n='[title]${this.title}'
                tabindex='0'>
            </div>
        `;
    }
}