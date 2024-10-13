import { useMutation, useQueryClient } from "react-query";
import { z } from "zod";
import { API_ENDPOINTS } from "../api";
import instance from "../axios/instance";
import { loginSchema } from "../schema/loginSchema";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { ErrorType } from "../type";
import { TokenService } from "../utils/token";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

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
