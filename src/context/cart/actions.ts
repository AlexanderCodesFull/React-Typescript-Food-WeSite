import { Summary } from "@/types/cart";
import { Product } from "@/types/product";

interface Summ {
  total: number;
  items: number;
}

export type cartType =
  | { type: "ADD_CART_TO_FOOD"; payload: Summary[] | [] }
  | { type: "CHANGE_QUANTITY_TO_FOOD"; payload: Summary[] | [] }
  | { type: "CHANGE_FOOD_VIEW"; payload: Product }
  | { type: "DELETE_CART_TO_FOOD"; payload: Summary[] | [] }
  | { type: "CHANGE_SUMMARY_TO_FOOD"; payload: Summ };
