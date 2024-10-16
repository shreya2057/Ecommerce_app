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
import { ROUTES } from "../routes/routes";

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
      bgColor={"white"}
      py={{ md: 3 }}
      justifyContent={"space-between"}
      align={{ base: "start", md: "center" }}
      position={"fixed"}
      zIndex={1}
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
            textColor={"gray.600"}
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
        textColor={{ base: "brand.800", md: "gray.600" }}
        px={{ base: 10, md: 10 }}
        py={{ base: 3, md: 0 }}
        align={{ base: "start", md: "center" }}
      >
        <Link to={ROUTES.LANDING}>
          <Text>Home</Text>
        </Link>
        <Link to={ROUTES.PRODUCTS}>
          <Text>Products</Text>
        </Link>
        <Link to={ROUTES.ORDERS}>
          <Text>Orders</Text>
        </Link>
        {isLoggedIn ? (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 1, md: 6 }}
            align={{ base: "start", md: "center" }}
          >
            <Link to={ROUTES.CARTS}>
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
                justifyContent={{ md: "center" }}
                alignContent={"center"}
                gap={1.5}
                bgColor={{ md: "gray.100" }}
                py={{ base: 0, md: 1 }}
                px={{ base: 0, md: 6 }}
                rounded={{ md: "base" }}
                shadow={{ md: "md" }}
                fontSize={{ base: "md", md: "sm" }}
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
            <Link to={ROUTES.LOGIN}>
              <Text>Login</Text>
            </Link>
            <Link to={ROUTES.SIGNUP}>
              <Text>Signup</Text>
            </Link>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default NavBar;
