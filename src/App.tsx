import { Flex } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <Flex direction={"column"} justifyContent={"space-between"} minHeight={"100vh"}>
      <NavBar loggedIn={true}/>
      <Flex flex={1} height={"100%"}>
        <Outlet/>
      </Flex>
      <Footer/>
    </Flex>
  );
}

export default App
