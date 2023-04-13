import React, { useState, useRef  } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import ItemDetail from "./ItemDetail/ItemDetail";
import CrossIcon from "../../assets/icons/crossIcon";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import "./AiAssistant.scss";
import EnvironmentError from "../EnvironmentError";

export type AiAssistantProps = {
  itemList: ListItemProps["item"][];
  color: string;
  image: string;
};

const AiAssistant = ({ itemList, color, image }: AiAssistantProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEnvError, setShowEnvError] = useState(false);

  const ref = useRef<any>();
  const refPopUp = useRef<HTMLDivElement>(null);
  const refBackButton = useRef<HTMLButtonElement>(null);

  const onClickList = () => {
    setShowDetails(true);
  };

  const onClickPopupButton = () => {
    setShowDetails(false);
    if (showPopUp) {
      if (refPopUp.current) {
        refPopUp.current.className = "main-popup-container-animate-end";
        const timer = setTimeout(() => {
          setShowPopUp(false);
        }, 250);
        return () => clearTimeout(timer);
      }
    } else {
      setShowPopUp(true);
    }
  };

  const onClickBackButton = () => {
    if (showDetails) {
      if (refBackButton.current) {
        refBackButton.current.className =
          "ai-assistant-main-popup-header-back-button-style-end";
        ref.current.log();
        const timer = setTimeout(() => {
          setShowDetails(false);
        }, 250);
        return () => clearTimeout(timer);
      }
    } else {
      setShowDetails(true);
    }
  };

  return (
    <div className="ai-assistant-main-container">
      <Button
        style={{ backgroundColor: color }}
        className="main-popup-button"
        onClick={() => onClickPopupButton()}
        child={
          showPopUp ? (
            <CrossIcon color="#ffffff" />
          ) : (
            <img src={image} alt="img" width="32px" height="32px" />
          )
        }
      />
      {showPopUp && (
        <div
          ref={refPopUp}
          id="tunnel"
          className="main-popup-container-animate-start"
        >
          {showEnvError && <EnvironmentError color={color} />}
          <div
            className="popup-header-container"
            style={{ borderBottomColor: color }}
          >
            {showDetails && (
              <button
                ref={refBackButton}
                onClick={() => onClickBackButton()}
                className="header-back-button-style"
              >
                <ArrowRightIcon color={color} />
              </button>
            )}
            <div className="header-text-container">
              <Text className="header-text-style" label="Bops Insight" />
            </div>
          </div>
          <div className="main-item-list-container">
            {showDetails ? (
              <ItemDetail
                id="detailif"
                ref={ref}
                color={color}
              />
            ) : (
              itemList.map((item, index) => (
                <ListItem
                  item={item}
                  key={index}
                  onClickList={() => onClickList()}
                  color={color}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;