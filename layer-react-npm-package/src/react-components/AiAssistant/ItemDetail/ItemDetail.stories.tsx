import { Meta, Story } from '@storybook/react';
import React, { useRef } from 'react';
import ItemDetail, { ItemDetailHandle, ItemDetailProps } from './ItemDetail';

export default {
  title: 'ReactComponentLibrary/AiAssistant/ItemDetail',
  component: ItemDetail,
} as Meta;

const Template: Story<ItemDetailProps> = (args) => {
  const itemDetailRef = useRef<ItemDetailHandle>(null);

  const handleClick = () => {
    if (itemDetailRef.current) {
      itemDetailRef.current.log();
    }
  };

  return (
    <>
      <button onClick={handleClick}>Log to Console</button>
      <ItemDetail {...args} ref={itemDetailRef} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'blue',
  id: '1',
};
