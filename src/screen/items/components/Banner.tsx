import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { RiShoppingBag2Line } from "react-icons/ri";

function Banner() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      py={20}
      px={{ base: 16, md: 28 }}
      background={"gradientGrayLight"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
      gap={{ base: 10, lg: 40 }}
    >
      <Flex
        direction={"column"}
        flex={1}
        width={"100%"}
        alignItems={{ base: "center", lg: "start" }}
        alignSelf={"center"}
        gap={3}
      >
        <Heading fontSize={"4xl"} as={"i"} textColor={"gray.500"}>
          Ecommerce App
        </Heading>
        <Box>
          <Text
            fontSize={"md"}
            textColor={"gray.500"}
            opacity={0.8}
            textAlign={"left"}
          >
            Embark on a seamless shopping journey where endless selections meet
            effortless convenience. Discover everything from the latest fashion
            trends to unique artisanal finds, all just a click away. Enjoy a
            user-friendly interface, personalized recommendations, and quick,
            secure transactions. With timely delivery and dedicated support,
            every purchase enhances your lifestyle. Experience the joy of
            shopping, where inspiration and convenience come together for a
            delightful experience.
          </Text>
        </Box>
      </Flex>
      <Box
        rounded={"full"}
        bgColor={"gray.100"}
        width={"fit-content"}
        textColor={"gray.300"}
        fontSize={{ base: "160px", lg: "150px", xl: "100px" }}
        p={8}
      >
        <RiShoppingBag2Line />
      </Box>
    </Box>
  );
}

export default Banner;
