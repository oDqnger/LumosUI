import type { Preview } from "@storybook/react";

const preview: Preview = {
  tags: ["autodocs", "autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
