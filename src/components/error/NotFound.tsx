import { DataNotFound } from "@/assets/images";
import { Image, Text, VStack } from "@chakra-ui/react";

export const NotFound = ({ message }: { message?: string }) => {
  return (
    <VStack flex={1} width={"100%"} justifyContent={"center"}>
      <VStack>
        <Image src={DataNotFound} h={60} />
        <Text color={"primary.400"}>{message ?? "Data is not available"}</Text>
      </VStack>
    </VStack>
  );
};
