import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  orderNumber: 0,
  addItemToCart: (product: any) => {
    set((state: any) => ({
      items: [...state.items, product],
    }));
  },
  generateOrderNumber: (randomNumber: number) => {
    set(() => ({
      orderNumber: randomNumber,
    }));
  },
  updateCartQuantity: (
    id: number,
    newQuantity: number,
    orderNumBer: number
  ) => {
    set((state: any) => ({
      items: state.items.map((product: any) => {
        if (product.id === id) {
          return {
            ...product,
            ["quantity"]: newQuantity,
            ["orderNumber"]: orderNumBer,
          };
        } else {
          return { ...product };
        }
      }),
    }));
  },
  removeItemFromCart: (id: number) => {
    set((state: any) => ({
      items: state.items.filter((item: any) => item.id !== id),
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
