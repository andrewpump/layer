import axios from 'axios';

export interface SuggestionsEngine {

  // The openai API key in the process.env file
  openAIKey: string;

  // The layerkey is the key to the layer in the process.env file
  layerKey: string;

  // A method that validates openAIKey and LayerKey
  validateApiKey(): Promise<boolean>;

  // An async method that takes as input a two string variables and returns a Promise, it makes an API call to the openAI API // makes use of the openAIKey
  generateText(prompt: string): Promise<string>;

  // An async method that takes as input a one string query variable and returns a Promise, it makes an API call to langchain in nodeJs  // makes use of the anwers of query
  chatBotResponse(prompts: string): Promise<string>

}


export class MyDataListEngine implements SuggestionsEngine {
  openAIKey: string;
  layerKey: string;

  cache: Map<string, string> = new Map();

  constructor() {
    this.openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY || "";
    this.layerKey = process.env.REACT_APP_LAYER_SDK_KEY || "";
  }

  // verify the openAi key 
  validateApiKey = async () => {
    const res = await fetch("https://api.openai.com/v1/models", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.openAIKey}`,
      },
    });
    return res?.status === 401 ? false : true;
  };

  // call langchain streaming api and get the response  
  chatBotResponse = async (searchItemData: string): Promise<any> => {
    const res = await axios.get(
      `http://localhost:5000?query=${searchItemData}`
    );
    return res;
  };

  async generateText(prompt: string): Promise<string> {
    // Sends a POST request to the OpenAI API to generate text based on the given prompt
    // Returns the generated text
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.openAIKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: prompt },
        ],
      }),
    });

    let data = await res.json();
    data.prompt = prompt;
    return data;
  }

}
