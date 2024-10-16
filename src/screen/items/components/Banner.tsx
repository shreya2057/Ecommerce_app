import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiShoppingBag2Line } from "react-icons/ri";

function Banner() {
  const hideText = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      py={20}
      px={{ base: 16, sm: 28, md: 28 }}
      background={"gradientGrayLight"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
      gap={40}
    >
      <Flex
        direction={"column"}
        flex={1}
        width={"100%"}
        alignItems={{ base: "center", md: "start" }}
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
            hidden={hideText}
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
        fontSize={"100px"}
        p={8}
      >
        <RiShoppingBag2Line />
      </Box>
    </Box>
  );
}

export default Banner;
