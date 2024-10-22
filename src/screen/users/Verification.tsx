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
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { FormControl } from "../../components/form/FormControl";
import { useTimer } from "../../hooks/useTimer";
import { ROUTES } from "../../routes/routes";
import { otpSchema } from "../../schema/verificationSchema";
import { useRequestOtp, useVerifyOtp } from "../../services/verification";
import { useUserStore } from "../../stores/userStore";

const initialValues = {
  otp: "",
};
function Verification() {
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
              <Text>Resend OTP in</Text>
              <Text color={"red.800"} fontWeight={"bold"}>
                {minutes >= 10 ? minutes : "0" + minutes}:
                {seconds >= 10 ? seconds : "0" + seconds}
              </Text>
            </HStack>
          ) : (
            <Button onClick={onResend} isLoading={resendLoading}>
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
      </VStack>
    </Flex>
  );
}

export default Verification;
