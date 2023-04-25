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
  showPopUp?: boolean;
  showButton: boolean;
};

export type ItemData = {
  title: string;
  subtitle: string;
  prompt: string;
  payload: string;
};

const AiAssistant = ({ itemList, color, image, showPopUp, showButton }: AiAssistantProps) => {
  const engine = new MyDataListEngine();

  if (!engine.validateKeys()) {
    return <EnvironmentError color="#FF0000" />;
  }

  const [showWidget, setShowWidget] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEnvError, setShowEnvError] = useState(false);
  const [itemDataList, setItemDataList] = useState<ItemData[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [showDiv, setShowDiv] = useState(false);
  const [showArrowButton, setShowArrowButton] = useState(false);
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef<any>();
  const refPopUp = useRef<HTMLDivElement>(null);
  const refBackButton = useRef<HTMLButtonElement>(null);
 const DEAFULT_HEIGHT = 200
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

  useEffect(() => {
    if (showPopUp) {
      onClickPopupButton();
    }
  }, []);

  const springProps = useSpring({
    height: showDiv ?`${divHeight}px` : "0",
    opacity: showDiv ? 1 : 0,
    overflow: "hidden",
    config: { tension: 80, friction: 50 },
  });

  const arrowButtonSpringProps = useSpring({
    opacity: showArrowButton ? 1 : 0,
    marginRight: showArrowButton ? "0" : "-34px",
    trans: [0, 1, 2],
  });

  const onClickList = async (title: string) => {
    setShowDetails(true);
    setTimeout(() => {
    setShowArrowButton(true);
    }, 1700);
    try {
      setDivHeight(DEAFULT_HEIGHT);
      const res = await engine.generateText(title);
    } catch (error) {
      setDivHeight(DEAFULT_HEIGHT);
      console.log(error);
    }
  };

  const onSetHeight=(height:number)=>{
    setDivHeight(height);
  };

  const onClickPopupButton = () => {
    setShowArrowButton(false);
    setShowDiv(!showDiv);
    setDivHeight(400);
    if (showWidget) {
      if (refPopUp.current) {
        refPopUp.current.className = "main-popup-container-animate-end";
        const timer = setTimeout(() => {
          setShowDetails(false);
          setShowWidget(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      setShowWidget(true);
    }
  };

  const onClickBackButton = () => {
    setShowDetails(true);
    setTimeout(() => {
    setDivHeight(400);
    }, 400);

    if (showDetails) {
      if (refBackButton.current) {
        refBackButton.current.className =
          "ai-assistant-main-popup-header-back-button-style-end";
        ref.current.log();
        setShowArrowButton(false);
        const timer = setTimeout(() => {
          setShowDetails(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      setShowArrowButton(false);
      setShowDetails(true);
    }
  };

  return (
    <>
      <div className="ai-assistant-main-container">
        {showButton && (
          <Button
            style={{ backgroundColor: color }}
            className="main-popup-button"
            onClick={() => onClickPopupButton()}
            child={
              showWidget ? (
                <CrossIcon color="#ffffff" />
              ) : (
                <img src={image} alt="img" width="32px" height="32px" />
              )
            }
          />
        )}

        {showWidget && (
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
              <animated.button
                style={arrowButtonSpringProps}
                ref={refBackButton}
                onClick={() => onClickBackButton()}
                className="header-back-button-style"
              >
                <ArrowRightIcon color={color} />
              </animated.button>

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
                  onSetHeight={onSetHeight}
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
