import { 
    Box, 
    Flex, 
    Heading,
    Text
} from "@chakra-ui/react";
import {  RiShoppingBag2Line } from "react-icons/ri";

function Banner(){
    return(
        <Box 
            width={"100%"}
            display={"flex"}
            flexDirection={"row"}
            py={4}
            px={14}
            bgColor={"#fff6f9"}
            justifyContent={"space-between"}
            alignContent={"center"}
        >
            <Flex 
                direction={"column"}
                flex={1}
                alignSelf={"center"} 
                maxWidth={600}
                gap={1}
            >
                <Heading fontSize={"lg"} textColor={"#4d2f56"}>Ecommerce App</Heading>
                <Box>
                    <Text 
                        fontSize={"md"} 
                        textColor={"#4d2f56"}
                        textAlign={{"base": "justify", "md": "left"}}
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