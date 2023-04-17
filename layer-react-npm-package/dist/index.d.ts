/// <reference types="react" />
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

export { AiAssistant };
