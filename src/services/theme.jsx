import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  styles: {
    global: {
      ".chakra-divider": {
        borderColor: "rgba(0, 0, 0, 1)", // Change the border color to a darker shade
      },
    },
  },
});

export default theme;
