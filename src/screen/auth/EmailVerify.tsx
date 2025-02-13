import { VerifyIllustration } from "@/assets/images";
import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { useRequestOtp } from "../../services";
import { useUserStore } from "../../stores/userStore";

function EmailVerify() {
  const { mutateAsync: requestOtp, isLoading } = useRequestOtp();
  const { email } = useUserStore();
  const navigate = useNavigate();

  const onVerify = async () => {
    await requestOtp({ email });
    navigate(ROUTES.VERIFICATION);
  };

  return (
    <VStack
      height={"100dvh"}
      width={"100%"}
      px={{ base: 8, sm: 10, md: 20, lg: 40, xl: 60 }}
      py={10}
      justifyContent={"center"}
    >
      <VStack
        width={{ base: "100%", md: "90%" }}
        gap={6}
        justifyContent={"center"}
        py={10}
        px={20}
        rounded={"xl"}
        shadow={{ sm: "lg" }}
        color={"gray.600"}
        borderWidth={1}
        borderColor={"gray.50"}
      >
        <Image src={VerifyIllustration} w={96} />
        <Heading
          fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          letterSpacing={1}
        >
          Verify your account
        </Heading>
        <Text textAlign={"center"}>
          To verify your email, please click the button below. A verification
          code will be sent to your inbox shortly.
        </Text>
        <Button variant={"primary"} onClick={onVerify} isLoading={isLoading}>
          Verify Email address
        </Button>
      </VStack>
    </VStack>
  );
}

export default EmailVerify;
