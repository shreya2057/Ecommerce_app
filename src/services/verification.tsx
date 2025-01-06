import { useMutation } from "react-query";
import { httpClient } from "../axios";
import { API_ENDPOINTS } from "../api";
import { AxiosError } from "axios";
import { ErrorType } from "../type";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const requestOtp = (data: { email: string }) => {
  return httpClient.post(API_ENDPOINTS.REQUEST_OTP, data);
};

export const useRequestOtp = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: requestOtp,
    onSuccess: (response) => {
      toast({
        title: response?.data?.message,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast({
        title: error?.response?.data?.message,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    },
  });
};

const verifyOtp = (data: { email: string; otp: string }) => {
  return httpClient.post(API_ENDPOINTS.VERIFY_OTP, data);
};

export const useVerifyOtp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (response) => {
      toast({
        title: response?.data?.message,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
      navigate(ROUTES.LOGIN);
    },
    onError: (error: AxiosError<ErrorType>) => {
      toast({
        title: error?.response?.data?.message,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    },
  });
};
