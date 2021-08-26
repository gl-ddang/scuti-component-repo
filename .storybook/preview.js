export const parameters = {
  backgrounds: {
    default: "main",
    values: [
      {
        name: "main",
        value: "black",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
