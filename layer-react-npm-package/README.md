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

You can call an `AiAssistant` component by passing `itemList`, `color` and `image` props. for example:

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
    <AiAssistant itemList={fakeData} color="#7b6cf3" image={DemoImage} />
  </div>
);
```

<br/>

## Demo

 <div style="text-align:center"><img src="https://i.imgur.com/cqOOFEp.png" width="500"></div>
 <br/>
 <div style="text-align:center"><img src="https://i.imgur.com/7ikvpcb.png" width="500"></div>
  <br/>
 <div style="text-align:center"><img src="https://i.imgur.com/X1xMc19.png" width="500"></div>
  <br/>
 <div style="text-align:center"><img src="https://i.imgur.com/TjeuYur.png" width="500"></div>
