export type Product = {
  id: number;
  title: string;
  price: string;
  rating: Rating;
  category: string;
  description: string;
  image: string;
  quantity: number;
};

type Rating = {
  rate: number;
  count: number;
};
