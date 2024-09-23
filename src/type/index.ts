export type ItemsType = {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  discount: string;
  category_id: string;
  category_name: string;
  is_featured: boolean;
};

export type CartStoreType = {
  items: CartItemsType[];
  orderNumber: number;
  addItemToCart: (product: CartItemsType) => void;
  updateCartQuantity: (
    id: number,
    newQuantity: number,
    orderNumBer: number
  ) => void;
  removeItemFromCart: (id: number) => void;
  clearStates: () => void;
};

export type CartItemsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  quantity: number;
  orderNumber: number;
};

export type CategoryType = {
  _id: string;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type APIResponseType<T> = {
  message: "Categories data fetch successfully";
  status: 200;
  data: T;
};
