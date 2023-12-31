import { Link } from "react-router-dom";
import { CartIcon } from "@/assets/icon/all";
import { useCart } from "@/hooks";

export const ProductPage = () => {
  const { product, addFoodToCart } = useCart();

  return (
    <section className="min-h-screen pt-6 w-[90%] mx-auto">
      <Link
        to="/"
        className="py-1 px-5 border-primary border-2 mb-10 inline-block text-primary text-[0.8rem]"
      >
        CONTINUE VIEW PIZZAS
      </Link>
      <div className="grid grid-cols-2 min-h-[50vh] gap-5 bg-orange-300">
        <picture>
          <img
            src={product?.imgUrl || "/src/assets/img/product/pep.avif"}
            alt="food-image"
            className="w-full"
          />
        </picture>
        <div className="p-7">
          <h3 className="text-[1.5rem] mb-5">
            <b>Product Title</b>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos omnis
            accusamus, magni, sunt ipsa non laboriosam similique animi porro
            ipsam quae. Dolorum temporibus earum quas reiciendis excepturi
            veritatis atque omnis!
          </p>
          <div className="flex items-center pt-10">
            <span className="mr-10 text-[1.5rem]">$10.00</span>
            <button className="px-3 py-1 mx-2 bg-white rounded-sm active:scale-[0.95]">
              -
            </button>
            <span className="w-[2rem] text-center">20</span>
            <button className="px-3 py-1 mx-2 bg-white rounded-sm active:scale-[0.95]">
              +
            </button>
            <button
              className="bg-black ml-10 text-white px-5 py-2 text-[0.8rem] border-black border-2 rounded-sm flex items-center gap-2 active:opacity-70"
              onClick={() => addFoodToCart(product!)}
            >
              <i>
                <CartIcon className="text-[1.2rem]" />
              </i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
