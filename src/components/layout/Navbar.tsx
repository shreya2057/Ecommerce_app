import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { ROUTES } from "@/routes/routes";
import { AppLogo } from "./AppLogo";
import { useGetCartCount } from "@/services";

export const NavBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
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

  const { data: cartCount } = useGetCartCount();
  console.log(cartCount);
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
        <Link to={ROUTES.LANDING}>
          <AppLogo logoSize="lg" padding={1.5} />
        </Link>
      </Flex>
      <Flex
        position={{ base: "absolute", md: "static" }}
        top={"72px"}
        zIndex={1}
        width={{ base: "100%", md: "unset" }}
        hidden={menuVisibility}
        background={{ base: "primary.800", md: "transparent" }}
        backdropBlur={"blur(10px)"}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 6 }}
        fontWeight={"bold"}
        textColor={{ base: "brand.800", md: "primary.500" }}
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
        {isLoggedIn ? (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 1, md: 6 }}
            align={{ base: "start", md: "center" }}
          >
            <Link to={ROUTES.ORDERS}>
              <Text>Orders</Text>
            </Link>
            <Link to={ROUTES.CARTS}>
              <Box display={"flex"} gap={2}>
                <Box display={"flex"} alignSelf={"center"}>
                  <HiOutlineShoppingCart />
                </Box>
                <Text>Cart</Text>
              </Box>
            </Link>
            <Profile />
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
};
