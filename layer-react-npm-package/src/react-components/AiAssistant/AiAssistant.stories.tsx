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
  itemList : [
    {
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
    {
      title: "Purchase More:",
      subtitle: "PRINGLES SOUR CREAM & ONION PO",
    },
  ],
  color: "#7a6bf2",
  image: myImage,
};
