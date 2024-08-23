export type ItemsType = {
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
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};
