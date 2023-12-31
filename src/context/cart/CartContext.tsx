import { createContext } from "react";
import { CartState } from "@/types/cart";
import { Product } from "@/types/product";

interface ContextProps extends CartState {
  productView: (prod: Product) => void;
  addFoodToCart: (prod: Product) => void;
  changeQuantityToCart: (prod: Product, val: number) => void;
  deleteProductToCart: (prod: Product) => void;
}

export const CartContext = createContext({} as ContextProps);
