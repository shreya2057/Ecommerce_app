import { 
    useToast,
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
import { getCategorywiseProduct, productCategory } from "../../services/crud";
import { useEffect, useState } from "react";
import useCartStore from "../../stores/cartStore";

function Shopping(){
    const hidden = useBreakpointValue({"base": true, "sm": true, "md": true, "xl": false});
    const columns = useBreakpointValue({"base":"repeat(1, 1fr)", "md": "repeat(3, 1fr)", "xl": "repeat(4, 1fr)"});
    const [products, setProducts] = useState<Array<any>>();
    const [categories, setCategories] = useState<Array<string>>();
    const [selectedCategory, setCategory] = useState<string>("smartphones");

    const addItemToCart = useCartStore((state:any)=>state.addItemToCart);
    const updateCartQuantity = useCartStore((state:any)=>state.updateCartQuantity);
    const items = useCartStore((state:any)=>state.items);
    const orderNumber = useCartStore((state:any)=>state.orderNumber);
    const generateOrderNumber = useCartStore((state:any)=>state.generateOrderNumber);

    const toast = useToast();

    const itemAddToCart = (item:any)=>{
       
        const itemExits = (items.find((product:any)=>product.id===item.id))
        if(itemExits){
           const newQuantity = itemExits.quantity + 1;
           console.log(itemExits);
            updateCartQuantity(itemExits.id, newQuantity, orderNumber);
        }else{
            if(orderNumber===0){
                const randomNumber = Math.floor(Math.random()*(400000000-100000000+1))+100000000;
                generateOrderNumber(randomNumber);
                const itemToBeAdded = {...item, quantity: 1, orderNumber: randomNumber }
                addItemToCart(itemToBeAdded);
            }else{
                const itemToBeAdded = {...item, quantity: 1, orderNumber: orderNumber }
                addItemToCart(itemToBeAdded);
            }
        }
        toast({
            title: `${item.title} added to cart.`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }
    
    const selectCategory = (category: string)=>{
        setCategory(()=> category);
    }

    const productQuery = useQuery(
        "products", 
        () => getCategorywiseProduct(selectedCategory),
        {
            onSuccess: (responseData)=>{
                if(responseData.status===200 && typeof(responseData.message)==="object"){
                    setProducts(responseData.message.products);
                }
            }
        }
    );

    const categoryQuery= useQuery(
        "categories", 
        productCategory,
        {
            onSuccess: (responseData)=>{
                if(responseData.status===200 && typeof(responseData.message)==="object"){
                    setCategories(responseData.message);
                }
            }
            
        }
    );

    useEffect(()=>{
        productQuery.refetch();
    },[selectedCategory])
    
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
                {
                    (categoryQuery.data?.status===200)
                    &&
                    categories?.map((items:any, index: number)=>
                        <CategoryList 
                            category={items} 
                            onClickFunction={()=>selectCategory(items)}
                            selected={selectedCategory}
                            key={index}
                        />
                    )
                }
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
                        {
                            (productQuery.data?.status===200)
                            &&
                            products?.map((items:any, index: number)=>
                                <ItemCard 
                                    title={items.title} 
                                    price={items.price}
                                    thumbnail={items.thumbnail} 
                                    addToCart={()=>itemAddToCart(items)}
                                    key= {index}
                                />
                            )
                        }
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Shopping;