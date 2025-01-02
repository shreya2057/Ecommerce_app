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
import { generatePath, useNavigate } from "react-router-dom";

export const ItemCard = ({ items }: { items: ItemsType }) => {
  const navigate = useNavigate();
  return (
    <Card
      width={"100%"}
      display={"flex"}
      height={"min-content"}
      shadow={"lg"}
      rounded={"md"}
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
          alignContent={"center"}
          justifyContent={"center"}
          roundedTop={"md"}
        >
          <Image objectFit={"contain"} rounded={"md"} src={items?.image} />
        </Box>
        <Heading
          size={"md"}
          mx={6}
          mt={3}
          mb={1}
          textColor={"gray.800"}
          noOfLines={1}
        >
          {items?.title}
        </Heading>
        <Text
          textColor={"gray.700"}
          fontSize={"sm"}
          alignSelf={"start"}
          opacity={0.7}
          mx={6}
          mb={1}
        >
          <b>Price: </b>Rs. {items?.price}
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
          variant={"light"}
          size={"sm"}
          fontSize={"sm"}
          px={4}
          onClick={() =>
            navigate(generatePath("/product-detail/:id", { id: items?._id }))
          }
          type="button"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
