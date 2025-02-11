import { CartItemsType } from "./cart.type";

export type UserStoreType = {
  email: string;
  otp: string;
  updateEmail: (email: string) => void;
  updateOtp: (otp: string) => void;
  clearEmail: () => void;
  clearOtp: () => void;
  clearUserState: () => void;
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
