import { VStack } from "@chakra-ui/react";
import { NoItems } from "./components/NoItems";
export const Carts = () => {
  return (
    <VStack
      width={"100%"}
      flex={1}
      h={"100%"}
      justifyContent={"center"}
      bg={"gray.25"}
    >
      {/* <Banner /> */}
      <NoItems />
      {/* <Box
          display={"flex"}
          flexDirection={"column"}
          borderColor={"gray.100"}
          borderWidth={1}
          rounded={"base"}
          py={10}
          px={{ md: 20 }}
          gap={5}
          shadow={"xl"}
        >
          <Heading fontSize={"lg"}>Ordered Products</Heading>
          <Flex
            direction={"column"}
            align={"center"}
            gap={5}
            maxWidth={{ md: 600 }}
          >
            {items.length === 0 && <Text>No items added to cart</Text>}
            {items &&
              items.map((item: CartItemsType, key: number) => (
                <CartItems
                  thumbnail={item?.images[0]}
                  title={item?.title}
                  price={item?.price}
                  brand={item?.category?.name}
                  discount={0}
                  quantity={item.quantity}
                  removeItem={() => removeItems(item)}
                  key={key}
                />
              ))}
          </Flex>
        </Box> */}
      {/* <Button variant={"primary"} onClick={() => buyItems()}>
        Continue shopping
      </Button> */}
    </VStack>
  );
};
