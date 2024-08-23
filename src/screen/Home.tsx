import { Text, Flex, Heading, Box, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { RiShoppingCartFill } from "react-icons/ri";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <Flex direction={"column"} width={"100%"}>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        align={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          rounded={"base"}
          py={14}
          px={14}
          bgColor={"brand.100"}
          gap={5}
          shadow={"xl"}
        >
          <Stack gap={3}>
            <Heading fontSize={"2xl"} textColor={"brand.800"}>
              Ecommerce App
            </Heading>
            <Heading fontSize={"lg"} textColor={"brand.800"} opacity={0.6}>
              Easy online shopping
            </Heading>
          </Stack>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={"center"}
            gap={10}
            maxWidth={600}
          >
            <Box>
              <Text
                fontSize={"sm"}
                textColor={"brand.800"}
                textAlign={{ base: "justify", md: "left" }}
              >
                Navigate the Universe of Fashion, Tech, and Lifestyle: From
                Trendsetting Designs to Cutting-Edge Gadgets, Ecommerce App
                Guides You Through a Seamless Shopping Odyssey. Discover, Click,
                and Redefine Your World - Because Choices Should Be Boundless,
                Just Like Your Dreams!
              </Text>
            </Box>
            <Box
              rounded={"full"}
              bgColor={"brand.700"}
              width={"fit-content"}
              textColor={"brand.800"}
              fontSize={60}
              p={5}
            >
              <RiShoppingCartFill />
            </Box>
          </Flex>
          <Box
            display={"flex"}
            justifyContent={{ base: "center", md: "start" }}
          >
            <Button variant={"primary"} onClick={() => navigate("/shopping")}>
              Explore our product
            </Button>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default HomeScreen;
