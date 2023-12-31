import { useObserver } from "@/hooks";

export const AboutPage = () => {
  const { addElement } = useObserver();
  return (
    <section
      className="min-h-screen py-10 w-[90%] mx-auto opacity-0 translate-y-3"
      ref={addElement}
    >
      <h2 className=" text-center pl-5 pb-10">
        <b className="text-[2rem]">About us</b>
        <br />
        <span>Our</span>
        <span className="ml-2">company</span>
      </h2>
      <div className="grid grid-cols-2 pt-10 gap-3 place-items-center">
        <div className="relative">
          <picture>
            <img
              src="/src/assets/img/about.avif"
              alt="about-image"
              className="w-full rounded-md"
            />
          </picture>
        </div>
        <div className="relative ">
          <p className="text-[0.8rem]  w-[80%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            animi cumque nihil fuga ut sapiente nostrum. Perferendis nemo velit
            ea qui accusamus rerum natus temporibus eveniet voluptatem,
            consectetur, iure debitis.
          </p>
          <p className="text-[0.8rem]  w-[80%] mx-auto pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            officia reprehenderit. Ad laborum voluptatem voluptates, distinctio
            vitae ex perferendis quas ullam alias eos voluptate eligendi nisi
            laboriosam consequuntur autem possimus!
          </p>
          <p className="text-[0.8rem]  w-[80%] mx-auto pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            officia reprehenderit. Ad laborum voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
};
