import { HStack, Text } from "@chakra-ui/react";
import { RiAlertFill } from "react-icons/ri";
import { colors } from "../theme/colors";

export const NotFound = () => {
  return (
    <HStack
      width={"100%"}
      rounded={"base"}
      py={14}
      px={14}
      bgColor={"brand.100"}
      gap={5}
      shadow={"sm"}
      justifyContent={"center"}
    >
      <RiAlertFill size={30} color={colors.brand[800]} />
      <Text
        fontSize={"md"}
        fontWeight={"bold"}
        textColor={"brand.800"}
        opacity={0.6}
      >
        Data not found
      </Text>
    </HStack>
  );
};
