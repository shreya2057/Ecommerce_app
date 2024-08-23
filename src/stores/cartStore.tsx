import { create } from "zustand";
import { CartItemsType, CartStoreType } from "../type";

const useCartStore = create<CartStoreType>((set) => ({
  items: [],
  orderNumber: 0,
  addItemToCart: (product: CartItemsType) => {
    set((state: CartStoreType) => ({
      items: [...state.items, product],
    }));
  },
  updateCartQuantity: (
    id: number,
    newQuantity: number,
    orderNumBer: number
  ) => {
    set((state: CartStoreType) => ({
      items: state.items.map((product: CartItemsType) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: newQuantity,
            orderNumber: orderNumBer,
          };
        } else {
          return { ...product };
        }
      }),
    }));
  },
  removeItemFromCart: (id: number) => {
    set((state: CartStoreType) => ({
      items: state.items.filter((item: CartItemsType) => item.id !== id),
    }));
  },
  clearStates: () => {
    set(() => ({
      items: [],
      orderNumber: 0,
    }));
  },
}));

export default useCartStore;
