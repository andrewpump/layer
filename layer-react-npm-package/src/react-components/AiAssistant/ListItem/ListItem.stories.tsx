import React from "react";
import { Meta, Story } from "@storybook/react";
import { ListItemProps } from "./ListItem";
import ListItem from "./ListItem";

export default {
  title: "ReactComponentLibrary/AiAssistant/ListItem",
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    title: "Default Title",
    subtitle: "Default Subtitle",
  },
  onClickList: () => console.log("Clicked List"),
  color: "#000000",
};
