import {
    Flex,
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Th, 
    Thead,
    Tr,
    Heading
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
function Orders(){
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
                    <Flex width={"100%"} align={"center"} m={4}>
                        <TableContainer  
                            width={"min-content"}  
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
                                    <Th>Delivery status</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>457856985</Td>
                                        <Td>Samsung</Td>
                                        <Td>Smartphones</Td>
                                        <Td>254</Td>
                                        <Td>Shipped</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>487548569</Td>
                                        <Td>Moterbike</Td>
                                        <Td>Vehicles</Td>
                                        <Td>254</Td>
                                        <Td>Shipped</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>487548569</Td>
                                        <Td>Moterbike</Td>
                                        <Td>Smartphones</Td>
                                        <Td>254</Td>
                                        <Td>Shipped</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Orders;