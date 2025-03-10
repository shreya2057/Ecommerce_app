import {
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import { ShoppinSaleIllustration } from "@/assets/images";
import { NotFound } from "@/components/error";
import { Loading } from "@/components/Loading";
import { useProductQuery } from "@/services";
import { ItemsType } from "@/type";
import { ItemCard } from "../products/components";
import { Landing } from "./components/Landing";

export const HomeScreen = () => {
  const { data: products, isLoading } = useProductQuery({ category: "" });
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: `repeat(${(products?.length ?? 0) >= 2 ? 2 : products?.length}, 1fr)`,
    md: `repeat(3, 1fr)`,
    lg: `repeat(4, 1fr)`,
    "2xl": `repeat(5, 1fr)`,
  });

  return (
    <Flex direction={"column"} width={"100%"} gap={20}>
      <Landing />
      <HStack px={{ base: 10, md: 40 }} width={"100%"}>
        <HStack
          width={"100%"}
          bg={"pink.50"}
          justifyContent={"space-between"}
          borderRadius={"16px"}
          gap={16}
          px={20}
        >
          <Image src={ShoppinSaleIllustration} w={"400px"} />
          <VStack p={10} flex={1} alignItems={"start"} gap={3}>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Start Shopping Now!
            </Text>
            <Text fontSize={"sm"}>
              Dive into endless possibilities with a tap! Whether upgrading your
              wardrobe, refreshing your home, or finding the perfect gift, our
              e-commerce app makes it easy to discover what you love.
            </Text>

            <Button variant={"primary_outline"} fontSize={"xs"}>
              Buy Products
            </Button>
          </VStack>
        </HStack>
      </HStack>
      <VStack px={{ base: 10, md: 40 }} alignItems={"start"}>
        <Text fontSize={"xl"} fontWeight={"bold"} color={"primary.500"}>
          Featured products
        </Text>
        <Flex width={"100%"} justifyContent={"start"} py={6}>
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
