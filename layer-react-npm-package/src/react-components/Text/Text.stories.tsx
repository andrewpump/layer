import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Text, {TextProps} from './Text';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
} as Meta;

const Template = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Hello World',
  className: 'custom-class',
};
