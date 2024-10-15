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
          bg: "brand.800",
          color: "brand.100",
          _hover: {
            bg: "brand.700",
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
