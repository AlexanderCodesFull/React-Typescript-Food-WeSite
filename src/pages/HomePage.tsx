import { ProductList } from "@/components/ProductList";
import { productList } from "@/utils/data/product";
import { ArrowIcon } from "@/assets/icon/all";
import { Offer } from "@/components";
import { useObserver } from "@/hooks";
import { ContactPage } from "@page";

export const HomePage = () => {
  const { addElement } = useObserver();
  return (
    <>
      <section
        className="w-[90%] m-auto opacity-0 translate-y-3 snap-center"
        ref={addElement}
      >
        <div className="w-auto grid grid-cols-2">
          <article className="flex justify-center flex-col gap-3">
            <h2 className="text-[2rem]">
              <b>Everything is better</b>
              <br />
              <b>
                with a <span className="text-primary">Pizza</span>
              </b>
            </h2>
            <p className="w-[80%] my-5">
              Pizza is the issing place that makes every day complet, a simple
              yet delicious joy in te life.
            </p>

            <button className="text-white flex items-center gap-5 bg-primary px-5 py-2 rounded-sm w-max text-[0.85rem] group">
              <span>Order now</span>
              <i className="rotate-180">
                <ArrowIcon className="bold text-[1.2rem]" />
              </i>
            </button>
          </article>
          <picture>
            <img src="/src/assets/img/pizza.avif" alt="food-image" />
          </picture>
        </div>
      </section>
      <section
        className="w-[90%] mx-auto min-h-screen py-10 opacity-0 translate-y-4"
        ref={addElement}
      >
        <h2 className="text-center pb-10">
          <span>Check</span>
          <span className="ml-2">out</span>
          <br />
          <b className="text-[2rem]">Menu</b>
        </h2>
        <ProductList products={productList} />
      </section>
      <Offer addElement={addElement} />
      <ContactPage />
    </>
  );
};
