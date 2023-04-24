/// <reference types="react" />
import './ListItem.scss';
export type ListItemProps = {
    item: {
        title: string;
        subtitle: string;
    };
    onClickList: () => void;
    color: string;
};
declare const ListItem: ({ item, onClickList, color }: ListItemProps) => JSX.Element;
export default ListItem;
