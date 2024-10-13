import { Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Signup from "../../app-images/signup.jpg";
import { FormControl } from "../../components/form/FormControl";
import { Password } from "../../components/form/Password";
import { loginSchema } from "../../schema/loginSchema";
import { useLoginQuery } from "../../services/auth";

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
    <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
      <Flex
        width={"25%"}
        height={"100%"}
        bgColor={"#c691a4"}
        direction={"column"}
        display={{ base: "none", xl: "flex" }}
      >
        <Image src={Signup} height={"100%"} />
      </Flex>
      <VStack
        direction={"column"}
        flex={1}
        height={"100%"}
        gap={4}
        justifyContent={"center"}
        color={"brand.800"}
      >
        <VStack
          as={"form"}
          borderWidth={1}
          borderColor={"brand.300"}
          p={10}
          w={"420px"}
          rounded={"md"}
          shadow={"md"}
          backgroundColor={"brand.200"}
          gap={5}
          onSubmit={handleSubmit(onLogin)}
        >
          <Heading fontSize={"xl"}>Create account</Heading>
          <FormControl
            inputControl="input"
            name="email"
            control={control}
            label="Email"
            bg={"white"}
            shadow={"md"}
            placeholder="Enter your email"
          />
          <Password
            name="password"
            control={control}
            label="Password"
            bg={"white"}
            shadow={"md"}
            placeholder="Enter password"
          />

          <Button variant={"primary"} type="submit" isLoading={isLoading}>
            Login
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Login;
