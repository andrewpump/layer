const { OpenAI } = require("langchain/llms");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");
const { ChatOpenAI } = require("langchain/chat_models/openai");
const { SerpAPI } = require("langchain/tools");
const { Calculator } = require("langchain/tools/calculator");
const express = require('express');

const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
const port = 5000;
dotenv.config();
app.use(cors())
const model = new ChatOpenAI({ temperature: 0.9 });
const tools = [
  new SerpAPI(
    process.env.SERPAPI_API_KEY,
    {
      // location: "Punjab,India",
      hl: "hi",
      gl: "in",
    }
  ),
  new Calculator(),
];

app.get('/', async  (req, res) => {
    const { url } = req;
    const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: "chat-zero-shot-react-description",
      });
      const result = await executor.call({input: url });
      res.json(result)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});