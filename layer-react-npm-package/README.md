<p align="center">
  <img src="https://i.imgur.com/nGbznSY.png" width="240" />
</p>

<br />
<br />

# Duckdevatgit-layer

The duckdevatgit-layer is a library that provides an AI Assistant widget.

<br>

## Installation

```bash
npm install duckdevatgit-layer
```

## Usage

The library needs to be configured with your account's secret key, which is available on the [website](https://platform.openai.com/account/api-keys). We recommend setting it as an environment variable. Here's an example of initializing the library with the API key as an environment variable.

```sh
    REACT_APP_OPEN_AI_API_KEY=your-api-key
```

<br>

You can call an `AiAssistant` component by passing `title`, `placeholder`, `itemList`, `color`, `image`, `receiveInsights`, `showButton` and `showPopUp` props. for example:

```javascript
const fakeData = [
  {
    title: "Buy",
    subtitle: "Product 1",
    payload: "This data is sent directly to open ai api",
  },
  {
    title: "Buy",
    subtitle: "Product 2",
    payload: "This is the data sent directly to open ai api",
  },
];

return (
  <div className="main-background">
    <AiAssistant
      title="Bops Insights"
      placeholder="getting insight..."
      itemList={fakeData}
      color="#7b6cf3"
      image={DemoImage}
      showButton={true}
      showPopUp={false}
      receiveInsights={(insights) => console.log(insights)}
    />
  </div>
);
```

<br/>

## Demo

 <div style="text-align:center">
 <p style="margin: 0 0 10px 0 !important;
    font-size: 16px !IMPORTANT"><strong>Step 1. </strong> Click on the button.</p>
  <img src="https://i.imgur.com/cqOOFEp.png" width="500" style="border: 1px solid #ededed;">
 </div>
 <br/>

 <div style="text-align:center">
  <p style="margin: 0 0 10px 0 !important;
    font-size: 16px !IMPORTANT"><strong>Step 2. </strong> It will open an Ai Assistant Widget.</p>
  <img src="https://i.imgur.com/7ikvpcb.png" width="500" style="border: 1px solid #ededed;">
 </div>
<br/>

 <div style="text-align:center">
 <p style="margin: 0 0 10px 0 !important;
    font-size: 16px !IMPORTANT"><strong>Step 3. </strong> When user clicks on any recommendation, it will call an openAi api.</p>
  <img src="https://i.imgur.com/X1xMc19.png" width="500" style="border: 1px solid #ededed;">
 </div>
 <br/>

 <div style="text-align:center">
 <p style="margin: 0 0 10px 0 !important;
    font-size: 16px !IMPORTANT"><strong>Step 4. </strong> Response coming from openAi api will show in the body insight view.</p>
  <img src="https://i.imgur.com/TjeuYur.png" width="500" style="border: 1px solid #ededed;">
 </div>
