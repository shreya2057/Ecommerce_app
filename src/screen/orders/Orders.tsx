import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CartItemsType } from "../../type";
export const Orders = () => {
  const [orderedProducts, setOrderedProducts] = useState<CartItemsType[]>();
  useEffect(() => {
    const orderData = localStorage.getItem("products");
    const orders = orderData && JSON.parse(orderData);
    setOrderedProducts(orders);
  }, []);
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
        {/* <Banner /> */}
        <Flex direction={"column"} my={4}>
          <Flex
            direction={"row"}
            align={"center"}
            justifyContent={"space-between"}
          >
            <Heading fontSize={"lg"}>Ordered Products</Heading>
          </Flex>
          <Box
            width={{ base: 300, md: 700, lg: "100%" }}
            display={"flex"}
            alignContent={"center"}
            m={4}
            overflowX={"auto"}
          >
            <TableContainer
              borderWidth={1}
              borderColor={"#ffd5e5"}
              rounded={"base"}
              shadow={"md"}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th borderColor={"#ffd5e5"} borderBottomWidth={1}>
                      Order No
                    </Th>
                    <Th borderColor={"#ffd5e5"} borderBottomWidth={1}>
                      Product Name
                    </Th>
                    <Th borderColor={"#ffd5e5"} borderBottomWidth={1}>
                      Category
                    </Th>
                    <Th borderColor={"#ffd5e5"} borderBottomWidth={1}>
                      Product Price
                    </Th>
                    <Th borderColor={"#ffd5e5"} borderBottomWidth={1}>
                      Quantity
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {orderedProducts?.length !== 0 &&
                    orderedProducts?.map((item: CartItemsType, key: number) => (
                      <Tr key={key}>
                        <Td borderColor={"#ffd5e5"} borderBottomWidth={1}>
                          {item.orderNumber}
                        </Td>
                        <Td borderColor={"#ffd5e5"} borderBottomWidth={1}>
                          {item.title}
                        </Td>
                        <Td borderColor={"#ffd5e5"} borderBottomWidth={1}>
                          {item.category.name}
                        </Td>
                        <Td borderColor={"#ffd5e5"} borderBottomWidth={1}>
                          ${item.price}
                        </Td>
                        <Td borderColor={"#ffd5e5"} borderBottomWidth={1}>
                          {item.quantity}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
