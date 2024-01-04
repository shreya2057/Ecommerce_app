import {
    Flex,
    Heading,
    Box,
    Text
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
import CartItems from "../../components/CartCards";
import CustomButton from "../../components/CustomButton";
function Carts(){
    return(
        <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
            <Flex 
                direction={"column"}
                flex={1}
                height={"100%"} 
                gap={4} 
                width={"100%"}
                align={"center"}
            >
                <Banner/>   
                <Flex direction={"column"} my={4}>
                    <Flex direction={"row"} align={"center"} justifyContent={"space-between"}>
                        <Heading fontSize={"lg"} >Ordered Products</Heading>
                    </Flex>
                    <Flex width={"100%"} direction={"column"} gap={5} m={4}>
                        <Box 
                            // borderWidth={1} 
                            display={"flex"}
                            flexDirection={"column"}
                            borderColor={"#ffd5e5"}
                            rounded={"base"}
                            py={7}
                            px={20}
                            // bgColor={"#fff6f9"}
                            gap={5}
                            shadow={"lg"}
                        >
                            <Flex 
                                direction={"column"} 
                                align={"center"} 
                                gap={5} 
                                maxWidth={600}
                            >
                                <CartItems title="testshbjdsb" price={49387}/>
                                <CartItems title="testshbjdsb" price={49387}/>
                                <CartItems title="testshbjdsb" price={49387}/>
                            </Flex>
                        </Box>
                        <Box width={"100%"} display={"flex"} justifyContent={"end"}>
                            <CustomButton label="Buy Items"/>  
                        </Box>              
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Carts;