import { EmptyCart } from "@/assets/images";
import { Button, Image, Text, VStack } from "@chakra-ui/react";

export const NoItems = () => {
  return (
    <VStack width={"100%"} my={10}>
      {/* <Box
        width={"100%"}
        display={"flex"}
        py={4}
        px={{ base: 16, md: 28 }}
        background={"error.100"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"sm"} color={"error.800"} textAlign={"left"}>
          No items avaible on cart
        </Text>
      </Box> */}

      <VStack
        borderColor={"gray.100"}
        borderWidth={1}
        rounded={"xl"}
        py={10}
        width={"60%"}
        shadow={"xl"}
        px={20}
      >
        <Image src={EmptyCart} h={80} />
        <VStack gap={4}>
          <Text color={"primary.400"}>No items added to cart</Text>
          <Button variant={"primary_outline_rounded"}>Continue shopping</Button>
        </VStack>
      </VStack>
    </VStack>
  );
};
