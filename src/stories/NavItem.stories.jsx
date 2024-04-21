import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavItem from '../components/NavItem';

import activeMetricsLogo from '../assets/metrics-active.png';
import inactiveMetricsLogo from '../assets/metrics-inactive.png';
import activeLogsLogo from '../assets/logs-active.png';
import inactiveLogsLogo from '../assets/logs-inactive.png';

export default {
  title: 'components/Navbar/NavItem',
  component: NavItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

const Template= (args) => (
  <Router>
    <NavItem {...args} />
  </Router>
);

export const MetricsNavItem = Template.bind({});
MetricsNavItem.args = {
  item: {
    name: 'Metrics',
    to: '/metrics',
    current: true,
    activeLogo: activeMetricsLogo,
    inactiveLogo: inactiveMetricsLogo,
  },
  classNames: () => {}, 
};

export const LogsNavItem = Template.bind({});
LogsNavItem.args = {
  item: {
    name: 'Logs',
    to: '/logs',
    current: true,
    activeLogo: activeLogsLogo,
    inactiveLogo: inactiveLogsLogo,
  },
  classNames: () => {}, 
};
