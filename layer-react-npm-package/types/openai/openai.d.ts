export interface OpenAIModel {
    id: string;
    name: string;
    maxLength: number;
    tokenLimit: number;
}
export declare enum OpenAIModelID {
    GPT_3_5 = "gpt-3.5-turbo",
    GPT_4 = "gpt-4"
}
export declare const fallbackModelID = OpenAIModelID.GPT_3_5;
export declare const OpenAIModels: Record<OpenAIModelID, OpenAIModel>;
