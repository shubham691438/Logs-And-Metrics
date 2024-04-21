import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default {
  title: 'components/Navbar',
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <Router>
    <Navbar {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  searchParams: {
    get: () => '5',
  },
  setChanges: () => {}, 
};