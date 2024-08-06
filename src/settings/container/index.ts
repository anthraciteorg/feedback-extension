import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './..';

/**
 * The `SettingsContainer` element holds the header portion of the settings to
 * include inside the extension settings container.
 */
@customElement('ant-feedback-settings-container')
export class SettingsContainer extends LitElement {
    render() {
        return html`
            <div id='ant_feedback_container' class='extension_container'>
                <div id='ant_feedback_settings'>
                    <div class='inline-drawer'>
                        <div class='inline-drawer-toggle inline-drawer-header'>
                            <b>Feedback</b>
                            <div class='inline-drawer-icon fa-solid fa-circle-chevron-down down'></div>
                        </div>
                        <div class='inline-drawer-content'>
                            <ant-feedback-settings></ant-feedback-settings>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Creates an open shadow root allowed external styling to leak in.
     */
    protected createRenderRoot() {
        return this;
    }
}