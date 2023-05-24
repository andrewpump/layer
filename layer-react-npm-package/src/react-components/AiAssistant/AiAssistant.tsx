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
  const [showWidget, setShowWidget] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showEnvError, setShowEnvError] = useState<boolean>(false);
  const [showStatusError, setShowStatusError] = useState<boolean>(false);
  const [updateItemdata, setUpdateItemData] = useState<boolean>(false);
  const [itemDataList, setItemDataList] = useState<ItemData[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);
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

  // Fill itemDataList with ItemData objects from the itemList
  useEffect(() => {
    const tempItemDataList: ItemData[] = [];
    itemList.forEach((item) => {
      tempItemDataList.push({
        title: item.title,
        subtitle: item.subtitle,
        prompt: item.prompt,
        payload: item.payload,
        content: "",
        id: "",
      });
    });
    setItemDataList(tempItemDataList);
    setUpdateItemData(!updateItemdata);
  }, [itemList, selectedTitle]);

  // Fill insightList with data from API response
  useEffect(() => {
    if (insightData && Object.keys(insightData).length && itemDataList.length) {
      if (itemDataList.length) {
        const index = itemDataList.findIndex(
          (x) => x.subtitle === insightData?.prompt
        );
        itemDataList[index].content = insightData?.choices[0]?.message?.content;
        itemDataList[index].id = insightData?.id;
      }
      setItemDataList(itemDataList);
      setUpdateItemData(!updateItemdata);
    }
  }, [insightData]);

  // Default widget button show and hide
  useEffect(() => {
    onClickPopupButton();
  }, [showWidget]);

  // Extra widget button show and hide from demo site
  useEffect(() => {
    setShowWidget(showPopUp || false);
  }, [showPopUp]);

  // Call API when selecting a recommendation for a single item from the demo site list
  useEffect(() => {
    setSelectedTitleData(selectedTitle);

    if (selectedTitle) {
      setInsightData({});

      const index = itemList.findIndex((x) => x.subtitle === selectedTitle);

      if (showWidget) {
        (async () => {
          if (await engine.validateApiKey()) {
            let questionPrompts = [];
            questionPrompts.push(selectedTitle);
            await getInsights(questionPrompts, index);
          } else {
            setShowStatusError(true);
          }
        })();
      } else {
        setShowWidget(true);
      }

      setShowDetails(true);
      if (index === -1) {
        setSelectedItem(0);
      } else {
        setSelectedItem(index);
      }
    }
  }, [selectedTitle]);

  // Set height of widget pop when item data is received from API success response
  useEffect(() => {
    if (!itemDataList[selectedItem]?.content) {
      setDivHeight(DEAFULT_WIDGET_HEIGHT);
    }
  }, [itemDataList[selectedItem]]);

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
        await getInsights(questionPrompts);
      } else {
        setShowStatusError(true);
        setDivHeight(DEAFULT_WIDGET_HEIGHT);
      }
    }
  };

  // Get insights from OpenAI API
  const getInsights = async (promptsData: string[]) => {
    let response = {};
    let errorPromises: string[] = []; // Fix the declaration and initialization
    const promises = await engine.generateTextList(promptsData);
  
    while (promises.length > 0) {
      const completedIndex = await Promise.race(
        promises.map((promise, index) =>
          Promise.resolve(promise).then(() => index)
        )
      );
      const completedPromise = promises[completedIndex];
      promises.splice(completedIndex, 1);
      response = await completedPromise;
  
      if (!response?.error) {
        setInsightData(response);
      } else {
        errorPromises.push(response?.prompt);
      }
    }
  
    if (errorPromises.length > 0) {
      setTimeout(async () => {
        await getInsights(errorPromises);
      }, 7000);
    } else {
      errorPromises = [];
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

  // // Send a query to the chatbot
  // const chatBot = async () => {
  //   try {
  //     const itemResponse = await engine.chatBotResponse(searchItem);
  //     receiveQueryResponse(itemResponse?.data);
  //     setSearchItem("");
  //   } catch (error) {
  //     console.error(error, "ERROR");
  //   }
  // };

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
                    itemData={itemDataList[selectedItem]}
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
                        setSelectedItem(index);
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
