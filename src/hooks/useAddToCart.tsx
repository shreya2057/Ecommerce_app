import { useToast } from "@chakra-ui/react";
import useCartStore from "../stores/cartStore";
import { ItemsType } from "../type";

export const useAddToCart = ({
  setDisable,
}: {
  setDisable: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toast = useToast();
  const { items, orderNumber, addItemToCart, updateCartQuantity } =
    useCartStore();
  const itemAddToCart = async (item: ItemsType) => {
    const itemExits = items.find(
      (product: ItemsType) => product.id === item.id
    );
    if (itemExits) {
      const newQuantity = itemExits.quantity + 1;
      updateCartQuantity(itemExits.id, newQuantity, orderNumber);
    } else {
      if (orderNumber === 0) {
        const randomNumber =
          Math.floor(Math.random() * (400000000 - 100000000 + 1)) + 100000000;
        const itemToBeAdded = {
          ...item,
          quantity: 1,
          orderNumber: randomNumber,
        };
        addItemToCart(itemToBeAdded);
      } else {
        const itemToBeAdded = {
          ...item,
          quantity: 1,
          orderNumber: orderNumber,
        };
        addItemToCart(itemToBeAdded);
      }
    }
    toast({
      title: `${item.title} added to cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 1000);
  };

  return { itemAddToCart };
};
