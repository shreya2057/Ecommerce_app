import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Button } from "./Button";

const theme = extendTheme({
  colors: colors,
  fonts: {
    heading: `'Nunito-Regular', sans-serif`,
    body: `'Nunito-Regular', sans-serif`,
  },
  components: {
    Button,
  },
});

export default theme;
