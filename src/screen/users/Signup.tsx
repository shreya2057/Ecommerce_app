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
    Heading,
    InputGroup,
    InputRightElement,
    IconButton,
    useBreakpointValue,
    Button
    // Container 
} from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import Signup from "../../app-images/signup.jpg"
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
function SignUp(){    
    const [showPassword, setshowPassword] = useState(false);
    const passwordVisibility = () => setshowPassword(!showPassword);
    const hidden = useBreakpointValue({"base": true, "sm": true, "md": true, "xl": false});


    return (
        <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
            <Flex 
                width={"25%"}
                height={"100%"}
                bgColor={"#c691a4"}
                direction={"column"}
                hidden = {hidden}
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
                                <Heading fontSize={"xl"}>Create account</Heading>
                                <FormControl 
                                    // isInvalid={!!errors.name}
                                >
                                    <FormLabel htmlFor="name">Email</FormLabel>
                                    <Input 
                                        width={{"base":220,"md":350}}
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
                                    
                                    <InputGroup size='md' backgroundColor={"white"} display={"flex"}  width={{"base":220,"md":350}}>
                                        <Input 
                                           
                                            borderColor={"#ffd5e5"}
                                            placeholder="Enter your password" 
                                            bgColor={"white"}
                    
                                            type={showPassword ? "text" : "password"}
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
                                        <InputRightElement width={{"base": "2rem", "md":'4.5rem'}} alignSelf={"center"}>
                                            <IconButton 
                                                width={{"base": "1rem", "md":'4.5rem'}}
                                                h={{"base": "0.75rem", "md":'1.75rem'}} 
                                                size='sm' 
                                                aria-label="Password"
                                                backgroundColor={"inherit"}
                                                _hover={{bgColor: "white"}}
                                                icon={showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                                onClick={passwordVisibility}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {/* {errors.start?.message} */}
                                    </FormErrorMessage>
                                </FormControl>    
                                <Center>
                                    <Box p={0} borderColor={"#653059"} borderWidth={1} rounded={"md"}>
                                        <Button>Signup</Button>
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

export default SignUp;