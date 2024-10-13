import { Flex } from "@chakra-ui/react";
import React from "react";
import { useIsAuthenticated } from "../hooks/useIsAuthencated";
import Footer from "./Footer";
import NavBar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  const { data: isauthenticated } = useIsAuthenticated();
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
      <Footer />
    </Flex>
  );
}

export default Layout;
