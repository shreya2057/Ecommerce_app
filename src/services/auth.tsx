import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { API_ENDPOINTS } from "../api";
import instance from "../axios/instance";
import { ROUTES } from "../routes/routes";
import { loginSchema } from "../schema/loginSchema";
import { registerSchema } from "../schema/registerSchema";
import { useUserStore } from "../stores/userStore";
import { ErrorType } from "../type";
import { TokenService } from "../utils/token";

const login = (data: z.infer<typeof loginSchema>) => {
  return instance.post(API_ENDPOINTS.LOGIN, data);
};

export const useLoginQuery = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const tokens = response?.data?.data;
      if (!tokens?.access_token || !tokens?.refresh_token) return;
      else {
        TokenService.setToken("access_token", tokens?.access_token);
        TokenService.setToken("refresh_token", tokens?.refresh_token);
        queryClient.invalidateQueries("isauthenticated");
        navigate(ROUTES.PRODUCTS);
      }
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

const register = (data: z.infer<typeof registerSchema>) => {
  return instance.post(API_ENDPOINTS.REGISTER, data);
};

export const useRegisterQuery = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { updateEmail } = useUserStore();
  return useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      toast({
        title: response?.data?.message,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
      updateEmail(response?.data?.data?.email);
      navigate(ROUTES.EMAIL_VERIFY);
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
