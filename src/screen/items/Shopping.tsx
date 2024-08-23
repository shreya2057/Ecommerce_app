import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCategoryQuery, useProductQuery } from "../../services/product";
import { CategoryType, ItemsType } from "../../type";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ItemCard from "./components/ItemCard";

function Shopping() {
  const [selectedCategory, setCategory] = useState(1);
  const { data: products, isLoading } = useProductQuery(selectedCategory);
  const { data: categories, isLoading: isCategoriesLoading } =
    useCategoryQuery();
  // const [searchText, setSearchText] = useState("");

  const naviagte = useNavigate();
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: `repeat(${products?.length >= 3 ? 3 : products?.length}, 1fr)`,
    xl: `repeat(${products?.length >= 4 ? 4 : products?.length}, 1fr)`,
  });

  // const searchProductsQuery = useQuery(
  //     "search",
  //     ()=>searchOperation(searchText),
  //     {
  //         onSuccess: (responseData)=>{
  //             if(responseData.status===200 && typeof(responseData.message)==="object"){
  //                 if(searchText!==""){
  //                     setProducts(responseData.message.products);
  //                 }
  //             }
  //         }
  //     }
  // )

  // const searchFunction = async(event:any)=>{
  //     event.preventDefault();
  //     setCategory("");
  //     searchProductsQuery.refetch();
  // }

  return (
    <Flex
      direction={"row"}
      minHeight={"100%"}
      width={"100%"}
      justifyContent={{ base: "center", lg: "end" }}
    >
      <Flex
        width={{ lg: "20%", xl: "18%" }}
        height={"100%"}
        bgColor={"brand.600"}
        direction={"column"}
        display={{ base: "none", lg: "flex" }}
        position={{ lg: "fixed" }}
        left={0}
        top={12}
      >
        <Heading fontSize={"lg"} px={5} textColor={"brand.800"} py={3}>
          Categories
        </Heading>
        <Flex
          height={"55%"}
          direction={"column"}
          overflowY={"scroll"}
          sx={{
            "&::-webkit-scrollbar": {
              width: "0px",
            },
          }}
        >
          {isCategoriesLoading ? (
            <Flex
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              align={"center"}
              gap={2}
            >
              <Spinner size={"lg"} color="brand.700" />
              <Text fontWeight={"bold"} textColor={"brand.900"}>
                Loading...
              </Text>
            </Flex>
          ) : (
            categories?.map((items: CategoryType, index: number) => (
              <CategoryList
                category={items?.id}
                categoryName={items?.name}
                onClickFunction={() => {
                  setCategory(items?.id);
                }}
                selected={selectedCategory}
                key={index}
              />
            ))
          )}
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        height={"100%"}
        width={{ base: "100%", lg: "80%", xl: "82%" }}
        gap={4}
        alignSelf={"end"}
      >
        <Banner />
        <Flex direction={"column"} flex={1} alignSelf={"center"} width={"100%"}>
          <Flex
            direction={"row"}
            width={"100%"}
            gap={{ base: 6, md: 0 }}
            align={"center"}
            justifyContent={"space-between"}
            px={{ base: 16, sm: 28, md: 28 }}
          >
            {/* <form onSubmit={(event) => searchFunction(event)}>
              <InputGroup
                width={{ base: 200, md: 400 }}
                borderColor={"#ffd5e5"}
                _hover={{
                  borderColor: "#ffd5e5",
                }}
                _active={{
                  borderColor: "#ffd5e5",
                }}
              >
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search products"
                  _active={{
                    borderColor: "#ffd5e5",
                  }}
                  value={searchText}
                  _hover={{
                    borderColor: "#ffd5e5",
                  }}
                  onChange={(event) => setSearchText(event.target.value)}
                />
              </InputGroup>
            </form> */}
            <Button
              bgColor={"inherit"}
              textColor={"brand.900"}
              _hover={{
                backgroundColor: "brand.300",
              }}
              fontSize={"lg"}
              fontWeight={"bold"}
              display={"flex"}
              flexDirection={"row"}
              onClick={() => naviagte("/cart")}
            >
              <BiCart />
              <u>Carts</u>
            </Button>
          </Flex>
          {isLoading ? (
            <Flex
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              align={"center"}
              gap={2}
            >
              <Spinner size={"lg"} color="brand.700" />
              <Text fontWeight={"bold"} textColor={"brand.800"}>
                Loading...
              </Text>
            </Flex>
          ) : (
            <Flex
              my={4}
              width={"100%"}
              justifyContent={"center"}
              px={{ base: 16, sm: 28, md: "unset" }}
            >
              <SimpleGrid
                templateColumns={columns}
                gap={6}
                width={{ base: "100%", md: "min-content" }}
                alignItems={"center"}
                justifyItems={"center"}
              >
                {products?.map((items: ItemsType, index: number) => (
                  <ItemCard items={items} key={index} />
                ))}
              </SimpleGrid>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Shopping;
