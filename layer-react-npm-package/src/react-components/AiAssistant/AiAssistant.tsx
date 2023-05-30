import React, { useState, useRef, useEffect } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import ListItem from "./ListItem/ListItem";
import ItemDetail from "./ItemDetail/ItemDetail";
import CrossIcon from "../../assets/icons/crossIcon";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import "./AiAssistant.scss";
import EnvironmentError from "../EnvironmentError";
import InvalidApiKeyError from "../InvalidApiKeyError";
import { MyDataListEngine } from "../DataListEngine";
import { useSpring, animated } from "@react-spring/web";
// const  imageLayer =  require("../../assets/images/layerImg.png");

export type AiAssistantProps = {
  // Props definition
  title: string;
  itemList: ItemData[];
  color: string;
  image: string;
  showPopUp?: boolean;
  showButton: boolean;
  placeholder: string;
  selectedTitle: string;
  receiveInsights: (insights: { [id: string]: string }) => void;
  receiveQueryResponse: (queryResponse: { [output: string]: string }) => void;
};

export type ItemData = {
  // ItemData definition
  title: string;
  subtitle: string;
  prompt: string;
  payload: string;
  content: string;
  id: string;
};

// Error content for OpenAI invalid key
const errorView = {
  title: "401 Error",
  message:
    "This is likely a problem with your OpenAI API key. Check if your api key is still enabled.",
};

const AiAssistant = ({
  title,
  itemList,
  color,
  image,
  showPopUp,
  showButton,
  placeholder,
  selectedTitle,
  receiveInsights,
  receiveQueryResponse,
}: AiAssistantProps) => {
  const engine = new MyDataListEngine();

  // State variables
  const [selectedTitleData, setSelectedTitleData] =
    useState<string>(selectedTitle);
  // const [searchItem, setSearchItem] = useState<string>("");

  // widget is shown or not
  const [showWidget, setShowWidget] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showEnvError, setShowEnvError] = useState<boolean>(false);
  const [showStatusError, setShowStatusError] = useState<boolean>(false);
  const [updateItemdata, setUpdateItemData] = useState<boolean>(false);
  const [itemDataList, setItemDataList] = useState<ItemData[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [showDiv, setShowDiv] = useState<boolean>(false);
  const [showArrowButton, setShowArrowButton] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<number>(0);
  const [insightData, setInsightData] = useState<any>({});

  // Refs
  const ref = useRef<any>();
  const refPopUp = useRef<HTMLDivElement>(null);
  const refBackButton = useRef<HTMLButtonElement>(null);

  // Constants
  const DEAFULT_WIDGET_HEIGHT = 200;

  // Default widget button show and hide
  useEffect(() => {
    onClickPopupButton();
  }, [showWidget]);

  // Extra widget button show and hide from demo site
  useEffect(() => {
    setShowWidget(showPopUp || false);
  }, [showPopUp]);


  // useSpring for animating widget popup
  const springProps = useSpring({
    height: showDiv ? `${divHeight}px` : "0",
    opacity: showDiv ? 1 : 0,
    overflow: "hidden",
    config: { tension: 60, friction: 10 },
  });

  const arrowButtonSpringProps = useSpring({
    opacity: showArrowButton ? 1 : 0,
    display: showArrowButton ? "inline-block" : "none",
    marginRight: showArrowButton ? "0" : "-34px",
    trans: [0, 1, 2],
  });

  // Select item from recommendation itemListData
  const onClickList = async (title: string) => {
    setShowDetails(true);
    setTimeout(() => {
      setShowArrowButton(true);
    }, 1700);

    setDivHeight(DEAFULT_WIDGET_HEIGHT);
  };

  // create function for setDivHeight
  const onSetHeight = (height: number) => {
    setDivHeight(height);
  };

  // Show or hide the widget popup
  const onClickPopupButton = async () => {
    if (!selectedTitleData && !showStatusError) {
      setDivHeight(400);
    }

    if (!showWidget) {
      setShowDiv(false);
      setInsightData({});
      if (refPopUp.current) {
        refPopUp.current.className = "main-popup-container-animate-end";
        const timer = setTimeout(() => {
          if (!selectedTitleData) {
            setShowDetails(false);
          } else {
            setSelectedTitleData("");
          }
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      setShowDiv(true);
      if (refPopUp.current) {
        refPopUp.current.className = "main-popup-container-animate-start";
      }

      let questionPrompts = [];

      if (selectedTitleData) {
        questionPrompts.push(selectedTitle);
      } else {
        questionPrompts = itemList.map((x) => x.subtitle);
      }

      if (await engine.validateApiKey()) {

      } else {
        setShowStatusError(true);
        setDivHeight(DEAFULT_WIDGET_HEIGHT);
      }
    }
  };

  // Go back to the item list
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
            onClick={() => {
              setSelectedTitleData("");
              setShowWidget(!showWidget);
            }}
            child={
              showWidget ? (
                <CrossIcon color="#ffffff" />
              ) : (
                <img src={image} alt="img" width="32px" height="32px" />
              )
            }
          />
        )}
        <animated.div
          style={springProps}
          ref={refPopUp}
          id="tunnel"
          className="main-popup-container-animate-start"
        >
          {showEnvError && <EnvironmentError color={color} />}
          {showStatusError && (
            <InvalidApiKeyError color={color} errorView={errorView} />
          )}
          {!showEnvError && !showStatusError && (
            <>
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
                  <Text
                    className="header-text-style"
                    label={title.toLowerCase()}
                  />
                </div>
              </div>
              <div className="main-item-list-container">
                {showDetails ? (
                  <ItemDetail
                    id="detailif"
                    ref={ref}
                    color={color}
                    itemData={selectedItem}
                    updateItemData={updateItemdata}
                    onSetHeight={onSetHeight}
                    placeholder={placeholder}
                    receiveInsights={receiveInsights}
                  />
                ) : (
                  itemList.map((item, index) => (
                    <ListItem
                      item={item}
                      key={index}
                      onClickList={() => {
                        onClickList(item.title);
                        setSelectedItem(itemList[index]);
                      }}
                      color={color}
                    />
                  ))
                )}
              </div>
              {/* <div className="chat-field">
                <div className="searchBox">
                  <Input
                    placeholder="Enter Product SKU or name"
                    type="text"
                    value={searchItem}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchItem(e.target.value)
                    }
                  />
                  <Button
                    child={<SendIcon color="#ffffff" />}
                    className="sendBtn"
                    onClick={() => chatBot()}
                  />
                </div>
                <div className="powered-by">
                  Powered By{" "}
                 <span><img src={imageLayer} width="40" /></span> 
                 Layer
                </div>
              </div> */}
            </>
          )}
        </animated.div>
      </div>
    </>
  );
};

export default AiAssistant;
