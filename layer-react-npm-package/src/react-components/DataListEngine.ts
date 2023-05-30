import axios from 'axios';
import { OpenAI } from "langchain/llms/openai";


export interface DataListEngine {

  // The openai API key in the process.env file
  openAIKey: string;

  // The layerkey is the key to the layer in the process.env file
  layerKey: string;

  // A method that validates openAIKey and LayerKey
  validateApiKey(): Promise<boolean>;

  // An async method that takes as input a two string variables and returns a Promise, it makes an API call to the openAI API // makes use of the openAIKey
  generateText(prompt: string): [string, string];


  // An async method that takes in a list of string prompts, the function makes an API call to the openAI API
  // for every prompt in the list and returns a Promise that when resolved should contain list of strings // makes use of the openAIKey
  generateTextList(prompts: string[]): [string, string][];
}

enum ResponseStatus {
  WAITING = "WAITING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  ABORTED = "ABORTED",
}


export class MyDataListEngine implements DataListEngine {
  openAIKey: string;
  layerKey: string;
  model: OpenAI;

  cache: Map<string, [string, string]> = new Map();

  constructor() {
    this.openAIKey = process.env.REACT_APP_OPEN_AI_API_KEY || "";
    this.layerKey = process.env.REACT_APP_LAYER_SDK_KEY || "";
    this.model = new OpenAI({ openAIApiKey: this.openAIKey, temperature: 0.9 });
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

  async callAPI(prompt: string) {
    const res = await this.model.call(prompt);
    this.cache.set(prompt, [ResponseStatus.SUCCESS, res]);
  }


  generateText(prompt: string): [string, string] {

    // Check if the prompt is already in the cache
    if (this.cache.has(prompt)) {
      return this.cache.get(prompt) || [ResponseStatus.ERROR, "An error occured"];
    }
    
    this.cache.set(prompt, [ResponseStatus.WAITING, ""]);
    this.callAPI(prompt);

    return this.cache.get(prompt) || [ResponseStatus.WAITING, "getting response..."];
  }

  generateTextList(prompts: string[]): [string, string][] {
    const responses: [string, string][] = [];
    prompts.forEach(url => {
      const str = this.generateText(url);
      responses.push(str);
    });
    return responses;
  }
}
