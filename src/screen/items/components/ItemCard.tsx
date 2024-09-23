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
import { ItemsType } from "../../../type";

function ItemCard({ items }: { items: ItemsType }) {
  return (
    <Card
      width={"100%"}
      display={"flex"}
      height={"min-content"}
      bgColor={"brand.200"}
      shadow={"lg"}
    >
      <CardBody
        m={0}
        p={0}
        display={"flex"}
        width={"100%"}
        flexDirection="column"
        alignItems={"start"}
      >
        <Box
          width={"100%"}
          height={200}
          display={"flex"}
          bgColor={"brand.300"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Image objectFit={"cover"} rounded={"md"} src={items?.image} />
        </Box>
        <Heading
          size={"md"}
          mx={6}
          mt={3}
          mb={1}
          textColor={"brand.800"}
          noOfLines={1}
        >
          {items?.title}
        </Heading>
        <Text
          textColor={"brand.800"}
          fontSize={"md"}
          alignSelf={"start"}
          opacity={0.7}
          mx={6}
          mb={1}
        >
          <b>Price: </b>$ {items?.price}
        </Text>
      </CardBody>
      <CardFooter
        display={"flex"}
        width={"100%"}
        justifyContent={"end"}
        px={6}
        pt={2}
        pb={4}
      >
        <Button
          variant={"primary"}
          size={"sm"}
          fontSize={"sm"}
          px={4}
          // onClick={() => itemAddToCart(items)}
          type="button"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;
