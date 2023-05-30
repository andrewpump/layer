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
import { ItemData } from "../AiAssistant";
import { OpenAIStream } from "../../../openai/gpt4-request";

export type ItemDetailProps = {
  color: string;
  id: string;
  itemData: ItemData | null;
  updateItemData: boolean;
  onSetHeight: (height: number) => void;
  placeholder: string;
  receiveInsights: (insights: { [id: string]: string }) => void;
};

export type ItemDetailHandle = {
  log(): void;
};

type ItemDisplay = {
  title: string;
  subtitle: string;
  content: string;
};

const ItemDetail = forwardRef<ItemDetailHandle, ItemDetailProps>(
  ({ color, id, itemData, onSetHeight, placeholder, updateItemData, receiveInsights }, ref) => {
    const refForDiv = useRef<HTMLDivElement>(null);
    const [item, setItem] = useState<ItemDisplay>({
      title: itemData?.title || "",
      subtitle: itemData?.subtitle || "",
      content: itemData?.content || placeholder,
    });

    useImperativeHandle(ref, () => ({
      log() {
        if (refForDiv.current) {
          refForDiv.current.className =
            "ai-assistant-item-details-main-container-end-animation";
        }
      },
    }));

    useEffect(() => {
      if (item?.content) {
       receiveInsights({ [itemData.id]: itemData?.content });
      }
        setItem({
        ...itemData,
        content: itemData.content || placeholder,
      });

      if (itemData?.content && itemData?.content.length > 18) {
        if (itemData?.content.length > 550) {
          onSetHeight(400);
        } else if (
          itemData?.content.length > 300 &&
          itemData?.content.length < 550
        ) {
          onSetHeight(320);
        } else if (
          itemData?.content.length > 150 &&
          itemData?.content.length < 300
        ) {
          onSetHeight(270);
        } else {
          onSetHeight(200);
        }
      }
    }, [updateItemData]);

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
            <Text className="subtitle-text-style" label={itemData.subtitle} />
          </div>
          <Text className="detail-text-style" label={item.content || 'getting insight...'} />
        </div>
      </div>
    );
  }
);

export default ItemDetail;
