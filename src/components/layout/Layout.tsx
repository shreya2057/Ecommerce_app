import { Flex } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./Navbar";
import { useIsAuthenticated } from "../../hooks";
import { ROUTES } from "@/routes/routes";
import { useLocation } from "react-router-dom";

const excludeFooter = [
  ROUTES.LOGIN,
  ROUTES.SIGNUP,
  ROUTES.VERIFICATION,
  ROUTES.EMAIL_VERIFY,
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: isauthenticated } = useIsAuthenticated();
  const pathname = useLocation().pathname;
  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
    >
      <NavBar isLoggedIn={isauthenticated ?? false} />
      <Flex flex={1} height={"100%"} pt={{ base: 16, md: 12 }}>
        {children}
      </Flex>
      {!excludeFooter.includes(pathname) && <Footer />}
    </Flex>
  );
};
