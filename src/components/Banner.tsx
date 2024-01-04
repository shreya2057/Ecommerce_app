import { 
    Box, 
    Flex, 
    Heading,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import {  RiShoppingBag2Line } from "react-icons/ri";

function Banner(){
    const hideText = useBreakpointValue({"base": true, "md":false}) 
    return(
        <Box 
            width={"100%"}
            maxW={{"base": 800, "md": 900, "lg": "100%"}}
            display={"flex"}
            flexDirection={{"base":"column","md": "row"}}
            py={4}
            px={14}
            bgColor={"#fff6f9"}
            justifyContent={{"base": "center","md":"space-between"}}
            alignItems={"center"}
        >
            <Flex 
                direction={"column"}
                flex={1}
                width={"100%"}
                alignItems={{"base": "center", "md": "start"}}
                alignSelf={"center"} 
                maxWidth={{"lg":600}}
                
                gap={1}
            >
                <Heading fontSize={"lg"} textColor={"#4d2f56"}>Ecommerce App</Heading>
                <Box>
                    <Text 
                        fontSize={"md"} 
                        textColor={"#4d2f56"}
                        textAlign={"left"}
                        hidden={hideText}
                    >   
                        Seamless Shopping, Boundless Selections: Dive into the Retail Odyssey.
                    </Text>
                </Box>
                
            </Flex>
            <Box 
                    rounded={"full"} 
                    bgColor={"#fbd5eb"} 
                    width={"fit-content"} 
                    textColor={"#4d2f56"} 
                    fontSize={50} 
                    p={5}
                >
                    <RiShoppingBag2Line/>
                </Box>
        </Box>        
    );
}

export default Banner;