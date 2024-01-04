import { 
    Box, 
    Card, 
    CardBody, 
    Flex, 
    Heading, 
    Image, 
    Text 
} from "@chakra-ui/react"

function CartItems(pt:{title:string, price: number}){
    return (
        <Card 
            width={{"md":"500px"}}
            height={"min-content"}
            borderWidth={1} 
            borderColor={"#ffd5e5"}
            bgColor={"#fff6f9"}
            shadow={"lg"}
            
           
        >
            <CardBody display={"flex"} flexDirection={"row"} m={0} p={0} alignContent={"center"}>
                <Box 
                    width={36} 
                    height={36} 
                    display={"flex"}
                    bgColor={"#fdcee5"}
                >
                    <Image 
                        objectFit={"fill"} 
                        src="https://imgs.search.brave.com/FF_Tnpj_zgXjoUPLm_qV84uQ8vZy6VM63ar5LLGZSlU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjQ2NzQ0L3Bob3Rv/L3Nwb3J0cy1zaG9l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kM0tLaW9VNlRM/T19peVVkQTBmLTFC/eEt4QkJ5Ul84dFUw/STZGcE1aelg4PQ"
                    />
                </Box>
                <Flex direction={"column"} alignSelf={"center"}>
                    <Heading 
                        size={"sm"} 
                        mx={6} 
                        mt={3}
                        mb={1}
                        textColor={"#4d2f56"}
                    >
                        {pt.title}
                    </Heading>
                    <Text 
                        textColor={"#b87c94"} 
                        fontSize={"sm"} 
                        // alignSelf={"center"}
                        mx={6} 
                        mb={1}
                    >
                        <b>Description: </b>{pt.price}
                    </Text>
                    <Text 
                        textColor={"#b87c94"} 
                        fontSize={"sm"} 
                        // alignSelf={"center"}
                        mx={6} 
                        mb={1}
                    >
                        <b>Price: </b>{pt.price}
                    </Text>
                    <Text 
                        textColor={"#b87c94"} 
                        fontSize={"sm"} 
                        // alignSelf={"center"}
                        mx={6} 
                        mb={1}
                    >
                        <b>Discount: </b>{pt.price}
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default CartItems;