import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../api";
import { httpClient } from "../axios";
import { APIResponseType, CategoryType, ItemsType } from "../type";
import { generateApiPath } from "../utils/generateApiPath";

const getProduct = ({
  category,
  title,
}: {
  category: string;
  title?: string;
}) => {
  return httpClient.get<APIResponseType<ItemsType[]>>(
    API_ENDPOINTS.GET_PRODUCTS,
    {
      params: { category_id: category, title },
    }
  );
};

export const getFeaturedProduct = () => {
  return httpClient.get<APIResponseType<ItemsType[]>>(
    API_ENDPOINTS.FEATURED_PRODUCTS
  );
};

export const useProductQuery = ({
  category,
  title,
}: {
  category: string;
  title?: string;
}) => {
  return useQuery({
    queryKey: ["products", category, title],
    queryFn: () =>
      !category ? getFeaturedProduct() : getProduct({ category, title }),
    select: (response) => response?.data?.data,
  });
};

const productCategory = () => {
  return httpClient.get<APIResponseType<CategoryType[]>>(
    API_ENDPOINTS.GET_CATEGORIES
  );
};

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => productCategory(),
    select: (response) => response?.data?.data,
  });
};

const getProductDetail = ({ id }: { id: string }) => {
  return httpClient.get<APIResponseType<ItemsType>>(
    generateApiPath(API_ENDPOINTS.GET_PRODUCT_DETAIL, { id })
  );
};

export const useGetProductDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["product-detail", id],
    queryFn: () => getProductDetail({ id }),
    select: (response) => response?.data?.data,
    enabled: !!id,
  });
};
