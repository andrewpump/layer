import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Input, {InputProps} from './Input';

export default {
  title: 'ReactComponentLibrary/Input',
  component: Input,
} as Meta;

const Template : Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  value: "Enter Product SKU or name",
  name: "search",
  className: "input-field",
  placeholder: "Enter Product SKU or name",
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};
