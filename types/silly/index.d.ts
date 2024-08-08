declare global {
    export const SillyTavern: {
        getContext(): any;
    }
    export const toastr: any;
}

declare module 'silly' {
    export type Chat = {
        name: string;
        is_user: boolean;
        is_system: boolean;
        send_date: string;
        mes: string;
        extra: {
            api?: string;
            model?: string;
        };
        gen_started?: string | Date;
        gen_finished?: string | Date;
        swipe_id?: number;
        swipes?: string[];
        swipe_info?: {
            send_date: string;
            gen_started?: string | Date;
            gen_finished?: string | Date;
            extra: {
                api?: string;
                model?: string;
            };
        }[];
    }
    export type CompletionChat = {
        role: 'system' | 'user' | 'assistant';
        content: string;
    }
    export type GenerateOptions = {
        automatic_trigger?: boolean;
        force_name2?: boolean;
        quiet_prompt?: string;
        quietToLoud?: boolean;
        skipWIAN?: boolean;
        force_chid?: number;
        signal?: AbortSignal;
        quietImage?: string;
        maxLoops?: number;
        quietName?: string;
    }
    export const name1: string;
    export const name2: string;
    export const chat: Chat[];
    export const event_types: Record<string, string>;
    export const eventSource: any;
    export const main_api: string;
    /**
     * Runs a generation using the current chat context.
     * @param type Generation type
     * @param options Generation options
     * @param dryRun Whether to actually generate a message or just assemble the
     * prompt
     * @returns Returns a promise that resolves when the text is done generating.
     */
    export function Generate(
        type?: string,
        options?: GenerateOptions,
        dryRun?: boolean
    ): Promise<void>;
    export function saveSettings(): Promise<void>;
    export function getCurrentChatId(): number;
}
export { };
