import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { IoMailUnread } from "react-icons/io5";
import { useRequestOtp } from "../../services/verification";
import { useUserStore } from "../../stores/userStore";
import { ROUTES } from "../../routes/routes";
import { useNavigate } from "react-router-dom";

function EmailVerify() {
  const { mutateAsync: requestOtp, isLoading } = useRequestOtp();
  const { email } = useUserStore();
  const navigate = useNavigate();

  const onVerify = async () => {
    await requestOtp({ email });
    navigate(ROUTES.VERIFICATION);
  };

  return (
    <Flex
      direction={"row"}
      minHeight={"100%"}
      width={"100%"}
      background={"gradientGray"}
      px={{ base: 8, sm: 10, md: 20, lg: 40, xl: 60 }}
      py={10}
    >
      <VStack
        my={1}
        flex={{ base: "100%", md: "75%", lg: "65%" }}
        gap={6}
        justifyContent={"center"}
        px={{ sm: 8, md: 20, lg: 32, xl: 48 }}
        rounded={"xl"}
        shadow={{ sm: "lg" }}
        color={"gray.600"}
        backgroundColor={{ sm: "gray.40" }}
      >
        <Box
          background={"gradientGrayLight"}
          p={6}
          rounded={"full"}
          color={"gray.500"}
          fontSize={{ md: "80px", lg: "100px", xl: "100px" }}
        >
          <IoMailUnread />
        </Box>
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
    </Flex>
  );
}

export default EmailVerify;
