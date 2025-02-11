import { Box, HStack, Text } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";

export const AppLogo = ({
  logoSize,
  fontColor,
  display,
  fontSize,
  padding,
}: AppLogoProps) => {
  return (
    <HStack gap={3}>
      <Box
        rounded={"full"}
        bgColor={"primary.50"}
        color={"primary.500"}
        fontSize={logoSize}
        p={padding ?? 2}
        display={display ?? { base: "none", md: "flex" }}
      >
        <RiShoppingCartFill />
      </Box>
      <Text
        fontSize={fontSize ?? "xl"}
        fontWeight={800}
        color={fontColor ?? "primary.600"}
        whiteSpace={"nowrap"}
      >
        Ecommerce App
      </Text>
    </HStack>
  );
};

type AppLogoProps = {
  logoSize: string;
  fontColor?: string;
  display?: string | Record<string, string>;
  fontSize?: string;
  padding?: number;
};
