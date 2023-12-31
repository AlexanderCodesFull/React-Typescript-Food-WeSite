import { Link } from "react-router-dom";
import { CartItem, Summary } from "@/components";
import { useCart } from "@/hooks";

export const CartPage = () => {
  const { cart } = useCart();
  return (
    <section className="min-h-screen anim-fade opacity-0 translate-y-3 w-[90%] mx-auto">
      <Link
        to="/"
        className="py-1 px-5 border-primary border-2 mb-10 inline-block text-primary text-[0.8rem]"
      >
        CONTINUE VIEW PIZZAS
      </Link>
      <span className="uppercase block pb-6 font-bold">
        list of products in cart
      </span>
      <div className="grid grid-cols-[2fr_1fr] gap-10">
        <div className="max-h-[75vh] overflow-y-auto cart-scroll">
          {cart.length > 0 ? (
            cart.map((prod) => <CartItem key={prod.id} {...prod} />)
          ) : (
            <p className="opacity-60">Not select products</p>
          )}
        </div>
        <div>{cart.length > 0 && <Summary />}</div>
      </div>
    </section>
  );
};
