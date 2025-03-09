import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const socialMedia = [
  {
    path: "/",
    icon: <FaFacebook />,
    key: "facebook",
  },
  {
    path: "/",
    icon: <FaInstagram />,
    key: "instagram",
  },
  {
    path: "/",
    icon: <FaTwitterSquare />,
    key: "twitter",
  },
  {
    path: "/",
    icon: <FaYoutubeSquare />,
    key: "youtube",
  },
];

const quickLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/",
    text: "Products",
  },
  {
    path: "/",
    text: "About us",
  },
  {
    path: "/",
    text: "Contact us",
  },
];

export const Footer = () => {
  return (
    <VStack width={"100%"} gap={0}>
      <VStack
        width={"100%"}
        bgColor={"primary.700"}
        py={6}
        color={"gray.100"}
        px={10}
        justifyContent={"center"}
        gap={4}
      >
        <HStack gap={6} color={"primary.600"}>
          {socialMedia?.map(({ icon, key, path }) => (
            <Link to={path} key={key}>
              <Box
                display={"flex"}
                height={"100%"}
                alignContent={"center"}
                rounded={"full"}
                p={2}
                bg={"gray.100"}
              >
                <Text alignSelf={"center"}>{icon}</Text>
              </Box>
            </Link>
          ))}
        </HStack>
        <HStack gap={6}>
          {quickLinks?.map(({ text, path }) => (
            <Link to={path} key={text}>
              {text}
            </Link>
          ))}
        </HStack>
      </VStack>
      <HStack
        width={"100%"}
        bg={"primary.900"}
        color={"gray.100"}
        justifyContent={"center"}
        py={4}
        fontSize={"sm"}
      >
        <Text>Copyright Ecommerce App. All rights reserved.</Text>
      </HStack>
    </VStack>
  );
};
