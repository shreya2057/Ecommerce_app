import { create } from "zustand";

const useCartStore = create((set)=>({
  items:[],
  addItemToCart: 
    (product:any) => {
      set((state:any)=>(
        {
          items: [...state.items, product]
        }
      ))
    },
  updateCartQuantity: 
    (id:number, newQuantity: number)=>{
      set((state:any)=>(
        {
          items: state.items.map((product:any)=>{
            if(product.id===id){
                return {...product, ["quantity"]: newQuantity}
            } else {
              return{...product}
            }
          })
        }
      ))
    },
  removeItemFromCart: (id:number)=>set((state:any)=>({items: state.items.filter((item:any)=>item.id!==id)}))
}))

export default useCartStore;