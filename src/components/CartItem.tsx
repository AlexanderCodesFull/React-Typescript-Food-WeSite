import { Link } from "react-router-dom";
import { useCart } from "@/hooks";
import { DeleteIcon } from "@/assets/icon/all";
import { Summary } from "@/types/cart";

export const CartItem = ({ product, quantity }: Summary) => {
  const { changeQuantityToCart, deleteProductToCart } = useCart();

  return (
    <article className="flex gap-10 border-b px-4 pl-0 mb-3">
      <Link
        to={`/product?pv=${product.id}`}
        className="hover:scale-[1.01] hover:cursor-pointer transition-transform duration-300 ease-in-out"
      >
        <picture>
          <img
            src={product.imgUrl || "/src/assets/img/product/pep.avif"}
            alt="product-images"
            className="rounded-md"
          />
        </picture>
      </Link>
      <div className="w-full px-4">
        <h5 className="text-[1.1rem]">Product Title</h5>
        <div className="flex items-center pt-3 justify-between">
          <span className="mr-10 text-[1rem] inline-block">
            <>$40.00</>
          </span>
          <div>
            <button
              className="px-3 py-1 border-2 mx-2 bg-white rounded-sm active:opacity-50 border-black"
              onClick={() => changeQuantityToCart(product, -1)}
            >
              -
            </button>
            <span className="w-[3rem] text-center inline-block">
              {quantity}
            </span>
            <button
              className="px-3 py-1 mx-2 bg-black border-2 text-white border-black rounded-sm active:opacity-50"
              onClick={() => changeQuantityToCart(product, 1)}
            >
              +
            </button>
          </div>
          <span
            className="w-[2.3rem] border-red-500 border-2 h-[2.1rem] flex items-center justify-center hover:cursor-pointer active:opacity-70"
            onClick={() => deleteProductToCart(product)}
          >
            <DeleteIcon className="text-primary" />
          </span>
        </div>
      </div>
    </article>
  );
};
