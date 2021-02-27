export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export interface ProductItemType {
  id?: number;
  title: string;
  price: number;
  category: string;
  img: string;
  qty: number;
}
