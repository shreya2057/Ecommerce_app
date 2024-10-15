import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { RiShoppingCartFill } from "react-icons/ri";
import { ROUTES } from "../routes/routes";
import { useProductQuery } from "../services/product";
import ItemCard from "./items/components/ItemCard";
import { ItemsType } from "../type";
import { NotFound } from "../components/NotFound";

function HomeScreen() {
  const navigate = useNavigate();
  const { data: products, isLoading } = useProductQuery({ category: "" });
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: `repeat(${(products?.length ?? 0) >= 2 ? 2 : products?.length}, 1fr)`,
    md: `repeat(3, 1fr)`,
    lg: `repeat(4, 1fr)`,
    "2xl": `repeat(5, 1fr)`,
  });
  return (
    <Flex direction={"column"} width={"100%"}>
      <Flex
        bg={"brand.600"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          gap={20}
          width={"100%"}
          px={40}
          py={32}
        >
          <VStack
            alignItems={"start"}
            width={"100%"}
            gap={5}
            textColor={"white"}
          >
            <Text fontWeight={900} fontSize={"6xl"} as={"i"}>
              Ecommerce App
            </Text>
            <Heading fontSize={"2xl"}>Easy online shopping</Heading>
            <Text fontSize={"md"} textColor={"white"} textAlign={"justify"}>
              Navigate the Universe of Fashion, Tech, and Lifestyle: From
              Trendsetting Designs to Cutting-Edge Gadgets, Ecommerce App Guides
              You Through a Seamless Shopping Odyssey. Discover, Click, and
              Redefine Your World - Because Choices Should Be Boundless, Just
              Like Your Dreams!
            </Text>
            <Button
              variant={"primary"}
              onClick={() => navigate(ROUTES.PRODUCTS)}
            >
              Explore our product
            </Button>
          </VStack>

          <Box
            rounded={"full"}
            bgColor={"white"}
            textColor={"brand.700"}
            fontSize={"160px"}
            p={10}
          >
            <RiShoppingCartFill />
          </Box>
        </HStack>
      </Flex>
      <VStack py={10} px={40} alignItems={"start"}>
        <Text fontSize={"lg"} fontWeight={"bold"} color={"brand.800"}>
          Featured products
        </Text>
        <Flex
          width={"100%"}
          justifyContent={"start"}
          px={{ base: 16, sm: 16, lg: 16, xl: 28 }}
        >
          {isLoading ? (
            <HStack gap={2} width={"100%"} justifyContent={"center"}>
              <Spinner size={"lg"} color="brand.700" />
              <Text fontWeight={"bold"} textColor={"brand.800"}>
                Loading...
              </Text>
            </HStack>
          ) : products?.length ? (
            <SimpleGrid
              templateColumns={columns}
              gap={6}
              width={{ base: "100%", md: "100%" }}
              alignItems={"center"}
              justifyItems={"center"}
            >
              {products?.map((items: ItemsType, index: number) => (
                <ItemCard items={items} key={index} />
              ))}
            </SimpleGrid>
          ) : (
            <NotFound />
          )}
        </Flex>
      </VStack>
    </Flex>
  );
}

export default HomeScreen;
