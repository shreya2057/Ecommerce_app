import { Box, Flex, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Flex
      direction={"row"}
      width={"100%"}
      bgColor={"brand.800"}
      py={3}
      justifyContent={"end"}
      alignContent={"center"}
      fontSize={"md"}
      fontWeight={"bold"}
      textColor={"#fffdf0"}
      gap={6}
      px={10}
      zIndex={1}
    >
      <Link to={"/"}>
        <Box display={"flex"} height={"100%"} alignContent={"center"}>
          <Text alignSelf={"center"}>
            <FaFacebook />
          </Text>
        </Box>
      </Link>
      <Link to={"/"}>
        <Box display={"flex"} height={"100%"} alignContent={"center"}>
          <Text alignSelf={"center"}>
            <FaInstagram />
          </Text>
        </Box>
      </Link>
      <Link to={"/"}>
        <Box display={"flex"} height={"100%"} alignContent={"center"}>
          <Text alignSelf={"center"}>
            <FaTwitterSquare />
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}

export default Footer;
