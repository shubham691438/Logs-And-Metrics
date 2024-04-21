import React from 'react';
import TimeRangeSelect from '../components/TimeRangeSelect';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Navbar/TimeRangeSelect',
  component: TimeRangeSelect,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

const Template = (args) => <TimeRangeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchParams: {
    get: () => '5', 
  },
  setChanges: action('setChanges'),
};
