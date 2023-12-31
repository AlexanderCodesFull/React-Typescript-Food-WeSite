import { ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import { CartState } from "@/types/cart";
import { Product } from "@/types/product";
import { changeProductToCart, changeQuantity, deleteProduct } from "./help";
import { useSummary } from "@/hooks";

interface Props {
  children: ReactNode | ReactNode[];
}

const INITIAL_CART_STATE: CartState = {
  products: [], //get products API
  product: undefined,
  cart: [],
  total: 0,
  items: 0,
};

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  useSummary({ dispatch, cart: state.cart });

  const addFoodToCart = (prod: Product) => {
    const cart = changeProductToCart({ prod, cart: state.cart });
    dispatch({ type: "ADD_CART_TO_FOOD", payload: cart });
  };

  const productView = (prod: Product) => {
    dispatch({ type: "CHANGE_FOOD_VIEW", payload: prod });
  };

  const changeQuantityToCart = (prod: Product, val: number) => {
    const cart = changeQuantity({ cart: state.cart, val, id: prod.id });
    dispatch({ type: "CHANGE_QUANTITY_TO_FOOD", payload: cart });
  };

  const deleteProductToCart = (prod: Product) => {
    const cart = deleteProduct(prod.id, state.cart);
    dispatch({ type: "DELETE_CART_TO_FOOD", payload: cart });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        productView,
        addFoodToCart,
        changeQuantityToCart,
        deleteProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
