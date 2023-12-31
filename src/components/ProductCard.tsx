import { Link } from "react-router-dom";
import { useCart } from "@/hooks";
import { CartIcon } from "@/assets/icon/all";
import { Product } from "@/types/product";

export const ProductCard = (prod: Product) => {
  const { addFoodToCart, productView } = useCart();

  return (
    <article className="shadow-lg border p-4 py-8 hover:bg-opacity-10 hover:-translate-y-1 transition-transform duration-500 ease-out cursor-pointer relative">
      <Link
        to={`/product?pv=${prod.id}`}
        onClick={() => productView(prod)}
        className="pb-5 block relative"
      >
        <picture className="">
          <img
            src={prod.imgUrl}
            alt={prod.title}
            className="mx-auto rounded-md"
          />
        </picture>
        <h3>{prod.title}</h3>
        <h4 className="mx-3 pt-2 text-center">
          <b>Pizza Pepperoni</b>
        </h4>
        <p className="text-[0.75rem] p-3 pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Link>
      <div className="flex justify-between items-center w-full p-5 md:px-7 xl:px-8 left-0 right-0 absolute bottom-0 z-30">
        <b className="text-primary font-normal">$40</b>
        <button
          className="border-primary border flex cursor-pointer items-center text-primary gap-1 px-[0.4rem] py-1 text-[0.7rem] rounded-sm active:opacity-40"
          onClick={() => addFoodToCart(prod)}
        >
          <i>
            <CartIcon className="text-[1rem]" />
          </i>
          <span className="">add to cart</span>
        </button>
      </div>
    </article>
  );
};
