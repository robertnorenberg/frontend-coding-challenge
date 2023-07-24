import type { Preview } from "@storybook/react";
// import '../src/globals.css';

// import '!style-loader!css-loader!../src/globals.css';


import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
