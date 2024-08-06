import { css } from 'lit';

export const popupStyles = css`
    :host {
        position: relative;
    }

    :host([open]) {
        #container {
            pointer-events: all;
            opacity: 1;
        }
    }

    :host([anchor='top']) {
        #container {
            bottom: 1rem;
        }

        &:host([open]) {
            #container {
                transform: translateY(-1rem);
            }
        }
    }

    :host([anchor='bottom']) {
        #container {
            top: 1rem;
        }

        &:host([open]) {
            #container {
                transform: translateY(1rem);
            }
        }
    }
        
    #container {
        pointer-events: none;
        position: absolute;
        right: 0rem;
        opacity: 0;
        background:
            linear-gradient(
                var(--SmartThemeChatTintColor),
                var(--SmartThemeChatTintColor)
            ),
            linear-gradient(
                var(--SmartThemeBotMesBlurTintColor),
                var(--SmartThemeBotMesBlurTintColor)
            );
        border: 1px solid var(--SmartThemeBorderColor);
        border-radius: 10px;
        min-width: 20rem;
        padding: 1rem;
        transition:
            transform 300ms,
            opacity 300ms;
    }

    #header {
        display: flex;

        > p {
            flex: 1;
            white-space: pre;
        }
    }

    #explanation {
        height: 5rem;
        resize: both;
        margin-bottom: 0.75rem;
    }

    #controls {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
`;