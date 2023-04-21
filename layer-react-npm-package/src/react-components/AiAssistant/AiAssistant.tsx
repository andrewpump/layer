import React, { useState, useRef, useEffect } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import ItemDetail from "./ItemDetail/ItemDetail";
import CrossIcon from "../../assets/icons/crossIcon";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import "./AiAssistant.scss";
import EnvironmentError from "../EnvironmentError";
import { MyDataListEngine } from "../DataListEngine";
import { useSpring, animated } from "@react-spring/web";

export type AiAssistantProps = {
  itemList: ItemData[];
  color: string;
  image: string;
};

export type ItemData = {
  title: string;
  subtitle: string;
  prompt: string;
  payload: string;
};

const AiAssistant = ({ itemList, color, image }: AiAssistantProps) => {
  const engine = new MyDataListEngine();

  if (!engine.validateKeys()) {
    return <EnvironmentError color="#FF0000" />;
  }

  const [showPopUp, setShowPopUp] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEnvError, setShowEnvError] = useState(false);
  const [itemDataList, setItemDataList] = useState<ItemData[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const ref = useRef<any>();
  const refPopUp = useRef<HTMLDivElement>(null);
  const refBackButton = useRef<HTMLButtonElement>(null);

  // Create a useEffect hook that fills itemDataList wiht ItemData objects from the itemList
  useEffect(() => {
    const tempItemDataList: ItemData[] = [];
    itemList.forEach((item) => {
      tempItemDataList.push({
        title: item.title,
        subtitle: item.subtitle,
        prompt: item.prompt,
        payload: item.payload,
      });
    });
    setItemDataList(tempItemDataList);
  }, [itemList]);

  const onClickList = async (title: string) => {
    try {
      const res = await engine.generateText(title);
    } catch (error) {
      console.log(error);
    }

    setShowDetails(true);
  };

  const onClickPopupButton = () => {
    setShowDiv(!showDiv);
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

  const [showDiv, setShowDiv] = useState(false);

  const springProps = useSpring({
    height: showDiv ? "427px" : "0",
    opacity: showDiv ? 1 : 0,
    overflow: "hidden",
    config: { tension: 110, friction: 80 },
  });

  return (
    <>
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
          <animated.div
            style={springProps}
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
                  itemData={itemDataList[selectedItem]}
                />
              ) : (
                itemList.map((item, index) => (
                  <ListItem
                    item={item}
                    key={index}
                    onClickList={() => {
                      onClickList(item.title);
                      setSelectedItem(index);
                    }}
                    color={color}
                  />
                ))
              )}
            </div>
          </animated.div>
        )}
      </div>
    </>
  );
};

export default AiAssistant;
