import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiShoppingCartFill } from "react-icons/ri";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { Password } from "../../components/form/Password";
import { loginSchema } from "../../schema/loginSchema";
import { useLoginQuery } from "../../services/auth";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const { control, handleSubmit } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync: login, isLoading } = useLoginQuery();

  const onLogin = (data: z.infer<typeof loginSchema>) => {
    login(data);
  };

  return (
    <Flex
      direction={"row"}
      minHeight={"100%"}
      width={"100%"}
      background={"gradientGray"}
      p={{ base: 8, sm: 10, md: 0 }}
    >
      <VStack
        flex={{ md: "35%", lg: "45%" }}
        height={"100%"}
        justifyContent={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <Box
          background={"gradientGrayLight"}
          p={10}
          rounded={"full"}
          color={"gray.600"}
          fontSize={{ md: "80px", lg: "100px", xl: "160px" }}
        >
          <RiShoppingCartFill />
        </Box>
      </VStack>
      <VStack
        my={1}
        flex={{ base: "100%", md: "75%", lg: "65%" }}
        gap={4}
        justifyContent={"center"}
        px={{ sm: 8, md: 20, lg: 32, xl: 48 }}
        rounded={"xl"}
        shadow={{ sm: "lg" }}
        color={"gray.600"}
        backgroundColor={{ sm: "gray.40" }}
      >
        <VStack
          width={"100%"}
          gap={6}
          justifyContent={"center"}
          as={"form"}
          p={{ base: 8, sm: 10 }}
          rounded={"xl"}
          shadow={"lg"}
          background={"gradientGrayLight"}
          onSubmit={handleSubmit(onLogin)}
        >
          <Heading fontSize={{ base: "lg", sm: "xl" }}>
            Welcome to Ecommerce app
          </Heading>
          <FormControl
            inputControl="input"
            name="email"
            control={control}
            label="Email"
            bg={"white"}
            shadow={"md"}
            borderWidth={0}
            placeholder="Enter your email"
          />
          <Password
            name="password"
            control={control}
            label="Password"
            bg={"white"}
            shadow={"md"}
            borderWidth={0}
            placeholder="Enter password"
          />
          <Flex width={"100%"}>
            <Button
              variant={"primary"}
              type="submit"
              isLoading={isLoading}
              w={"100%"}
            >
              Login
            </Button>
          </Flex>
          <Text
            as={Link}
            textDecoration={"underline"}
            to={ROUTES.SIGNUP}
            fontSize={"sm"}
          >
            Don't have an account?
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Login;
