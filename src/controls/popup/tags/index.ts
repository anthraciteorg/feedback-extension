import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Style } from '../../../style';
import { ThumbType } from '../../thumb';

/** The id and name of a tag of a feedback container instance. */
export type Tag = {
    id: string;
    name: string;
}

/**
 * The default tags that can be attributed to a feedback container instance.
 */
export const DefaultTags: Record<ThumbType, Array<Tag>> = {
    [ThumbType.Up]: [
        { id: 'creative', name: 'Creative' },
        { id: 'compelling', name: 'Compelling' },
        { id: 'well-structured', name: 'Well-structured' },
        { id: 'engaging', name: 'Engaging' },
        { id: 'vivid', name: 'Vivid' },
        { id: 'insightful', name: 'Insightful' },
    ],
    [ThumbType.Down]: [
        { id: 'slop', name: 'Slop' },
        { id: 'incoherent', name: 'Incoherent' },
        { id: 'long-winded', name: 'Long-winded' },
        { id: 'repetitive', name: 'Repetitive' },
        { id: 'uncreative', name: 'Uncreative' },
        { id: 'censored', name: 'Censored' },
    ]
}

/**
 * The `Tags` element holds the tags associated with the given {@link ThumbType}
 * alongside handling and displaying the selection state of said tags.
 */
@customElement('ant-feedback-tags')
export class Tags extends Style {
    static styles = css`
        :host {
            #tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                align-items: flex-start;

                > button {
                    margin: 0;
                    width: initial;
                }
            }
        }
    `;

    /** The {@link ThumbType} to show tags associated with. */
    @property({ type: Number })
    accessor type: ThumbType | undefined;

    /** The currently selected tags. */
    @property()
    accessor selected: Record<string, boolean> = {};

    render() {
        return html`
            ${super.render()}
            <div id='tags'>
                ${(DefaultTags[this.type ?? ThumbType.Down] ?? []).map(tag => html`
                    <button
                        class=${['menu_button', this.selected[tag.id] && 'active'].join(' ')}
                        @click=${() => this._onSelect(tag)}
                    >
                        ${tag.name}
                    </button>
                `)}
            </div>
        `;
    }

    /**
     * Handles selection of a certain tag.
     * @param tag The tag that was selected.
     */
    private _onSelect(tag: Tag) {
        const selected = { ...this.selected };

        if (!selected[tag.id]) {
            selected[tag.id] = true;
        } else {
            delete selected[tag.id];
        }

        this.selected = selected;

        // Dispatch custom event to let parents know of the state change.
        this.dispatchEvent(
            new CustomEvent('selected', { detail: { selected } })
        );
    }
}