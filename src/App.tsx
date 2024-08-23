import { Flex } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
    >
      <NavBar isLoggedIn={true} />
      <Flex flex={1} height={"100%"} pt={{ base: 16, md: 12 }}>
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
