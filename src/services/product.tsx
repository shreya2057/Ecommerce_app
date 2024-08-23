import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../api";
import instance from "../axios/instance";
import { Response } from "../data/types";

const getAllProducts = async (): Promise<Response> => {
  try {
    const response = await instance.get("/products");
    return { status: response.status, message: response.data.products };
  } catch (error: any) {
    return { status: 404, message: error.message };
  }
};

const getCategorywiseProduct = (category: string) => {
  return instance.get(API_ENDPOINTS.GET_CATEGORYWISE_PRODUCTS, {
    params: { categoryId: category },
  });
};

export const useProductQuery = (category: number) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getCategorywiseProduct(category.toString()),
    select: (response) => response?.data,
  });
};

const productCategory = () => {
  return instance.get(API_ENDPOINTS.GET_CATEGORIES);
};

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => productCategory(),
    select: (response) => response?.data,
  });
};

const searchOperation = async (text: string): Promise<Response> => {
  try {
    const response = await instance.get(
      `https://dummyjson.com/products/search?q=${text}`
    );
    return { status: response.status, message: response.data };
  } catch (error: any) {
    return { status: 404, message: error.message };
  }
};

export {
  getAllProducts,
  getCategorywiseProduct,
  productCategory,
  searchOperation,
};
