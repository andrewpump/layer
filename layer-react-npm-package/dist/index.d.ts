/// <reference types="react" />
type AiAssistantProps = {
    title: string;
    itemList: ItemData[];
    color: string;
    image: string;
    showPopUp?: boolean;
    showButton: boolean;
    placeholder: string;
    selectedTitle: string;
    receiveInsights: (insights: {
        [id: string]: string;
    }) => void;
    receiveQueryResponse: (queryResponse: {
        [output: string]: string;
    }) => void;
};
type ItemData = {
    title: string;
    subtitle: string;
    prompt: string;
    payload: string;
    content: string;
};
declare const AiAssistant: ({ title, itemList, color, image, showPopUp, showButton, placeholder, selectedTitle, receiveInsights, receiveQueryResponse, }: AiAssistantProps) => JSX.Element;

export { AiAssistant };
