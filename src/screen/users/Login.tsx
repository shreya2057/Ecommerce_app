import { 
    Image, 
    Input, 
    FormControl, 
    Flex, 
    Box, 
    FormErrorMessage, 
    Center, 
    FormLabel, 
    Stack,
    Heading
} from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import Signup from "../../app-images/signup.jpg"
import CustomButton from "../../components/CustomButton";
function Login(){    
    return (
        <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
            <Flex 
                width={"25%"}
                height={"100%"}
                bgColor={"#c691a4"}
                direction={"column"}
                // hidden = {hidden}
            >   
                <Image src={Signup} height={"100%"}/>
            </Flex>
            <Flex 
                direction={"column"}
                flex={1}
                height={"100%"} 
                gap={4} 
            >   
                <Flex width={"100%"} height={"100%"} justifyContent={"center"} align={"center"}>
                    <Box 
                        borderWidth={1} 
                        borderColor={"#ffd5e5"}
                        p={10} 
                        rounded={"md"} 
                        shadow={"md"} 
                        backgroundColor={"#fff6f9"}
                    >                        
                        <form 
                            // onSubmit={handleSubmit(submit_data)}
                        >
                            <Stack spacing={5}>
                                <Heading fontSize={"xl"}>Login</Heading>
                                <FormControl 
                                    // isInvalid={!!errors.name}
                                >
                                    <FormLabel htmlFor="name">Email</FormLabel>
                                    <Input 
                                        width={350}
                                        placeholder="Enter your email" 
                                        bgColor={"white"}
                                        type="text"
                                        shadow={"md"}
                                        borderColor={"#ffd5e5"}
                                        // {
                                        //     ...register(
                                        //         "name",
                                        //         {
                                        //             required: "Task name cannot be empty"
                                        //         }
                                        //     )
                                        // }
                                    />
                                    <FormErrorMessage>
                                        {/* {errors.name?.message} */}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl 
                                    // isInvalid={!!errors.start}
                                >
                                    <FormLabel htmlFor="name">Password</FormLabel>
                                    <Input 
                                        width={350}
                                        borderColor={"#ffd5e5"}
                                        placeholder="*****" 
                                        bgColor={"white"}
                                        type="password"
                                        shadow={"md"}
                                        // {
                                        //     ...register(
                                        //         "start",
                                        //         {
                                        //             required: "Start Date cannot be empty"
                                        //         }
                                        //     )
                                        // }
                                    />
                                    <FormErrorMessage>
                                        {/* {errors.start?.message} */}
                                    </FormErrorMessage>
                                </FormControl>    
                                <Center>
                                    <Box p={0} borderColor={"#653059"} borderWidth={1} rounded={"md"}>
                                        <CustomButton label="SignUp"/>
                                    </Box>
                                </Center>                 
                            </Stack>
                        </form>
                    </Box>                
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Login;