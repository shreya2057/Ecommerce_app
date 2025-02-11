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

export type CartPostType = {
  number: number;
  product: string;
};

export type CartCount = {
  total_count: number;
};
