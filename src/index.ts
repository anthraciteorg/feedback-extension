import './controls';
import './settings/container';

/** Initializes and injects the main controls for this extension. */
function inject() {
    const buttonContainer: HTMLElement =
        document.querySelector('#message_template .mes_buttons')!;

    buttonContainer.prepend(document.createElement('ant-feedback-controls'));

    const settingsContainer: HTMLElement =
        document.getElementById('extensions_settings')!;

    settingsContainer.append(
        document.createElement('ant-feedback-settings-container')
    );

    console.info(`
 █████╗ ███╗   ██╗████████╗██╗  ██╗██████╗  █████╗  ██████╗██╗████████╗███████╗
██╔══██╗████╗  ██║╚══██╔══╝██║  ██║██╔══██╗██╔══██╗██╔════╝██║╚══██╔══╝██╔════╝
███████║██╔██╗ ██║   ██║   ███████║██████╔╝███████║██║     ██║   ██║   █████╗  
██╔══██║██║╚██╗██║   ██║   ██╔══██║██╔══██╗██╔══██║██║     ██║   ██║   ██╔══╝  
██║  ██║██║ ╚████║   ██║   ██║  ██║██║  ██║██║  ██║╚██████╗██║   ██║   ███████╗
╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝   ╚═╝   ╚══════╝
Feedback plugin injected
`);
};

inject();