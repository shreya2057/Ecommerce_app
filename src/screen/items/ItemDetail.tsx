import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiAddFill, RiShoppingCartFill, RiSubtractFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../../services/product";

export const ItemDetail = () => {
  const { id } = useParams();
  const { data: product } = useGetProductDetail({ id: id ?? "" });
  return (
    <Flex width={"100%"}>
      <VStack width={"100%"} height={"100%"} justifyContent={"center"}>
        <VStack width={"100%"} px={{ base: 10, sm: 16, xl: 28 }} py={10}>
          <HStack
            flexDirection={{ base: "column", lg: "row" }}
            width={"100%"}
            p={{ base: 10, sm: 14 }}
            bgColor={"brand.200"}
            gap={10}
            shadow={"md"}
          >
            <Flex
              width={{ lg: "30%" }}
              height={"350px"}
              bg={"white"}
              justifyContent={"center"}
            >
              <Image src={product?.image} />
            </Flex>
            <VStack alignItems={"start"} gap={6} width={{ lg: "70%" }}>
              <VStack alignItems={"start"} gap={3}>
                <Heading fontSize={"2xl"} textColor={"brand.800"}>
                  {product?.title}
                </Heading>
                <Heading fontSize={"lg"} textColor={"brand.800"} opacity={0.6}>
                  Category: {product?.category_name}
                </Heading>
                <Text
                  fontSize={"sm"}
                  textColor={"brand.800"}
                  textAlign={{ base: "justify", md: "left" }}
                >
                  {product?.description}
                </Text>
                <Text
                  fontSize={"sm"}
                  textColor={"brand.800"}
                  textAlign={{ base: "justify", md: "left" }}
                >
                  <b>Item Available:</b> In Stock
                </Text>
              </VStack>
              <HStack>
                <Button
                  fontSize={"sm"}
                  size={"sm"}
                  color={"brand.900"}
                  bg={"brand.400"}
                >
                  <RiSubtractFill />
                </Button>
                <Flex
                  color={"brand.800"}
                  bg={"brand.400"}
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
                  color={"brand.900"}
                  bg={"brand.400"}
                >
                  <RiAddFill />
                </Button>
              </HStack>
              <HStack>
                <Button variant={"primary"} leftIcon={<RiShoppingCartFill />}>
                  Add to cart
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};
