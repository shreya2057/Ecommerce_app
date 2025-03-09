import { OTPIllustration } from "@/assets/images";
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
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { useTimer } from "../../hooks/useTimer";
import { ROUTES } from "../../routes/routes";
import { otpSchema } from "../../schema/verificationSchema";
import { useRequestOtp, useVerifyOtp } from "../../services";
import { useUserStore } from "../../stores/userStore";

const initialValues = {
  otp: "",
};
export const Verification = () => {
  const { control, handleSubmit } = useForm<z.infer<typeof otpSchema>>({
    defaultValues: initialValues,
    resolver: zodResolver(otpSchema),
  });

  const { mutateAsync: verifyOtp, isLoading: verifyLoading } = useVerifyOtp();
  const { mutateAsync: requestOtp, isLoading: resendLoading } = useRequestOtp();

  const { minutes, seconds, time, restartTime } = useTimer(3);

  const navigate = useNavigate();

  const onResend = async () => {
    await requestOtp({ email });
    restartTime();
    navigate(ROUTES.VERIFICATION);
  };
  const { email } = useUserStore();

  const onVerify = (data: z.infer<typeof otpSchema>) => {
    verifyOtp({ otp: data?.otp, email });
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
        color={"primary.500"}
      >
        <VStack
          width={"100%"}
          gap={6}
          justifyContent={"center"}
          as={"form"}
          onSubmit={handleSubmit(onVerify)}
        >
          <VStack>
            <Heading fontSize={{ base: "lg", sm: "xl" }}>
              Verify account
            </Heading>
            <Text>Enter the OTP code sent to your email</Text>
          </VStack>
          <FormControl
            inputControl="otp"
            name="otp"
            control={control}
            bg={"white"}
            length={6}
            shadow={"md"}
          />
          {time > 0 ? (
            <HStack gap={2} alignItems={"center"}>
              <Text color={"primary.400"}>Resend OTP in</Text>
              <Text color={"error.600"} fontWeight={"bold"}>
                {minutes >= 10 ? minutes : "0" + minutes}:
                {seconds >= 10 ? seconds : "0" + seconds}
              </Text>
            </HStack>
          ) : (
            <Button
              onClick={onResend}
              isLoading={resendLoading}
              variant={"ghost"}
            >
              Resend OTP
            </Button>
          )}
          <Flex width={"100%"}>
            <Button
              variant={"primary"}
              type="submit"
              isLoading={verifyLoading}
              w={"100%"}
            >
              Verify
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
        <Image
          src={OTPIllustration}
          w={96}
          h={80}
          display={{ base: "none", xl: "block" }}
        />
      </HStack>
    </VStack>
  );
};

export default Verification;
