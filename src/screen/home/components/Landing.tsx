import { EcommerceIllustration } from "@/assets/images";
import { GiShop } from "react-icons/gi";

import { ROUTES } from "@/routes/routes";
import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaAnglesRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate(ROUTES.PRODUCTS);
  };
  return (
    <Flex
      bg={"gradient.purple.normal"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HStack
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        gap={20}
        width={"100%"}
        px={{ base: 10, md: 40 }}
        py={32}
      >
        <VStack alignItems={"start"} width={"100%"} gap={5} textColor={"white"}>
          <HStack
            px={6}
            py={2}
            rounded={"full"}
            gap={2}
            fontSize={"sm"}
            bg={"primary.500"}
          >
            <Text fontWeight={"900"}>Easy online shopping</Text>
            <GiShop />
          </HStack>
          <Text fontWeight={900} fontSize={{ base: "2xl", md: "4xl" }}>
            Ecommerce App
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textColor={"white"}
            textAlign={"justify"}
          >
            Navigate the Universe of Fashion, Tech, and Lifestyle: From
            Trendsetting Designs to Cutting-Edge Gadgets, Ecommerce App Guides
            You Through a Seamless Shopping Odyssey. Discover, Click, and
            Redefine Your World - Because Choices Should Be Boundless, Just Like
            Your Dreams!
          </Text>
          <Button
            variant={"secondary"}
            fontWeight={"bold"}
            onClick={goToProducts}
            w={56}
            rightIcon={
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 20 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <FaAnglesRight />
              </motion.div>
            }
          >
            Explore products
          </Button>
        </VStack>
        <Image
          src={EcommerceIllustration}
          alt="Ecommerce Illustration"
          w={{ lg: 60, xl: 96 }}
          display={{ base: "none", lg: "flex" }}
        />
      </HStack>
    </Flex>
  );
};
