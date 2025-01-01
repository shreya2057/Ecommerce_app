import { DataNotFound } from "@/assets/images";
import { Image, Text, VStack } from "@chakra-ui/react";

export const NotFound = ({ message }: { message?: string }) => {
  return (
    <VStack flex={1} width={"100%"} justifyContent={"center"}>
      <VStack>
        <Image src={DataNotFound} />
        <Text color={"gray.400"} fontWeight={"semibold"}>
          {message ?? "Data is not available"}
        </Text>
      </VStack>
    </VStack>
  );
};
