/// <reference types="react" />
declare type ListItemProps = {
    item: {
        title: string;
        subtitle: string;
    };
    onClickList: () => void;
    color: string;
};

declare type AiAssistantProps = {
    itemList: ListItemProps["item"][];
    color: string;
    image: string;
};
declare const AiAssistant: ({ itemList, color, image }: AiAssistantProps) => JSX.Element;

export { AiAssistant };
