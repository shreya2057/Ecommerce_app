import {
    Flex,
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Th, 
    Thead,
    Tr,
    Heading,
    Box
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
import { useEffect, useState } from "react";
function Orders(){
    const [orderedProducts, setOrderedProducts] = useState<Array<string>>()
    useEffect(()=>{
        const orderData:any = localStorage.getItem("products");
        const orders:Array<string> = JSON.parse(orderData);
        setOrderedProducts(orders);
    },[]);
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
                    <Box width={{"base":300,"md":700, "lg": "100%"}} display={"flex"} alignContent={"center"} m={4} overflowX={"auto"}>
                        <TableContainer  
                            borderWidth={1} 
                            borderColor={"#ffd5e5"}
                            rounded={"base"}
                            shadow={"md"}
                        >
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Order No</Th>
                                        <Th>Product Name</Th>
                                        <Th>Category</Th>
                                        <Th>Product Price</Th>
                                        <Th>Quantity</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        orderedProducts?.length!==0
                                        &&
                                        orderedProducts?.map(
                                            (item:any, key: number)=>
                                            <Tr key={key}>
                                                <Td>{item.orderNumber}</Td>
                                                <Td>{item.title}</Td>
                                                <Td>{item.category}</Td>
                                                <Td>${item.price}</Td>
                                                <Td>{item.quantity}</Td>
                                            </Tr>
                                        )
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Orders;