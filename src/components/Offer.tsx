import { refType } from "@/hooks/useObserver";

interface Props {
  addElement: (el: refType) => void;
}

export const Offer = ({ addElement }: Props) => {
  return (
    <section
      className="min-h-[50vh] w-[90%] mx-auto py-10 mb-10 opacity-0 translate-y-3"
      ref={addElement}
    >
      <h2 className="text-center pb-10">
        <span>Flat 30% off</span>
        <br />
        <b className="text-[2rem]">Special discounts</b>
      </h2>
      <article className="pt-10 bg-opacity-10 rounded-lg w-full  shadow-sm">
        <picture className="">
          <img
            src="/src/assets/img/offer.webp"
            alt="offer-image"
            className="w-full rounded-sm"
          />
        </picture>
      </article>
    </section>
  );
};
