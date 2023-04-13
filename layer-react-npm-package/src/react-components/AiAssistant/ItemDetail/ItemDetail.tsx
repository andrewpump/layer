import React, {
    useRef,
    forwardRef,
    useImperativeHandle,
  } from "react";
  import Text from "../../../react-components/Text";
  import "../../../assets/styles/styles.scss";
  import "./ItemDetail.scss";
  
  export type ItemDetailProps = {
    color: string;
    id: string;
  };
  
  export type ItemDetailHandle = {
    log(): void;
  };
  
  const ItemDetail = forwardRef<ItemDetailHandle, ItemDetailProps>(
    ({ color, id }, ref) => {
      const refForDiv = useRef<HTMLDivElement>(null);
  
      useImperativeHandle(ref, () => ({
        log() {
          if (refForDiv.current) {
            refForDiv.current.className =
              "ai-assistant-item-details-main-container-end-animation";
          }
        },
      }));
  
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
              <Text className="title-text-style" label="Purchase More:" />
              <Text
                className="subtitle-text-style"
                label="PRINGLES SOUR CREAM & ONION PO"
              />
            </div>
            <Text
              className="detail-text-style"
              label='The policy action recommended for the product "PRINGLES SOUR CREAM & ONION PO" is to "Purchase more product" due to low inventory levels. The target inventory for the product is 4,982, but the current inventory available is only 4 units which is significantly low. The available weekly inventory on hand is estimated to be 4,929.6 units, with a monthly demand estimated to be 1,190 units. In the last 4 weeks, the product has had a demand of 5,057 units, an amount which is greater than the available inventory. Furthermore, based on the ABC classification, this product is classified as "A", which means high consumption and therefore requires adequate stocking.Based on this information, purchasing more product should be done to prevent understocking and ensure that the available inventory meets demand.'
            />
          </div>
        </div>
      );
    }
  );
  
  export default ItemDetail;
  