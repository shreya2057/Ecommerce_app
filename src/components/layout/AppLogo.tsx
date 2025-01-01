import { Box, HStack, Text } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";

export const AppLogo = ({
  logoSize,
  fontColor,
  display,
  fontSize,
  padding,
}: {
  logoSize: string;
  fontColor?: string;
  display?: string | Record<string, string>;
  fontSize?: string;
  padding?: number;
}) => {
  return (
    <HStack gap={3}>
      <Box
        rounded={"full"}
        bgColor={"gray.100"}
        color={"gray.400"}
        fontSize={logoSize}
        p={padding ?? 2}
        display={display ?? { base: "none", md: "flex" }}
      >
        <RiShoppingCartFill />
      </Box>
      <Text
        fontSize={fontSize ?? "xl"}
        fontWeight={"bold"}
        color={fontColor ?? "gray.600"}
        whiteSpace={"nowrap"}
      >
        Ecommerce App
      </Text>
    </HStack>
  );
};
