import React from "react";
import Button from "../../Button/Button";
import Text from "../../Text/Text";
import './ListItem.scss';
import ArrowForwardIcon from "../../../assets/icons/arrowForwardIcon";

export type ListItemProps = {
  item: {
    title: string;
    subtitle: string;
  };
  onClickList: () => void;
  color: string;
};

const ListItem = ({ item, onClickList, color }: ListItemProps) => {
  return (
    <Button
      onClick={onClickList}
      style={{ backgroundColor: `${color}18` }}
      className="ai-assistant-list-item-main-container"
      child={
        <div className="container">
          <div className="text-container">
            <Text className="title-text-style" label={item.title} />
            <Text className="subtitle-text-style" label={item.subtitle} />
          </div>
          <ArrowForwardIcon color={color} />
        </div>
      }
    />
  );
};

export default ListItem;
