/// <reference types="react" />
interface DataListEngine {
    openAIKey: string;
    layerKey: string;
    validateKeys(): boolean;
    generateText(prompt: string): Promise<string>;
    generateTextList(prompts: string[]): Promise<string[]>;
}
declare class MyDataListEngine implements DataListEngine {
    openAIKey: string;
    layerKey: string;
    constructor();
    validateKeys(): boolean;
    generateText(prompt: string): Promise<string>;
    generateTextList(prompts: string[]): Promise<string[]>;
}

type ListItemProps = {
    item: {
        title: string;
        subtitle: string;
    };
    onClickList: () => void;
    color: string;
};

type AiAssistantProps = {
    itemList: ListItemProps["item"][];
    color: string;
    image: string;
};
declare const AiAssistant: ({ itemList, color, image }: AiAssistantProps) => JSX.Element;

export { AiAssistant, DataListEngine, MyDataListEngine };
