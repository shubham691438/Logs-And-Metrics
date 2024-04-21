import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'storybook-addon-remix-react-router';
import App from '../App';
import Metrics from '../components/Metrics'


export default {
  title: 'page/Metrics',
  component: App,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
    reactRouter: {
        routePath: '/metrics',
        searchParams: { timeRange: '5', time:Date.now() },
        outlet: {
            element: <Metrics />,
          },
      },  
  },
};

const Template = (args) => (
  
    <App {...args} />
  
);

export const MetricsStory = Template.bind({});
MetricsStory.args = {
    
};