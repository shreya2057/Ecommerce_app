import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../api";
import instance from "../axios/instance";
import { APIResponseType, CategoryType, ItemsType } from "../type";

const getProduct = ({
  category,
  title,
}: {
  category: string;
  title?: string;
}) => {
  return instance.get<APIResponseType<ItemsType[]>>(
    API_ENDPOINTS.GET_PRODUCTS,
    {
      params: { category_id: category, title },
    }
  );
};

export const getFeaturedProduct = () => {
  return instance.get<APIResponseType<ItemsType[]>>(
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
  console.log(!category);
  return useQuery({
    queryKey: ["products", category, title],
    queryFn: () =>
      !category ? getFeaturedProduct() : getProduct({ category, title }),
    select: (response) => response?.data?.data,
  });
};

const productCategory = () => {
  return instance.get<APIResponseType<CategoryType[]>>(
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
