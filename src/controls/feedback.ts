import { sha256 } from '@noble/hashes/sha256';
import { bytesToHex } from '@noble/hashes/utils';
import * as silly from 'silly';
import { Settings } from '../settings/settings';
import { ThumbType } from './thumb';

/**
 * The feedback container holds all the state for feedback on an individual
 * message and is makes sure this is persisted inside the {@link Settings}.
 */
export class Feedback {
    /** The message id associated with this feedback. */
    messageId: string;
    /** The rating given, either positive or negative. */
    rating?: ThumbType;
    /** Optional explanation as text. */
    explanation?: string;
    /** The tags associated with the feedback. */
    tags?: string[];

    /**
     * Returns if this feedback has been partially filled, i.e. not missing
     * explanation or tags.
     */
    get partiallyFilled() { return !!(this.explanation || this.tags?.length) }

    constructor(messageId: number, rating?: ThumbType) {
        this.messageId = Feedback._generateUniqueId(messageId);
        this.rating = rating;
    }

    /**
     * Loads this feedback container state from settings based on the message id
     * given to this instance.
     */
    public load() {
        const existing = Settings.container.feedback[this.messageId];
        if (!existing) return;

        this.messageId = existing.messageId;
        this.rating = existing.rating;
        this.explanation = existing.explanation;
        this.tags = existing.tags;
    }

    /**
     * Saves this feedback container to {@link Settings} to persistently store
     * it for later reference.
     */
    public save() {
        Settings.container.feedback[this.messageId] = this;

        Settings.save();
    }

    /**
     * Deletes this feedback container from {@link Settings}.
     */
    public delete() {
        delete Settings.container.feedback[this.messageId];

        Settings.save();
    }

    /**
     * Generates a unique ID based on the message id, swipe id, and generation
     * timestamp. Returns as a SHA256 hash formatted in hex.
     * @param messageId 
     */
    private static _generateUniqueId(messageId: number) {
        const message = silly.chat[messageId];
        const swipe = message.swipe_info![message.swipe_id!];
        const gen_started = swipe.gen_started instanceof Date
            ? swipe.gen_started.toISOString()
            : swipe.gen_started;

        return bytesToHex(
            sha256([
                silly.getCurrentChatId(),
                messageId,
                message.swipe_id,
                gen_started
            ].join('|'))
        );
    }
}