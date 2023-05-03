import React, { useState, useRef, useEffect } from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import ItemDetail from "./ItemDetail/ItemDetail";
import CrossIcon from "../../assets/icons/crossIcon";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import "./AiAssistant.scss";
import EnvironmentError from "../EnvironmentError";
import InvalidApiKeyError from "../InvalidApiKeyError";
import { MyDataListEngine } from "../DataListEngine";
import { useSpring, animated } from "@react-spring/web";

export type AiAssistantProps = {
  title: string;
  itemList: ItemData[];
  color: string;
  image: string;
  showPopUp?: boolean;
  showButton: boolean;
  placeholder: string;
  receiveInsights: (insights: { [id: string]: string }) => void;
};

export type ItemData = {
  title: string;
  subtitle: string;
  prompt: string;
  payload: string;
  content: string;
};
const errorView = {
  title: "401 Error",
  message:"This is likely a problem with your OpenAI API key. Check if your api key is still enabled."
}
const AiAssistant = ({
  title,
  itemList,
  color,
  image,
  showPopUp,
  showButton,
  placeholder,
  receiveInsights,
}: AiAssistantProps) => {
  const engine = new MyDataListEngine();

  if (!engine.validateKeys()) {
    return <EnvironmentError color="#FF0000" />;
  }
  const [showWidget, setShowWidget] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEnvError, setShowEnvError] = useState(false);
  const [showStatusError, setShowStatusError] = useState(false);
  const [updateItemdata, setUpdateItemData] = useState(false);
  const [itemDataList, setItemDataList] = useState<ItemData[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [showDiv, setShowDiv] = useState(false);
  const [showArrowButton, setShowArrowButton] = useState(false);
  const [divHeight, setDivHeight] = useState(0);
  const [insightList, setInsightList] = useState<any>([]);
  const ref = useRef<any>();
  const refPopUp = useRef<HTMLDivElement>(null);
  const refBackButton = useRef<HTMLButtonElement>(null);
  const DEAFULT_HEIGHT = 200;

  // Create a useEffect hook that fills itemDataList wiht ItemData objects from the itemList
  useEffect(() => {
    const tempItemDataList: ItemData[] = [];
    itemList.forEach((item) => {
      tempItemDataList.push({
        title: item.title,
        subtitle: item.subtitle,
        prompt: item.prompt,
        payload: item.payload,
        content:'',
      });
    });
    setItemDataList(tempItemDataList);
    setUpdateItemData(!updateItemdata);
  }, [itemList]);

  // Create a useEffect hook that fills insightList wiht insightList coming from api response
  useEffect(() => {
    if (insightList.length && itemDataList.length) {
      insightList.forEach((item: any, index: number) => {
        itemDataList[index].content = !item?.error
          ? item?.choices[0]?.message?.content
          : "";
      });
      setItemDataList(itemDataList);
      setUpdateItemData(!updateItemdata);
    }
  }, [insightList]);

  useEffect(() => {
    onClickPopupButton();
  }, [showWidget]);

  useEffect(() => {
    setShowWidget(showPopUp || false);
  }, [showPopUp]);

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

  const onClickList = async (title: string) => {
    setShowDetails(true);
    setTimeout(() => {
      setShowArrowButton(true);
    }, 1700);
    try {
      setDivHeight(DEAFULT_HEIGHT);
      itemDataList[selectedItem].content =
        insightList[selectedItem]?.choices[0].message.content;
    } catch (error) {
      setDivHeight(DEAFULT_HEIGHT);
      console.log(error);
    }
  };

  const onSetHeight = (height: number) => {
    setDivHeight(height);
  };

  const onClickPopupButton = async () => {
    setShowArrowButton(false);
    setDivHeight(400);
    if (!showWidget) {
      setShowDiv(false);
      if (refPopUp.current) {
        refPopUp.current.className = "main-popup-container-animate-end";
        const timer = setTimeout(() => {
          setShowDetails(false);
          setInsightList([]);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      setShowDiv(true);
      if (refPopUp.current) {
        refPopUp.current.className = "main-popup-container-animate-start";
      }
      if (await validateApiKey()) {
        const prompts = itemList.map((x) => x.prompt + x.payload);
        const response = await engine.generateTextList(prompts);
       if(response.length){
          setInsightList(response);
          const filteredResponse = response.filter((x:any)=>!x.error);
          const insights = Object.assign(
            {},
            ...filteredResponse.map((x: any) => ({
              [x.id]: x.choices[0]?.message?.content,
            }))
          );
          receiveInsights(insights);
        }
      } else {
        setShowStatusError(true);
      }
      }
  };

  const validateApiKey = async () => {
    const res = await fetch("https://api.openai.com/v1/models", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${engine.openAIKey}`,
      },
    });
    return res?.status === 401 ? false : true;
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
            onClick={() => setShowWidget(!showWidget)}
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
          {showStatusError && <InvalidApiKeyError color={color} errorView={errorView}/>}
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
            </>
          )}
        </animated.div>
      </div>
    </>
  );
};

export default AiAssistant;