import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiShoppingBag2Line } from "react-icons/ri";

function Banner() {
  const hideText = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      py={4}
      px={14}
      bgColor={"brand.100"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
    >
      <Flex
        direction={"column"}
        flex={1}
        width={"100%"}
        alignItems={{ base: "center", md: "start" }}
        alignSelf={"center"}
        maxWidth={{ lg: 600 }}
        gap={1}
      >
        <Heading fontSize={"lg"} textColor={"brand.800"}>
          Ecommerce App
        </Heading>
        <Box>
          <Text
            fontSize={"sm"}
            textColor={"brand.800"}
            textAlign={"left"}
            hidden={hideText}
          >
            Seamless Shopping, Boundless Selections: Dive into the Retail
            Odyssey.
          </Text>
        </Box>
      </Flex>
      <Box
        rounded={"full"}
        bgColor={"brand.700"}
        width={"fit-content"}
        textColor={"brand.800"}
        fontSize={50}
        p={5}
      >
        <RiShoppingBag2Line />
      </Box>
    </Box>
  );
}

export default Banner;
