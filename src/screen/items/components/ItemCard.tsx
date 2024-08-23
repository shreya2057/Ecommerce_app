import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ItemsType } from "../../../type";
import { useAddToCart } from "../../../hooks/useAddToCart";

function ItemCard({ items }: { items: ItemsType }) {
  const [disabled, setDisable] = useState(false);
  const { itemAddToCart } = useAddToCart({ setDisable });
  const regex = /^https:\/\/i\.imgur\.com\/[A-Za-z0-9]{7}\.(jpeg|jpg|png|gif)$/;
  return (
    <Card
      width={{ base: "100%", md: "min-content" }}
      display={"flex"}
      height={"min-content"}
      borderWidth={1}
      borderColor={"#ffd5e5"}
      bgColor={"#fff6f9"}
      shadow={"lg"}
    >
      <CardBody
        m={0}
        p={0}
        display={"flex"}
        width={"100%"}
        flexDirection="column"
        alignItems={"center"}
      >
        <Box
          width={{ base: "100%", md: 200 }}
          height={200}
          display={"flex"}
          bgColor={"#f8efe7"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          {regex.test(items?.images[0]) && (
            <Image
              objectFit={"contain"}
              rounded={"md"}
              src={items?.images[0]}
            />
          )}
        </Box>
        <Heading size={"sm"} mx={6} mt={3} mb={1} textColor={"#4d2f56"}>
          {items?.title?.substring(0, 15) + "..."}
        </Heading>
        <Text
          textColor={"#b87c94"}
          fontSize={"md"}
          alignSelf={"center"}
          mx={6}
          mb={1}
        >
          ${items?.price}
        </Text>
      </CardBody>
      <CardFooter
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        px={6}
        pt={2}
        pb={4}
      >
        <Button
          variant={"primary"}
          px={4}
          isDisabled={disabled}
          onClick={() => itemAddToCart(items)}
          type="button"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;
