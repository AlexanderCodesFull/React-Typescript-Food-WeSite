import { ContactForm } from "@/components";
import { useObserver } from "@/hooks";

interface Props {
  img?: boolean;
}

export const ContactPage = ({ img }: Props) => {
  const { addElement } = useObserver();
  return (
    <section
      className="min-h-screen py-10 w-[90%] mx-auto mb-10 opacity-0 translate-y-3 snap-center"
      ref={addElement}
    >
      <h2 className="text-center pb-1">
        <span>Receive</span>
        <span className="ml-2">offer</span>
        <br />
        <b className="text-[2rem]">Contact us</b>
      </h2>
      <article
        className={`pt-10 bg-opacity-10 rounded-lg grid ${
          img ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div
          className={`pl-5  mx-auto  p-7 border rounded-md shadow-md ${
            img ? "w-auto" : "w-[60%]"
          }`}
        >
          <ContactForm />
        </div>
      </article>
    </section>
  );
};
