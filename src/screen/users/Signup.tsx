import { Box, Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiShoppingCartFill } from "react-icons/ri";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { Password } from "../../components/form/Password";
import { loginSchema } from "../../schema/loginSchema";
import { useLoginQuery } from "../../services/auth";

const initialValues = {
  email: "",
  password: "",
};
function Signup() {
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
    >
      <VStack
        flex={"35%"}
        height={"100%"}
        justifyContent={"center"}
        display={{ base: "none", xl: "flex" }}
      >
        <Box
          background={"gradientGrayLight"}
          p={10}
          rounded={"full"}
          color={"gray.600"}
        >
          <RiShoppingCartFill fontSize={"100px"} />
        </Box>
      </VStack>
      <VStack
        my={1}
        flex={"75%"}
        gap={4}
        justifyContent={"center"}
        px={32}
        rounded={"xl"}
        shadow={"lg"}
        color={"gray.600"}
        backgroundColor={"gray.40"}
      >
        <VStack
          width={"100%"}
          gap={6}
          justifyContent={"center"}
          as={"form"}
          p={10}
          rounded={"xl"}
          shadow={"lg"}
          background={"gradientGrayLight"}
          onSubmit={handleSubmit(onLogin)}
        >
          <Heading fontSize={"xl"}>Create an account</Heading>
          <HStack gap={6} width={"100%"}>
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
          </HStack>
          <HStack gap={6} width={"100%"}>
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
          </HStack>
          <HStack gap={6} width={"100%"}>
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
          </HStack>
          <Flex width={"100%"}>
            <Button
              variant={"primary"}
              type="submit"
              isLoading={isLoading}
              w={"100%"}
            >
              Create account
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Signup;
