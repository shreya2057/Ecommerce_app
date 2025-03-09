import { LoginIllustration } from "@/assets/images";
import { AppLogo } from "@/components/layout/AppLogo";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { Password } from "../../components/form/Password";
import { ROUTES } from "../../routes/routes";
import { loginSchema } from "../../schema/loginSchema";
import { useLoginQuery } from "../../services";

const initialValues = {
  email: "",
  password: "",
};
export const Login = () => {
  const { control, handleSubmit } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync: login, isLoading } = useLoginQuery();

  const onLogin = (data: z.infer<typeof loginSchema>) => {
    login(data);
  };

  return (
    <VStack
      height={"100dvh"}
      justifyContent={"center"}
      flex={1}
      width={"100%"}
      p={{ base: 8, sm: 10, md: 0 }}
    >
      <HStack
        rounded={"xl"}
        shadow={{ sm: "lg" }}
        borderWidth={1}
        borderColor={"gray.50"}
        p={10}
        gap={4}
        width={{ md: "60%" }}
      >
        <VStack
          gap={4}
          flex={1}
          alignItems={"start"}
          justifyContent={"center"}
          color={"primary.500"}
        >
          <AppLogo logoSize="md" />
          <Heading fontSize={{ base: "lg", sm: "xl" }} fontWeight={800}>
            Welcome Back
          </Heading>
          <Text color={"primary.300"}>
            Please login using email and password
          </Text>
          <VStack
            width={"100%"}
            gap={6}
            justifyContent={"center"}
            as={"form"}
            onSubmit={handleSubmit(onLogin)}
          >
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
        <Image
          src={LoginIllustration}
          w={96}
          h={96}
          display={{ base: "none", xl: "block" }}
        />
      </HStack>
    </VStack>
  );
};
