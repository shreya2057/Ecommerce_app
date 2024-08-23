import {
  Box,
  Card,
  CardBody,
  CloseButton,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function CartItems({
  thumbnail,
  title,
  price,
  brand,
  discount,
  quantity,
  removeItem,
}: {
  thumbnail: string;
  title: string;
  price: number;
  brand: string;
  discount: number;
  quantity: number;
  removeItem: () => void;
}) {
  return (
    <Card
      width={{ md: "500px" }}
      height={"min-content"}
      borderWidth={1}
      borderColor={"#ffd5e5"}
      bgColor={"#fff6f9"}
      shadow={"lg"}
    >
      <CardBody
        display={"flex"}
        flexDirection={"row"}
        m={0}
        p={0}
        alignContent={"center"}
        justifyContent={"space-between"}
      >
        <Flex direction={"row"}>
          <Box width={36} height={36} display={"flex"} bgColor={"#fdcee5"}>
            <Image objectFit={"fill"} src={thumbnail} />
          </Box>
          <Flex direction={"column"} alignSelf={"center"}>
            <Heading size={"sm"} mx={6} mt={3} mb={1} textColor={"#4d2f56"}>
              {title}
            </Heading>
            <Text textColor={"#b87c94"} fontSize={"sm"} mx={6} mb={1}>
              <b>Brand: </b>
              {brand}
            </Text>
            <Text textColor={"#b87c94"} fontSize={"sm"} mx={6} mb={1}>
              <b>Price: </b>${price}
            </Text>
            <Text textColor={"#b87c94"} fontSize={"sm"} mx={6} mb={1}>
              <b>Discount: </b>
              {discount}%
            </Text>
            <Text textColor={"#b87c94"} fontSize={"sm"} mx={6} mb={1}>
              <b>Quantity: </b>
              {quantity}
            </Text>
          </Flex>
        </Flex>
        <Flex m={3}>
          <CloseButton size="sm" onClick={removeItem} />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CartItems;
