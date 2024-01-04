import {
    Flex,
    Heading,
    Box
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
import CartItems from "../../components/CartCards";
import CustomButton from "../../components/CustomButton";
import useCartStore from "../../stores/cartStore";
function Carts(){
    const items = useCartStore((state:any)=>state.items);
    const removeItemFromCart = useCartStore((state:any)=>state.removeItemFromCart);
    console.log(items);
    const buyItems = ()=>{

    }

    const removeItems = (item:any)=>{
        console.log(item.id);
        removeItemFromCart(item.id);
    }
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
                    <Flex width={"100%"} direction={"column"} gap={5} m={4}>
                        <Box 
                            display={"flex"}
                            flexDirection={"column"}
                            borderColor={"#ffd5e5"}
                            rounded={"base"}
                            py={7}
                            px={{"md":20}}
                            gap={5}
                            shadow={"lg"}
                        >
                            <Heading fontSize={"lg"} >Ordered Products</Heading>
                            <Flex 
                                direction={"column"} 
                                align={"center"} 
                                gap={5} 
                                maxWidth={{"md":600}}
                            >
                                {
                                    items
                                    &&
                                    items.map((item:any,key:number)=>
                                        <CartItems 
                                        thumbnail={item.thumbnail}
                                            title={item.title} 
                                            price={item.price} 
                                            brand={item.brand}
                                            discount={item.discountPercentage}
                                            quantity={item.quantity}
                                            removeItem={()=>removeItems(item)}
                                            key={key}
                                        />)
                                }
                            </Flex>
                        </Box>
                        <Box width={"100%"} display={"flex"} justifyContent={"end"}>
                            <CustomButton 
                                label="Buy Items" 
                                // onClickFunction={()=>console.log("test")}
                            />  
                        </Box>              
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Carts;