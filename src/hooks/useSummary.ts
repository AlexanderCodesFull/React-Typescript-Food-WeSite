import { useEffect } from "react";
import { cartType } from "@/context/cart/actions";
import { Summary } from "@/types/cart";

interface Param {
  cart: Summary[] | [];
  dispatch: (value: cartType) => void;
}

export const useSummary = ({ dispatch, cart }: Param) => {
  useEffect(() => {
    if (cart.length === 0) {
      return dispatch({
        type: "CHANGE_SUMMARY_TO_FOOD",
        payload: { total: 0, items: 0 },
      });
    }
    const t = cart.map((el) => el.total);
    const i = cart.map((el) => el.quantity);
    const total = t.reduce((a, b) => a + b);
    const items = i.reduce((a, b) => a + b);
    dispatch({ type: "CHANGE_SUMMARY_TO_FOOD", payload: { total, items } });
  }, [cart]);

  return {};
};
