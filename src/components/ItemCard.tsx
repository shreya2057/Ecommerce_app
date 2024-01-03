import { 
    Box, 
    Button, 
    Card, 
    CardBody, 
    CardFooter, 
    Heading, 
    Image, 
    Text 
} from "@chakra-ui/react"

function ItemCard(pt:{title:string, price: number}){
    return (
        <Card 
            width={"min-content"}
            height={"min-content"}
            borderWidth={1} 
            borderColor={"#ffd5e5"}
            bgColor={"#fff6f9"}
            shadow={"lg"}
           
        >
            <CardBody m={0} p={0}>
                <Box 
                    width={200} 
                    height={200} 
                    display={"flex"}
                    bgColor={"#fdcee5"}
                >
                    <Image 
                        objectFit={"contain"} 
                        src="https://imgs.search.brave.com/FF_Tnpj_zgXjoUPLm_qV84uQ8vZy6VM63ar5LLGZSlU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjQ2NzQ0L3Bob3Rv/L3Nwb3J0cy1zaG9l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kM0tLaW9VNlRM/T19peVVkQTBmLTFC/eEt4QkJ5Ul84dFUw/STZGcE1aelg4PQ"
                    />
                </Box>
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
                    fontSize={"md"} 
                    alignSelf={"center"}
                    mx={6} 
                    mb={1}
                >
                    {pt.price}
                </Text>
            </CardBody>
            <CardFooter display={"flex"} alignContent={"center"} px={6} py={2}>
                <Button 
                    bgColor={"#f6e4ed"} 
                    px={4} 
                    _hover={{bgColor: "inherit"}}
                    textColor={"#b87c94"}
                >
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ItemCard