import React from "react";
import { Meta, Story } from "@storybook/react";
import AiAssistant, { AiAssistantProps } from "./AiAssistant";
import myImage from '../../assets/images/demoImage.png'
export default {
  title: "ReactComponentLibrary/AiAssistant",
  component: AiAssistant,
} as Meta;

const Template: Story<AiAssistantProps> = (args) => <AiAssistant {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Bops Insight",
  itemList : [
    {
      {
        title: "Title 1",
        subtitle: "Sub Title 1",
        payload: "What is speed?",
      },
      {
      title: "Title 2",
      subtitle: "Sub Title 2",
      payload: "What is light?",
    },
    {
      title: "Title 3",
      subtitle: "Sub Title 3",
      payload: "What is chatgpt?",
    }
  ],
  placeholder: "getting insight...",
  color: "#7a6bf2",
  image: myImage,
  showPopUp: false,
  showButton: true,
};
