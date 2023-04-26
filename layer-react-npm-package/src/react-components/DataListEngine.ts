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
    return true;
  }

  async generateText(prompt: string): Promise<string> {

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

    const data = await res.json();
    return data;
  }

  async generateTextList(prompts: string[]): Promise<string[]> {
    const responses = await Promise.all(
      prompts.map((prompt) => this.generateText(prompt))
    );
    return responses;
  }
}
