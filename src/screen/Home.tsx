import { 
    Text,
    Flex 
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";

function HomeScreen(){
    return (
        <Flex direction={"column"} width={"100vw"} height={"100vh"}>
            <NavBar loggedIn={true}/>
            <Text>HomeScreen</Text>
        </Flex>
    );
}

export default HomeScreen;