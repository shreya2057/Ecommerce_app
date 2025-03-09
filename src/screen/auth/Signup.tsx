import { AppLogo } from "@/components/layout/AppLogo";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { subDays } from "date-fns";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { Password } from "../../components/form/Password";
import { ROUTES } from "../../routes/routes";
import { registerSchema } from "../../schema/registerSchema";
import { useRegisterQuery } from "../../services";

const initialValues = {
  full_name: "",
  email: "",
  date_of_birth: "",
  phone_number: "",
  password: "",
  confirm_password: "",
};
export const Signup = () => {
  const { control, handleSubmit } = useForm<z.infer<typeof registerSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync: register, isLoading } = useRegisterQuery();

  const onRegister = (data: z.infer<typeof registerSchema>) => {
    console.log(data);
    register(data);
  };

  return (
    <VStack
      height={"100dvh"}
      justifyContent={"center"}
      flex={1}
      width={"100%"}
      p={{ base: 8, sm: 10, md: 0 }}
    >
      <VStack
        as={"form"}
        gap={6}
        alignItems={"start"}
        justifyContent={"center"}
        color={"primary.500"}
        rounded={"xl"}
        shadow={{ sm: "lg" }}
        borderWidth={1}
        borderColor={"gray.50"}
        p={10}
        width={{ base: "100%", md: "60%" }}
        onSubmit={handleSubmit(onRegister)}
      >
        <AppLogo logoSize="md" />

        <Heading fontSize={"xl"}>Create an account</Heading>
        <HStack
          gap={6}
          width={"100%"}
          flexDirection={{ base: "column", lg: "row" }}
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
          flexDirection={{ base: "column", lg: "row" }}
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
          flexDirection={{ base: "column", lg: "row" }}
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
        <Button
          variant={"primary"}
          type="submit"
          isLoading={isLoading}
          w={"100%"}
          display={"flex"}
        >
          Create account
        </Button>
        <Text
          alignSelf={"center"}
          as={Link}
          textDecoration={"underline"}
          to={ROUTES.LOGIN}
          fontSize={"sm"}
        >
          Already have an account?
        </Text>
      </VStack>
    </VStack>
  );
};
