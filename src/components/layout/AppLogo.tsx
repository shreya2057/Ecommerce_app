import { ROUTES } from "@/routes/routes";
import { Box, HStack, Text } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const AppLogo = ({
  logoSize,
  fontColor,
  display,
  fontSize,
  padding,
}: AppLogoProps) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(ROUTES.LANDING);
  };
  return (
    <HStack gap={3} cursor={"pointer"} onClick={navigateToHome}>
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
