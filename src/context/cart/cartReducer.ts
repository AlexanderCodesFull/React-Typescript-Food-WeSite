import { CartState } from "@/types/cart";
import { cartType } from "./actions";

export const cartReducer = (state: CartState, action: cartType): CartState => {
  switch (action.type) {
    case "ADD_CART_TO_FOOD":
      return { ...state, cart: action.payload };

    case "CHANGE_FOOD_VIEW":
      return { ...state, product: action.payload };

    case "CHANGE_QUANTITY_TO_FOOD":
      return { ...state, cart: action.payload };

    case "CHANGE_SUMMARY_TO_FOOD":
      return { ...state, ...action.payload };

    case "DELETE_CART_TO_FOOD":
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};
