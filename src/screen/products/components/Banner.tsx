import { Box, Flex, Text } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      py={10}
      px={{ base: 16, md: 28 }}
      background={"gradient.purple.lightest"}
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
        color={"primary.900"}
      >
        <Box>
          <Text fontSize={"md"} opacity={0.9} textAlign={"left"}>
            Embark on a seamless shopping journey where endless selections meet
            effortless convenience. Discover everything from the latest fashion
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
