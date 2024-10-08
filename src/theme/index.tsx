import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#fffdf0",
      200: "#fff6f9",
      300: "#f8efe7",
      400: "#f6e4ed",
      500: "#fbd5eb",
      600: "#fbe6fc",
      700: "#f4c2c2",
      800: "#b87c94",
      900: "#653059",
      1000: "#4d2f56",
    },
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
