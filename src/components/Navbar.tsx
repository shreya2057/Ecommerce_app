import {
  Box,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiOutlineUserCircle, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function NavBar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const username = "harry potter";
  const [showNavMenu, setShowNavMenu] = useState(false);
  const menuVisibility = useBreakpointValue({ base: !showNavMenu, md: false });
  const buttonVisibility = useBreakpointValue({ base: false, md: true });
  const toggleMenu = () => {
    if (showNavMenu) {
      setShowNavMenu(false);
    } else {
      setShowNavMenu(true);
    }
  };
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      width={"100%"}
      bgColor={"brand.800"}
      py={{ md: 3 }}
      justifyContent={"space-between"}
      align={{ base: "start", md: "center" }}
      position={"relative"}
    >
      <Flex gap={4} px={10} py={{ base: 4, md: 0 }} alignItems={"center"}>
        <IconButton
          borderWidth={1.5}
          hidden={buttonVisibility}
          variant={"iconButton"}
          aria-label="Toggle Navigation"
          icon={<HamburgerIcon />}
          onClick={toggleMenu}
        />
        <Link to={"/"}>
          <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            textColor={"brand.200"}
            whiteSpace={"nowrap"}
          >
            Ecommerce App
          </Text>
        </Link>
      </Flex>
      <Flex
        position={{ base: "absolute", md: "static" }}
        top={"72px"}
        zIndex={1}
        width={{ base: "100%", md: "unset" }}
        hidden={menuVisibility}
        background={{ base: "brand.400", md: "transparent" }}
        backdropBlur={"blur(10px)"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 6 }}
        fontWeight={"bold"}
        textColor={{ base: "brand.800", md: "brand.200" }}
        px={{ base: 10, md: 10 }}
        py={{ base: 3, md: 0 }}
        align={{ base: "start", md: "center" }}
      >
        <Link to={"/shopping"}>
          <Text>Shopping</Text>
        </Link>
        <Link to={"/orders"}>
          <Text>Orders</Text>
        </Link>
        {isLoggedIn ? (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 1, md: 6 }}
            align={{ base: "start", md: "center" }}
          >
            <Link to={"/cart"}>
              <Box display={"flex"} gap={2}>
                <Box display={"flex"} alignSelf={"center"}>
                  <HiOutlineShoppingCart />
                </Box>
                <Text>Cart</Text>
              </Box>
            </Link>
            <Link to={"/"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                width={130}
                gap={1.5}
                bgColor={{ md: "brand.800" }}
                py={{ md: 1 }}
                px={{ md: 2 }}
                rounded={{ md: "base" }}
                shadow={{ md: "md" }}
                fontSize={{ base: "lg", md: "sm" }}
              >
                <Box display={"flex"} alignSelf={"center"}>
                  <HiOutlineUserCircle />
                </Box>
                <Text fontSize={"base"}>{username}</Text>
              </Box>
            </Link>
          </Flex>
        ) : (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 6 }}
            align={{ base: "start", md: "center" }}
          >
            <Link to={"/"}>
              <Text>Login</Text>
            </Link>
            <Link to={"/signup"}>
              <Text>Signup</Text>
            </Link>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default NavBar;
