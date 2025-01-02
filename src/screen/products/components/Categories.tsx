import { SideDrawer } from "@/components/SideDrawer";
import { useAddSearchParams } from "@/hooks/useAddSearchParams";
import { useCategoryQuery } from "@/services";
import { parseQueryString } from "@/utils/parseQueryString";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FaRegListAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Categories = () => {
  const { data: categories } = useCategoryQuery();
  const location = useLocation();
  const categoryId = parseQueryString(location.search)?.category;
  const { addSearchParams } = useAddSearchParams();
  const selectCategory = (id: string) => {
    addSearchParams({ category: id });
  };
  return (
    <SideDrawer
      buttonText="Categories"
      heading={
        <HStack>
          <FaRegListAlt />
          <Text>Categories</Text>
        </HStack>
      }
    >
      <VStack width={"100%"} alignItems={"start"}>
        {categories?.map(({ _id, name }) => (
          <Flex
            width={"100%"}
            key={_id}
            px={8}
            py={2}
            cursor={"pointer"}
            bg={categoryId === _id ? "gray.200" : "transparent"}
            _hover={{ bg: "gray.100" }}
            onClick={() => selectCategory(_id)}
          >
            <Text>{name}</Text>
          </Flex>
        ))}
      </VStack>
    </SideDrawer>
  );
};
