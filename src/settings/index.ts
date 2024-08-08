import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Style } from '../style';
import { Settings as SettingsContainer } from './settings';

/**
 * The `Settings` element holds all the available settings and displays some
 * metadata.
 */
@customElement('ant-feedback-settings')
export class Settings extends Style {
    /** The timeout id of the timeout for saving settings. */
    private _saveTimeoutId?: number;

    static styles = css`
        .menu_button {
            width: initial;
        }

        #metadata {
            word-break: break-all;
            
            > * {
                display: block;
            }
        }
    `;

    render() {
        return html`
            ${super.render()}

            <div>
                <label data-i18n='Endpoint' for='ant_feedback_endpoint'>
                    Endpoint
                </label>
                <input
                    id='ant_feedback_endpoint'
                    class='text_pole textarea_compact'
                    .value=${SettingsContainer.container.endpoint}
                    @input=${this._onEndpointInput}>
            </div>
            <div>
                <label data-i18n='Endpoint' for='ant_feedback_clear_cache'>
                    Clear cache
                </label>
                <button
                    id='ant_feedback_clear_cache'
                    class='menu_button interactable'
                    @click=${this._onCacheClearClick}
                >
                    Clear cache
                </button>
            </div>
            <div id='metadata'>
                <strong>Anthracite</strong>
                <small>Version 0.6.0</small>
                <small>User ID:</small>
                <small>${SettingsContainer.container.userId}</small>
            </div>
        `;
    }

    /**
     * Handles `input` events for enndpoint, scheduling save for settings.
     * @param event The `input` event.
     */
    private _onEndpointInput(event: Event) {
        SettingsContainer.container.endpoint =
            (event.target as HTMLInputElement).value;

        this._scheduleSave();
    }

    /**
     * Handles clearing of cache whenever requested.
     */
    private _onCacheClearClick() {
        SettingsContainer.clearCache();

        toastr.info(
            'Cache has been cleared, refresh to notice effects.',
            'Cache cleared'
        )
    }

    /**
     * Schedules a save (debouncing) for settings.
     */
    private _scheduleSave() {
        clearTimeout(this._saveTimeoutId);

        this._saveTimeoutId = window.setTimeout(
            () => SettingsContainer.save(), 1e3
        );
    }
}