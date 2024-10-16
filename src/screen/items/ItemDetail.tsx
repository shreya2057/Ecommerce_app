import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiAddFill, RiShoppingCartFill, RiSubtractFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../../services/product";

export const ItemDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductDetail({ id: id ?? "" });
  return (
    <Flex width={"100%"}>
      <VStack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        background={
          "linear-gradient(90deg, #FAFCFC 0%, #F0F4F4 50%, #E1E7E7 100%)"
        }
      >
        <VStack width={"100%"} px={{ base: 10, sm: 16, xl: 28 }} py={10}>
          {isLoading ? (
            <HStack gap={2} width={"100%"} justifyContent={"center"}>
              <Spinner size={"lg"} color="gray.500" />
              <Text fontWeight={"bold"} textColor={"gray.600"}>
                Loading...
              </Text>
            </HStack>
          ) : (
            <HStack
              flexDirection={{ base: "column", lg: "row" }}
              width={"100%"}
              p={{ base: 10, sm: 14 }}
              background={"white"}
              gap={10}
              shadow={"lg"}
              rounded={"md"}
            >
              <Flex
                width={{ lg: "30%" }}
                height={"350px"}
                bg={"white"}
                justifyContent={"center"}
              >
                <Image src={product?.image} />
              </Flex>
              <VStack alignItems={"start"} gap={4} width={{ lg: "70%" }}>
                <VStack alignItems={"start"} gap={3}>
                  <Heading fontSize={"2xl"} textColor={"gray.500"}>
                    {product?.title}
                  </Heading>
                  <Heading fontSize={"lg"} textColor={"gray.500"} opacity={0.8}>
                    Category: {product?.category_name}
                  </Heading>
                  <Text
                    fontSize={"md"}
                    textColor={"gray.500"}
                    textAlign={{ base: "justify", md: "left" }}
                  >
                    {product?.description}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    textColor={"gray.400"}
                    textAlign={{ base: "justify", md: "left" }}
                  >
                    <b>Item Available:</b> In Stock
                  </Text>
                </VStack>
                <HStack>
                  <Button
                    fontSize={"sm"}
                    size={"sm"}
                    color={"gray.700"}
                    bg={"gray.100"}
                  >
                    <RiSubtractFill />
                  </Button>
                  <Flex
                    color={"gray.700"}
                    bg={"gray.100"}
                    py={1.5}
                    px={3}
                    rounded={"md"}
                  >
                    <Text fontSize={"13px"}>
                      <b>Quantity:</b> 0
                    </Text>
                  </Flex>
                  <Button
                    fontSize={"sm"}
                    size={"sm"}
                    color={"gray.700"}
                    bg={"gray.100"}
                  >
                    <RiAddFill />
                  </Button>
                </HStack>
                <HStack width={"100%"} gap={4}>
                  <Box bg={"gray.100"} py={2} px={4} rounded={"md"}>
                    <Text
                      fontSize={"md"}
                      textColor={"gray.500"}
                      fontWeight={"bold"}
                      textAlign={{ base: "justify", md: "left" }}
                    >
                      Price: ${product?.price}
                    </Text>
                  </Box>
                  <Button variant={"primary"} leftIcon={<RiShoppingCartFill />}>
                    Add to cart
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          )}
        </VStack>
      </VStack>
    </Flex>
  );
};
