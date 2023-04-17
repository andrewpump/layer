import {AiAssistant, DataListEngine} from 'duckdevatgit-layer';
import './App.css';
import DemoImage from "./assets/images/demoImage.png"

function App() {
  const getListItem  = [
    {
      "title": "Purchase more product",
      "subtitle": "PRINGLES SOUR CREAM & ONION PO"
    },
    {
      "title": "Purchase more product",
      "subtitle": "PRINGLES  SNK STK 3 FLV CRISP"
    }
  ];

  const handleListItemClick = () => {
    console.log("List item clicked");
  };

  return (
    <div className="main-background">
      <AiAssistant 
      itemList={getListItem.map((item) => ({
        ...item,
        onClickList: () => handleListItemClick(),
        color: "blue",
      }))}
      color="#7b6cf3" image={DemoImage} />
      <h1>
        BOPS React web app in this background area!
      </h1>
    </div>
  );
}

export default App;
