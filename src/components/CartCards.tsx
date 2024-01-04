import { 
    Box, 
    Card, 
    CardBody, 
    Flex, 
    Heading, 
    Image, 
    Text 
} from "@chakra-ui/react"

function CartItems(pt:{thumbnail:string, title:string, price: number, brand: string, discount: number}){
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
                        src={pt.thumbnail}
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
                        mx={6} 
                        mb={1}
                    >
                        <b>Brand: </b>{pt.brand}
                    </Text>
                    <Text 
                        textColor={"#b87c94"} 
                        fontSize={"sm"} 
                        mx={6} 
                        mb={1}
                    >
                        <b>Price: </b>${pt.price}
                    </Text>
                    <Text 
                        textColor={"#b87c94"} 
                        fontSize={"sm"} 
                        mx={6} 
                        mb={1}
                    >
                        <b>Discount: </b>{pt.discount}%
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default CartItems;