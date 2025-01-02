import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../stores/cartStore";
import { CartItemsType } from "../../type";
import CartItems from "./components/CartCards";
import { Banner } from "./components";
function Carts() {
  const toast = useToast();
  const { items, clearStates, removeItemFromCart } = useCartStore();
  const naviagte = useNavigate();
  const buyItems = () => {
    if (items.length !== 0) {
      let products = [];
      const productData = localStorage.getItem("products");
      if (productData !== null) {
        const currentData: Array<string> = JSON.parse(productData);
        products = [...currentData, ...items];
        localStorage.setItem("products", JSON.stringify(products));
      } else {
        localStorage.setItem("products", JSON.stringify(items));
      }
    }
    naviagte("/orders");
    clearStates();
  };

  const removeItems = (item: CartItemsType) => {
    removeItemFromCart(item.id);
    toast({
      title: `${item.title} removed`,
      status: "success",
      isClosable: true,
      duration: 1000,
    });
  };
  return (
    <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
      <Flex
        direction={"column"}
        flex={1}
        height={"100%"}
        gap={4}
        width={"100%"}
        align={"center"}
      >
        <Banner />
        <Flex direction={"column"} my={4}>
          <Flex width={"100%"} direction={"column"} gap={5} m={4}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              borderColor={"#ffd5e5"}
              rounded={"base"}
              py={7}
              px={{ md: 20 }}
              gap={5}
              shadow={"lg"}
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
            </Box>
            <Box width={"100%"} display={"flex"} justifyContent={"end"}>
              <Button variant={"primary"} onClick={() => buyItems()}>
                Buy Items
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Carts;
