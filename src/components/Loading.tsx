import { HStack, Spinner, Text } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <HStack gap={2} width={"100%"} justifyContent={"center"}>
      <Spinner size={"lg"} color="primary.500" />
      <Text fontWeight={"bold"} textColor={"primary.500"}>
        Loading...
      </Text>
    </HStack>
  );
};
