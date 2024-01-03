import {
    Box,
    Flex,
    Stack,
    Text
} from "@chakra-ui/react";
import { HiOutlineUserCircle, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

function NavBar(pt: {loggedIn: Boolean}){
    const username = "harry potter";
    return(
        <Flex direction={"row"} width={"100%"} bgColor={"#653059"} px={10} py={2} justifyContent={"space-between"} align={"center"}>
            <Link to={"/"}>
                <Text 
                    fontSize={"2xl"} 
                    fontWeight={"bold"} 
                    textColor={"#fffdf0"}
                >
                    Ecommerce App
                </Text>
            </Link>
            <Flex gap={6} height={"100%"} fontSize={"xl"} fontWeight={"bold"} textColor={"#fffdf0"} align={"center"}>
                <Link to={"/"}>
                    <Text>
                        Shopping
                    </Text>
                </Link>
                <Link to={"/"}>
                    <Text>
                        Stores
                    </Text>
                </Link>
                {
                    !pt.loggedIn
                    &&
                    <Stack direction={"row"} gap={6}>
                        <Link to={"/"}>
                            <Text>
                                Login
                            </Text>
                        </Link>
                        <Link to={"/"}>
                            <Text>
                                Signup
                            </Text>
                        </Link>
                    </Stack>
                }
                {
                    pt.loggedIn
                    &&
                    <Flex direction={"row"} gap={6} align={"center"}>
                        <Link to={"/"}>
                            <Box display={"flex"} gap={2}>
                                <Box display={"flex"} alignSelf={"center"}>
                                    <HiOutlineShoppingCart/>
                                </Box>
                                <Text>Cart</Text>  
                            </Box>
                        </Link>
                        <Link to={"/"}>
                            <Box display={"flex"} mt={0} gap={1.5} borderWidth={0} bgColor={"#b87c94"} py={1} px={2} rounded={"sm"} shadow={"md"}>
                                <Box display={"flex"} alignSelf={"center"}>
                                    <HiOutlineUserCircle/>
                                </Box>
                                <Text fontSize={"sm"}>{username}</Text>  
                            </Box>
                        </Link>
                    </Flex>
                }
            </Flex>
        </Flex>
    );
}

export default NavBar;