import React from "react";
import "../../../assets/styles/styles.scss";
import "./ItemDetail.scss";
import { ItemData } from "../AiAssistant";
export type ItemDetailProps = {
    color: string;
    id: string;
    itemData: ItemData;
};
export type ItemDetailHandle = {
    log(): void;
};
declare const ItemDetail: React.ForwardRefExoticComponent<ItemDetailProps & React.RefAttributes<ItemDetailHandle>>;
export default ItemDetail;
