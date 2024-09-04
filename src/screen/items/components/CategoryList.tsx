import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

function CategoryList({
  category,
  onClickFunction,
  selected,
  categoryName,
}: {
  category: string;
  onClickFunction: () => void;
  selected: string;
  categoryName: string;
}) {
  const activeStatus = category === selected;
  return (
    <Flex direction={"column"}>
      <Button
        justifyContent={"start"}
        rounded={"none"}
        backgroundColor={"inherit"}
        color={"brand.800"}
        onClick={() => onClickFunction()}
        id={`${category}`}
        _active={{
          backgroundColor: "brand.700",
          textColor: "white",
        }}
        _hover={{
          backgroundColor: "brand.200",
          textColor: "brand.800",
        }}
        isActive={activeStatus ? true : false}
      >
        <Box
          display={"flex"}
          gap={1}
          flexDirection={"row"}
          my={2}
          mx={6}
          fontWeight={"semibold"}
          fontSize={"xs"}
        >
          <Box display={"flex"} alignSelf={"center"}>
            <BiRightArrow fontSize={"sm"} />
          </Box>
          <Text fontSize={"md"}>{categoryName}</Text>
        </Box>
      </Button>
    </Flex>
  );
}

export default CategoryList;
