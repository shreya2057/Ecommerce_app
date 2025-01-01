import { HStack, Spinner, Text } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <HStack gap={2} width={"100%"} justifyContent={"center"}>
      <Spinner size={"lg"} color="gray.500" />
      <Text fontWeight={"bold"} textColor={"gray.600"}>
        Loading...
      </Text>
    </HStack>
  );
};
