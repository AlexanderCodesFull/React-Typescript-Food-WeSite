import { Product } from "./product";

export interface Summary {
  id: number;
  product: Product;
  quantity: number;
  total: number;
}

export interface CartState {
  products: Product[] | [];
  product: Product | undefined;
  cart: Summary[] | [];
  total: number;
  items: number;
}
