import { Message } from './chat';
export declare const OpenAIStream: (systemPrompt: string, key: string, messages: Message[], update: (text: string) => void) => Promise<ReadableStream<any>>;
