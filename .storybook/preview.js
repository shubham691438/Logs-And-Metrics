import '../src/index.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options:{
      storySort:{
        order:["pages","*","components",["Navbar",["*","NavItem","TimeRangeSelect"],"ChartComponent"],]
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
