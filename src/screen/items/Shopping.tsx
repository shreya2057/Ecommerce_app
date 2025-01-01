import { SearchIcon } from "@chakra-ui/icons";
import {
  CloseButton,
  Flex,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { FormControl } from "../../components/form/FormControl";
import { useAddSearchParams } from "../../hooks/useAddSearchParams";
import { useCategoryQuery, useProductQuery } from "../../services/product";
import { colors } from "../../theme/colors";
import { ItemsType } from "../../type";
import { parseQueryString } from "../../utils/parseQueryString";
import { selectOptions } from "../../utils/selectOptions";
import Banner from "./components/Banner";
import ItemCard from "./components/ItemCard";
import { NotFound } from "@/components/error";

const initialValues = {
  product: "",
  category: "",
};

function Shopping() {
  const location = useLocation();
  const searchValue = parseQueryString(location.search) as typeof initialValues;

  const { control, handleSubmit, reset, watch } = useForm<typeof initialValues>(
    {
      defaultValues: initialValues,
    }
  );

  const { data: categories } = useCategoryQuery();

  const { data: products, isLoading } = useProductQuery({
    category: watch("category"),
    title: searchValue?.product,
  });

  const { addSearchParams, deleteSearchParams } = useAddSearchParams();

  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: `repeat(${(products?.length ?? 0) >= 2 ? 2 : products?.length}, 1fr)`,
    md: `repeat(3, 1fr)`,
    lg: `repeat(4, 1fr)`,
    "2xl": `repeat(5, 1fr)`,
  });

  const categoriesList = selectOptions({
    options: categories ?? [],
    labelKey: "name",
    valueKey: "_id",
  });

  return (
    <VStack
      minHeight={"100%"}
      width={"100%"}
      justifyContent={"start"}
      gap={6}
      pb={6}
      bg={"gray.40"}
    >
      <Banner />
      <HStack
        width={"100%"}
        gap={{ base: 6, md: 0 }}
        align={"center"}
        justifyContent={"space-between"}
        px={{ base: 10, sm: 16, xl: 28 }}
      >
        <form onChange={handleSubmit(addSearchParams)}>
          <FormControl
            type="text"
            control={control}
            name="product"
            inputControl="input"
            placeholder="Search products"
            leftElement={<SearchIcon color="gray.300" />}
            rightElement={
              searchValue?.product && (
                <CloseButton
                  onClick={() => {
                    deleteSearchParams("product");
                    reset({});
                  }}
                />
              )
            }
          />
        </form>
        <Flex w={"20%"}>
          <FormControl
            control={control}
            name="category"
            options={categoriesList}
            inputControl="single-select"
            placeholder="Categories"
            placeholderColor={colors.gray[500]}
          />
        </Flex>
      </HStack>
      <Flex
        width={"100%"}
        justifyContent={"start"}
        px={{ base: 16, sm: 16, lg: 16, xl: 28 }}
      >
        {isLoading ? (
          <HStack gap={2} width={"100%"} justifyContent={"center"}>
            <Spinner size={"lg"} color="gray.500" />
            <Text fontWeight={"bold"} textColor={"gray.600"}>
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
  );
}

export default Shopping;
