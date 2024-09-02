import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { ItemsType } from "../../../type";
import { ProductImage } from "./ProductImage";

function ItemCard({ items }: { items: ItemsType }) {
  const [disabled, setDisable] = useState(false);
  const { itemAddToCart } = useAddToCart({ setDisable });

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
          {<ProductImage image={items?.images[0]} />}
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
