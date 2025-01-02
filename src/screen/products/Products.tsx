import { NotFound } from "@/components/error";
import { Loading } from "@/components/Loading";
import {
  Flex,
  HStack,
  SimpleGrid,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useProductQuery } from "../../services/product";
import { ItemsType } from "../../type";
import { parseQueryString } from "../../utils/parseQueryString";
import { Banner, Categories, ItemCard, Search } from "./components";

export const Products = () => {
  const location = useLocation();
  const searchValue = parseQueryString(location.search);

  const { data: products, isLoading } = useProductQuery({
    category: searchValue?.category ?? "",
    title: searchValue?.product,
  });

  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: `repeat(${(products?.length ?? 0) >= 2 ? 2 : products?.length}, 1fr)`,
    md: `repeat(3, 1fr)`,
    lg: `repeat(4, 1fr)`,
    "2xl": `repeat(5, 1fr)`,
  });

  return (
    <VStack
      minHeight={"100%"}
      width={"100%"}
      justifyContent={"start"}
      gap={6}
      pb={6}
    >
      <Banner />
      <HStack
        width={"100%"}
        gap={{ base: 6, md: 0 }}
        align={"center"}
        justifyContent={"space-between"}
        px={{ base: 10, sm: 16, xl: 28 }}
      >
        <Search />
        <Categories />
      </HStack>
      <Flex
        width={"100%"}
        justifyContent={"start"}
        px={{ base: 16, sm: 16, lg: 16, xl: 28 }}
      >
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
          <NotFound />
        )}
      </Flex>
    </VStack>
  );
};
