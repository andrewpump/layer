import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "primary-button",
  child: "Click me",
};
