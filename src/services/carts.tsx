import { API_ENDPOINTS } from "@/api";
import { httpClient } from "@/axios";
import { APIResponseType, CartCount, CartPostType, ErrorType } from "@/type";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";

const addToCart = (data: CartPostType) => {
  return httpClient.post(API_ENDPOINTS.ADD_TO_CART, data);
};

export const useAddToCart = () => {
  const toast = useToast();
  return useMutation({
    mutationKey: [API_ENDPOINTS.ADD_TO_CART],
    mutationFn: addToCart,
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

const getCartCount = () => {
  return httpClient.get<APIResponseType<CartCount>>(API_ENDPOINTS.CART_COUNT);
};

export const useGetCartCount = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.CART_COUNT],
    queryFn: getCartCount,
    select: (response) => response?.data?.data?.total_count,
  });
};
