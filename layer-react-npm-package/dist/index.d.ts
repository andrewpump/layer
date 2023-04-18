/// <reference types="react" />
type AiAssistantProps = {
    itemList: ItemData[];
    color: string;
    image: string;
};
type ItemData = {
    title: string;
    subtitle: string;
    payload: string;
};
declare const AiAssistant: ({ itemList, color, image }: AiAssistantProps) => JSX.Element;

export { AiAssistant };
