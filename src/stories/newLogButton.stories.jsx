import React from 'react';
import NewLogButton from '../components/NewLogButton'; // Import the NewLogButton component

export default {
  title: 'components/NewLogButton', 
  component: NewLogButton, 
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};


const Template = (args) => <NewLogButton {...args} />;


export const Default = Template.bind({});
Default.args = {
  newLogsCnt: 5, 
  scrolToLatestLog: () => {}, 
};