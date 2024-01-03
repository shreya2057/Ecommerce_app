import { 
    Text,
    Flex, 
    Heading,
    Box,
    Stack
} from "@chakra-ui/react";

import { RiShoppingCartFill } from "react-icons/ri"
import CustomButton from "../components/CustomButton";

function HomeScreen(){
    return (
        <Flex direction={"column"} width={"100%"}>
            <Flex width={"100%"} height={"100%"} justifyContent={"center"} align={"center"}>
                <Box 
                    borderWidth={1} 
                    display={"flex"}
                    flexDirection={"column"}
                    borderColor={"#ffd5e5"}
                    rounded={"base"}
                    py={14}
                    px={14}
                    bgColor={"#fff6f9"}
                    gap={5}
                    shadow={"lg"}
                >
                    <Stack gap={3}>
                        <Heading fontSize={"2xl"} textColor={"#4d2f56"}>Ecommerce App</Heading>
                        <Heading fontSize={"lg"} textColor={"#b87c94"}>Easy online shopping</Heading>
                    </Stack>
                    <Flex 
                        direction={{"base":"column", "md": "row"}} 
                        align={"center"} 
                        gap={10} 
                        maxWidth={600}
                    >
                        <Box>
                            <Text 
                                fontSize={"md"} 
                                textColor={"#4d2f56"}
                                textAlign={{"base": "justify", "md": "left"}}
                            >   
                                Navigate the Universe of Fashion, Tech, and Lifestyle: 
                                From Trendsetting Designs to Cutting-Edge Gadgets, 
                                Ecommerce App Guides You Through a Seamless 
                                Shopping Odyssey. Discover, Click, and Redefine 
                                Your World - Because Choices Should Be Boundless, 
                                Just Like Your Dreams!
                            </Text>
                        </Box>
                        <Box 
                            rounded={"full"} 
                            bgColor={"#fbd5eb"} 
                            width={"fit-content"} 
                            textColor={"#4d2f56"} 
                            fontSize={60} 
                            p={5}
                        >
                            <RiShoppingCartFill/>
                        </Box>
                    </Flex>
                    <Box display={"flex"} justifyContent={{"base":"center", "md": "start"}}>
                        <CustomButton label={"Explore our product"}/>
                    </Box>
                </Box>                
            </Flex>
        </Flex>
    );
}

export default HomeScreen;