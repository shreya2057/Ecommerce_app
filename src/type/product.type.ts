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

export type CategoryType = {
  _id: string;
  name: string;
  creationAt: string;
  updatedAt: string;
};
