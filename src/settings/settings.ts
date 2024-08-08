import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex, randomBytes } from '@noble/hashes/utils';
import * as silly from 'silly';
import { Feedback } from '../controls/feedback';

/** The amount of bytes to use when generating a user id. */
const UserIdBytes = 256;

/** The default settings when starting the extension for the first time. */
const Defaults = {
    version: 0.5,
    endpoint: 'https://rlhf.frammie.ee',
    feedback: {},
}

export interface Settings {
    version: number;
    userId: string;
    feedback: Record<string, Feedback>;
    endpoint: string;
}

/**
 * The settings container holds all the settings for the extension and is
 * responsible for making sure it gets saved by SillyTavern.
 */
export class SettingsContainer {
    /** The key for SillyTavern `extensionSettings`. */
    private static key = 'anthracite-feedback';

    public container: Settings;

    constructor() {
        this.container = SillyTavern.getContext().extensionSettings[
            SettingsContainer.key
        ];

        // TODO: Add logic for migrations.
        if (this.container) return;

        this.container = {
            ...Defaults,
            userId: this._generateUserId(),
        }

        this.save();
    }

    /**
     * Saves settings to SillyTavern storage.
     */
    public save() {
        SillyTavern.getContext()
            .extensionSettings[SettingsContainer.key] = this.container;

        silly.saveSettings();
    }

    /**
     * Clears the cache for all saved feedback.
     */
    public clearCache() {
        this.container.feedback = {};

        this.save();
    }

    /**
     * Generates a unique user ID based on randomly generated bytes of length
     * {@link UserIdBytes} in order to uniquely identify this SillyTavern
     * instance in regards to submitted feedback.
     */
    private _generateUserId() {
        return bytesToHex(sha256(randomBytes(UserIdBytes)));
    }
}

export const Settings = new SettingsContainer();