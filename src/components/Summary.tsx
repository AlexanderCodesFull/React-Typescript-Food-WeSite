import { useCart } from "@/hooks";
import { Link } from "react-router-dom";

export const Summary = () => {
  const { items, total, cart } = useCart();
  return (
    <article className="shadow-lg py-5 w-full">
      <h6 className="text-center font-bold mb-5">ORDER SUMMARY</h6>
      <div className="p-5 px-7 text-[0.86rem]">
        <label className="flex items-center justify-between mb-3">
          <span>items :</span> <span>{cart.length || 0}</span>
        </label>
        <label className="flex items-center justify-between mb-5">
          <span>Total selected products :</span> <span>{items}</span>
        </label>
        <label className="flex items-center justify-between py-3">
          <b>Total Price : </b> <b>{total}.00</b>
        </label>
      </div>
      <Link
        to="/auth/login"
        className="bg-primary block mx-auto text-white px-5 py-2 my-8 text-[0.85rem] rounded-sm w-[90%] active:opacity-70 text-center"
      >
        Checkout
      </Link>
    </article>
  );
};
