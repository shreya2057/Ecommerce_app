import { create } from "zustand";

const useCartStore = create((set)=>({
  items:[],
  addItemToCart: (product:any)=>set((state:any)=>({items: [...state.items, product]})),
}))

export default useCartStore;