import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../routes/routes";
import { useProductQuery } from "../services/product";
import { ItemsType } from "../type";
import { NotFound } from "@/components/error";
import { Loading } from "@/components/Loading";
import { ItemCard } from "./products/components";
import { EcommerceIllustration } from "@/assets/images";

export const HomeScreen = () => {
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
        bg={"gradient.purple.normal"}
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
          px={{ base: 10, md: 40 }}
          py={32}
        >
          <VStack
            alignItems={"start"}
            width={"100%"}
            gap={5}
            textColor={"white"}
          >
            <Text
              fontWeight={900}
              fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }}
              as={"i"}
            >
              Ecommerce App
            </Text>
            <Heading fontSize={{ base: "md", xl: "2xl" }}>
              Easy online shopping
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              textColor={"white"}
              textAlign={"justify"}
            >
              Navigate the Universe of Fashion, Tech, and Lifestyle: From
              Trendsetting Designs to Cutting-Edge Gadgets, Ecommerce App Guides
              You Through a Seamless Shopping Odyssey. Discover, Click, and
              Redefine Your World - Because Choices Should Be Boundless, Just
              Like Your Dreams!
            </Text>
            <Button
              variant={"secondary"}
              fontWeight={"bold"}
              onClick={() => navigate(ROUTES.PRODUCTS)}
            >
              Explore our product
            </Button>
          </VStack>
          <Image
            src={EcommerceIllustration}
            alt="Ecommerce Illustration"
            w={{ lg: 80, xl: 96 }}
            display={{ base: "none", lg: "flex" }}
          />
        </HStack>
      </Flex>
      <VStack py={10} px={{ base: 10, md: 40 }} gap={5} alignItems={"start"}>
        <Text fontSize={"xl"} fontWeight={"bold"} color={"gray.600"}>
          Featured products
        </Text>
        <Flex width={"100%"} justifyContent={"start"}>
          {isLoading ? (
            <Loading />
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
            <NotFound message="No featured products available at the moment" />
          )}
        </Flex>
      </VStack>
    </Flex>
  );
};
