import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Loader from './Loader';

const meta: Meta = {
  title: "ReactComponentLibrary/Loader",
  component: Loader,
};

export default meta;

const Template: Story = (args) => <Loader  />;

export const Default = Template.bind({});
