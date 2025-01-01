import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { Password } from "../../components/form/Password";
import { ROUTES } from "../../routes/routes";
import { registerSchema } from "../../schema/registerSchema";
import { useRegisterQuery } from "../../services";
import { subDays } from "date-fns";

const initialValues = {
  full_name: "",
  email: "",
  date_of_birth: "",
  phone_number: "",
  password: "",
  confirm_password: "",
};
function Signup() {
  const { control, handleSubmit } = useForm<z.infer<typeof registerSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync: register, isLoading } = useRegisterQuery();

  const onLogin = (data: z.infer<typeof registerSchema>) => {
    register(data);
  };

  return (
    <Flex
      direction={"row"}
      minHeight={"100%"}
      width={"100%"}
      background={"gradientGray"}
      px={{ base: 5, sm: 16, md: 14, lg: 0 }}
      py={{ base: 10, md: 0 }}
    >
      <VStack
        flex={{ lg: "20%", xl: "25%" }}
        height={"100%"}
        justifyContent={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <Box
          background={"gradientGrayLight"}
          p={10}
          rounded={"full"}
          color={"gray.600"}
          fontSize={{ lg: "70px", xl: "100px" }}
        >
          <RiShoppingCartFill />
        </Box>
      </VStack>
      <VStack
        my={1}
        flex={{ base: "100%", lg: "80%", xl: "75%" }}
        gap={4}
        justifyContent={"center"}
        px={{ md: 10, lg: 24, xl: 32 }}
        rounded={"xl"}
        shadow={"lg"}
        color={"gray.600"}
        backgroundColor={{ md: "gray.40" }}
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
          <HStack
            gap={6}
            width={"100%"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl
              inputControl="input"
              name="full_name"
              control={control}
              label="Full Name"
              bg={"white"}
              shadow={"md"}
              borderWidth={0}
              placeholder="Enter your name"
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
          <HStack
            gap={6}
            width={"100%"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl
              inputControl="input"
              name="phone_number"
              control={control}
              label="Mobile number"
              bg={"white"}
              shadow={"md"}
              borderWidth={0}
              placeholder="Enter your number"
            />
            <FormControl
              inputControl="input"
              name="date_of_birth"
              control={control}
              label="Date of birth"
              bg={"white"}
              shadow={"md"}
              borderWidth={0}
              type="date"
              max={subDays(new Date(), 1).toISOString().split("T")[0]}
              placeholder="Enter your email"
            />
          </HStack>
          <HStack
            gap={6}
            width={"100%"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Password
              name="password"
              control={control}
              label="Password"
              bg={"white"}
              shadow={"md"}
              borderWidth={0}
              placeholder="Enter your password"
            />
            <Password
              name="confirm_password"
              control={control}
              label="Confirm Password"
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
          <Text
            as={Link}
            textDecoration={"underline"}
            to={ROUTES.LOGIN}
            fontSize={"sm"}
          >
            Already have an account?
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Signup;
