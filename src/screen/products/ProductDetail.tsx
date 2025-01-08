import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiAddFill, RiShoppingCartFill, RiSubtractFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductDetail } from "../../services/product";
import { useState } from "react";
import { Loading } from "@/components/Loading";
import { useAddToCart } from "@/services";
import { useIsAuthenticated } from "@/hooks";
import { ROUTES } from "@/routes/routes";

export const ProductDetail = () => {
  const id = useParams()?.id ?? "";
  const { data: product, isLoading } = useGetProductDetail({ id: id });
  const { mutateAsync: addToCart } = useAddToCart();
  const { data: isAuthenticated } = useIsAuthenticated();
  const navigate = useNavigate();
  const [noOfProducts, setNoOfProducts] = useState(0);
  const increaseNoOfProducts = () => {
    setNoOfProducts((prev) => prev + 1);
  };
  const decreaseNoOfProducts = () => {
    if (noOfProducts >= 1) {
      setNoOfProducts((prev) => prev - 1);
    }
  };

  const onAddToCart = async () => {
    if (isAuthenticated) {
      await addToCart({ product: id, number: noOfProducts });
      setNoOfProducts(0);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };
  return (
    <Flex width={"100%"}>
      <VStack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        background={"gradient.gray.light"}
      >
        <VStack width={"100%"} px={{ base: 10, sm: 16, xl: 28 }} py={10}>
          {isLoading ? (
            <Loading />
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
                    onClick={decreaseNoOfProducts}
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
                      <b>Quantity:</b> {noOfProducts}
                    </Text>
                  </Flex>
                  <Button
                    fontSize={"sm"}
                    size={"sm"}
                    color={"gray.700"}
                    bg={"gray.100"}
                    onClick={increaseNoOfProducts}
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
                  <Button
                    variant={"primary"}
                    leftIcon={<RiShoppingCartFill />}
                    onClick={onAddToCart}
                  >
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
