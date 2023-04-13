import {AiAssistant} from 'duckdevatgit-layer';
import './App.css';
import DemoImage from "./assets/images/demoImage.png"

function App() {
  const getListItem = [
    {
      id: "1",
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      id: "2",
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      id: "3",
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      id: "4",
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      id: "5",
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      id: "6",
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
  ];

  return (
    <div className="main-background">
      <AiAssistant itemList={getListItem} color="#7b6cf3" image={DemoImage} />
      <h1>
        BOPS React web app in this background area!
      </h1>
    </div>
  );
}

export default App;
