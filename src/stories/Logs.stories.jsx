import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'storybook-addon-remix-react-router';
import App from '../App';
import Logs from '../components/Logs'


export default {
  title: 'page/Logs',
  component: App,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
    reactRouter: {
        routePath: '/logs',
        searchParams: { timeRange: '5', time:Date.now() },
        outlet: {
            element: <Logs />,
          },
      },  
  },
};

const Template = (args) => (
  
    <App {...args} />
  
);

export const LogsStory = Template.bind({});
LogsStory.args = {
    
};