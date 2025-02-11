import { EmptyCart } from "@/assets/images";
import { Button, Image, Text, VStack } from "@chakra-ui/react";

export const NoItems = () => {
  return (
    <VStack
      borderColor={"gray.100"}
      borderWidth={1}
      rounded={"xl"}
      py={10}
      gap={5}
      width={"40%"}
      shadow={"xl"}
      px={20}
    >
      <Image src={EmptyCart} w={60} />
      <Text>No items added to cart</Text>
      <Button variant={"primary_outline_rounded"}>Continue shopping</Button>
    </VStack>
  );
};
