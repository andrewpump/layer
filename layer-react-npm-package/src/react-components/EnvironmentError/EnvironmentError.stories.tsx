import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import EnvironmentError, { EnvironmentErrorProps } from './EnvironmentError';

export default {
  title: 'ReactComponentLibrary/EnvironmentError',
  component: EnvironmentError,
} as Meta;

const Template: Story<EnvironmentErrorProps> = (args) => <EnvironmentError {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#FF0000',
};
