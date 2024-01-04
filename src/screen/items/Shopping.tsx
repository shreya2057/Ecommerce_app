import { 
    Box,
    Divider,
    Flex, 
    FormControl,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    useBreakpointValue
} from "@chakra-ui/react";
import { BiListUl } from "react-icons/bi";
import CategoryList from "../../components/CategoryList"
import ItemCard from "../../components/ItemCard";
import Banner from "../../components/Banner";
import { SearchIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
import { getAllProducts } from "../../services/crud";

function Shopping(){
    const hidden = useBreakpointValue({"base": true, "sm": true, "md": true, "xl": false});
    const columns = useBreakpointValue({"base":"repeat(1, 1fr)", "md": "repeat(3, 1fr)", "xl": "repeat(4, 1fr)"});
    const {data}= useQuery("products", getAllProducts);
    console.log(data)
    return(
        <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
            <Flex 
                width={"18%"}
                height={"100%"}
                bgColor={"#c691a4"}
                direction={"column"}
                hidden = {hidden}
            >   
                <Flex px={5} py={3} display={"flex"} gap={1} flexDirection={"row"} height={"min-content"}>
                    <Box alignSelf={"center"} fontSize={"xl"} textColor={"#653059"}>
                        <BiListUl/>
                    </Box>
                    <Box>
                        <Heading fontSize={"xl"} textColor={"#653059"}>Categories</Heading>
                    </Box>
                </Flex>
                <Divider borderColor={"#df9fd1"}/>
                <CategoryList category="smartphones"/>
                <CategoryList category="furniture"/>
                <CategoryList category="lighting"/>
            </Flex>
            <Flex 
                direction={"column"}
                flex={1}
                height={"100%"} 
                gap={4} 
            >
                <Banner/>   
                <Flex direction={"column"} width={"min-content"} alignSelf={"center"}>
                    <Flex direction={"row"} gap = {{"base": 6, "md":0}} align={"center"} justifyContent={"space-between"}>
                        <form>
                            <FormControl>
                                <InputGroup width={{"base":200,"md":400}}>
                                    <InputLeftElement pointerEvents='none'>
                                        <SearchIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='Search products' />
                                </InputGroup>
                            </FormControl>
                        </form>
                        <Heading fontSize={"lg"} >Categories</Heading>
                    </Flex>
                    <Flex my={4}>
                        <SimpleGrid templateColumns={columns} gap={6}>
                            <ItemCard title={"test"} price={200}/> 
                            <ItemCard title={"test"} price={200}/> 
                            <ItemCard title={"test"} price={200}/> 
                            <ItemCard title={"test"} price={200}/> 
                            <ItemCard title={"test"} price={200}/> 
                            <ItemCard title={"test"} price={200}/> 
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Shopping;