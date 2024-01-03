import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

function CategoryList(pt:{category:string}){
    return (
        <Flex direction={"column"}>
        <Button 
            justifyContent={"start"} 
            rounded={"none"} 
            backgroundColor={"inherit"}
        >
            <Box display={"flex"} gap={1} flexDirection={"row"} my={2} mx={10} fontWeight={"bold"} textColor={"#653059"}>
                <Box display={"flex"} alignSelf={"center"}>
                    <BiRightArrow/>
                </Box>
                <Text>{pt.category}</Text>
            </Box>
        </Button>
        <Divider borderColor={"#df9fd1"}/>
        </Flex>
    );
}

export default CategoryList;