import { LitElement, html } from 'lit';

/**
 * The `Style` element holds the global stylesheets used to style every element.
 * This is used so it can inherit the styling information from SillyTavern.
 */
export class Style extends LitElement {
    protected render() {
        return html`
        <link rel='stylesheet' href='/css/fontawesome.min.css' />
        <link rel='stylesheet' href='/style.css' />
        <link rel='stylesheet' href='/css/toggle-dependent.css' />
        <link rel='stylesheet' href='/css/user.css' />
      `;
    }
}
