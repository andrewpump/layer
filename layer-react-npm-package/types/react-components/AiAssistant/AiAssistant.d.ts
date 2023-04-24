/// <reference types="react" />
import "./AiAssistant.scss";
export type AiAssistantProps = {
    itemList: ItemData[];
    color: string;
    image: string;
};
export type ItemData = {
    title: string;
    subtitle: string;
    payload: string;
};
declare const AiAssistant: ({ itemList, color, image }: AiAssistantProps) => JSX.Element;
export default AiAssistant;
