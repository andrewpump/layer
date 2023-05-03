import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InvalidApiKeyError, { InvalidApiKeyErrorProps } from './InvalidApiKeyError';

export default {
  title: 'ReactComponentLibrary/InvalidApiKeyError',
  component: InvalidApiKeyError,
} as Meta;

const Template: Story<InvalidApiKeyErrorProps> = (args) => <InvalidApiKeyError {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#FF0000",
  errorView: {
    title: "401 Error",
    message:
      "This is likely a problem with your OpenAI API key. Check if your api key is still enabled.",
  },
};
