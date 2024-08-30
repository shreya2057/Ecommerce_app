import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../api";
import instance from "../axios/instance";
import { CategoryType } from "../type";

const getCategorywiseProduct = ({
  category,
  title,
}: {
  category: string;
  title?: string;
}) => {
  return instance.get(API_ENDPOINTS.GET_CATEGORYWISE_PRODUCTS, {
    params: { categoryId: category, title },
  });
};

export const useProductQuery = ({
  category,
  title,
}: {
  category: number;
  title?: string;
}) => {
  return useQuery({
    queryKey: ["products", category, title],
    queryFn: () =>
      getCategorywiseProduct({ category: category.toString(), title }),
    select: (response) => response?.data,
    enabled: !!category,
  });
};

const productCategory = () => {
  return instance.get<CategoryType[]>(API_ENDPOINTS.GET_CATEGORIES);
};

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => productCategory(),
    select: (response) => response?.data,
  });
};

export { getCategorywiseProduct, productCategory };
