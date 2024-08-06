import * as silly from 'silly';

/** The default timeout whilst waiting for context to generate. */
const GenerateTimeoutMs = 1e3;

/** The type of context that can be generated. */
export enum GenerationType {
    Text,
    Chat
}

/** The generated context holding including metadata. */
export type Context = {
    prompt: string;
    completion: string;
    generationType?: GenerationType;
    model: string;
}

/**
 * Generates the current prompt and completion (context) of the current chat.
 * 
 * NOTE: Currently this only supports generating context based on the last
 * response. Partial reproduction is possible with manipulation of chat array
 * inside the script module, but no feasible way has been found yet.
 */
export async function generateContext(): Promise<Context> {
    let resolve: (value: Context) => void;
    const promise = new Promise<Context>(res => resolve = res);

    const message = silly.chat.at(-1)!;
    let context: Partial<Context> = {
        completion: message.mes,
        model: message.extra.model!,
        generationType: silly.main_api === 'textgenerationwebui'
            ? GenerationType.Text
            : GenerationType.Chat
    };

    function handleEvent(event: string | any) {
        // Ignore empty prompts (chat completion)
        if (event.prompt === '') return;

        context.prompt = context.generationType === GenerationType.Text
            ? event.prompt
            : JSON.stringify(event.chat);

        resolve(context as Context);
    }

    silly.eventSource.on(
        silly.event_types.GENERATE_AFTER_COMBINE_PROMPTS,
        handleEvent
    );
    silly.eventSource.on(
        silly.event_types.CHAT_COMPLETION_PROMPT_READY,
        handleEvent
    );

    // Perform dry run to trigger generation pre-response and after
    // NOTE: Type 'swipe' reproduces the context without the last message
    silly.Generate('swipe', {}, true);

    try {
        return await Promise.race([
            promise,
            new Promise<any>((_, reject) =>
                setTimeout(
                    () => reject(new Error('Timeout exceeded')),
                    GenerateTimeoutMs
                )
            ),
        ]);
    } finally {
        silly.eventSource.removeListener(
            silly.event_types.GENERATE_AFTER_COMBINE_PROMPTS,
            handleEvent
        );
        silly.eventSource.removeListener(
            silly.event_types.CHAT_COMPLETION_PROMPT_READY,
            handleEvent
        );
    }
}