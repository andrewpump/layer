import React, {
  useEffect,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
  } from "react";
import Text from "../../../react-components/Text";
import "../../../assets/styles/styles.scss";
import "./ItemDetail.scss";
import { ItemData } from "../AiAssistant"
import { OpenAIStream } from "../../../openai/gpt4-request";


export type ItemDetailProps = {
  color: string;
  id: string;
  itemData: ItemData;
};

export type ItemDetailHandle = {
  log(): void;
};

type ItemDisplay = {
  title: string;
  subtitle: string;
  content: string;
}

const ItemDetail = forwardRef<ItemDetailHandle, ItemDetailProps>(
  ({ color, id, itemData }, ref) => {
    const refForDiv = useRef<HTMLDivElement>(null);

    const [item, setItem] = useState<ItemDisplay>({
      title: itemData.title,
      subtitle: itemData.subtitle,
      content: "generating text...",
    });

    useImperativeHandle(ref, () => ({
      log() {
        if (refForDiv.current) {
          refForDiv.current.className =
            "ai-assistant-item-details-main-container-end-animation";
        }
      },
    }));

    // create a useEffect hook that calls generateText() when the component mounts
    useEffect(() => {
      generateText();
    }, []);


    // call openai streaming api and update item content with the response
    const generateText = async () => {
      const res = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
          },
          body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": itemData.prompt + itemData.payload}]
          }),
        }
      );
      const data = await res.json();
      console.log("Data: ", data);
      setItem({
        title: itemData.title,
        subtitle: itemData.subtitle,
        content: data.choices[0].message.content,
      });
    };


    return (
      <div
        ref={refForDiv}
        style={{ backgroundColor: `${color}18` }}
        className={"ai-assistant-item-details-main-container"}
      >
        <div className="ai-assistant-item-details-container">
          <div
            style={{ borderBottomColor: color }}
            className="ai-assistant-item-details-heading-text-container "
          >
            <Text className="title-text-style" label={itemData.title} />
            <Text
              className="subtitle-text-style"
              label={itemData.subtitle}
            />
          </div>
          <Text
            className="detail-text-style"
            label={item.content}
          />
        </div>
      </div>
    );
  }
);

export default ItemDetail;
