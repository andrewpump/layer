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
  itemList: [
    { title: "Item 1", subtitle: "Sub Title 1" },
    { title: "Item 2", subtitle: "Sub Title 2" },
    { title: "Item 3", subtitle: "Sub Title 3" },
  ],
  color: "#7a6bf2",
  image: myImage,
};
