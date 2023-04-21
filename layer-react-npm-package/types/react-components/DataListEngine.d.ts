export interface DataListEngine {
    openAIKey: string;
    layerKey: string;
    validateKeys(): boolean;
    generateText(prompt: string): Promise<string>;
    generateTextList(prompts: string[]): Promise<string[]>;
}
export declare class MyDataListEngine implements DataListEngine {
    openAIKey: string;
    layerKey: string;
    constructor();
    validateKeys(): boolean;
    generateText(prompt: string): Promise<string>;
    generateTextList(prompts: string[]): Promise<string[]>;
}
