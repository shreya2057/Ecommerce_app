import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const theme = extendTheme({
  colors: colors,
  fonts: {
    heading: `'Nunito-Regular', sans-serif`,
    body: `'Nunito-Regular', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        primary: {
          bg: "gray.700",
          color: "brand.100",
          _hover: {
            bg: "gray.500",
          },
        },
        light: {
          bg: "gray.200",
          color: "gray.700",
          _hover: {
            bg: "gray.500",
            color: "gray.100",
          },
        },
        iconButton: {
          bgColor: "brand.800",
          textColor: "brand.100",
        },
      },
    },
  },
});

export default theme;
