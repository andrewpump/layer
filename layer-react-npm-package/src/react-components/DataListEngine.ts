import axios from 'axios';

export interface DataListEngine {

  // The openai API key in the process.env file
  openAIKey: string;

  // The layerkey is the key to the layer in the process.env file
  layerKey: string;

  // A method that validates openAIKey and LayerKey
  validateKeys(): boolean;

  // An async method that takes as input a two string variables and returns a Promise, it makes an API call to the openAI API // makes use of the openAIKey
  generateText(prompt: string): Promise<string>;

  // An async method that takes in a list of string prompts, the function makes an API call to the openAI API
  // for every prompt in the list and returns a Promise that when resolved should contain list of strings // makes use of the openAIKey
  generateTextList(prompts: string[]): Promise<string[]>;
}

export class MyDataListEngine implements DataListEngine {
  openAIKey: string;
  layerKey: string;

  constructor() {
    this.openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY || "";
    this.layerKey = process.env.REACT_APP_LAYER_SDK_KEY || "";
  }

  validateKeys(): boolean {
    // Your implementation here to validate the API keys
    if (this.openAIKey === "AB12C3D4-E5FG-67H8-91J0-KLMN120P3Q45") {
        return true;
    }
    return false;
  }

  async generateText(prompt: string): Promise<string> {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: prompt,
        max_tokens: 50,
        n: 1,
        stop: "\n",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  }

  async generateTextList(prompts: string[]): Promise<string[]> {
    const responses = await Promise.all(
      prompts.map((prompt) => this.generateText(prompt))
    );
    return responses;
  }
}
