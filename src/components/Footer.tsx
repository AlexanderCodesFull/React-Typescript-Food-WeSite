import { LocationIcon, PhoneIcon } from "@/assets/icon/all";
import { navBarItems } from "@/utils/data/navigtion";

export const Footer = () => {
  return (
    <div className="bg-black text-white min-h-[50vh]">
      <div className="grid grid-cols-3 gap-5 container mx-auto">
        <div className="container mx-auto py-5">
          <h6 className="text-[1.5rem]">
            <b>AZ</b>
            <span className="pl-2 text-primary">
              <b>PIZZA</b>
            </span>
          </h6>
          <p className="text-[0.8rem] w-[85%] mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            placeat obcaecati eveniet reprehenderit repudiandae odio?
            Consequatur, vitae quia cupiditate soluta in eius officiis dolorem
            temporibus incidunt, magni, quidem quisquam sapiente.
          </p>
        </div>
        <div className="pt-7 flex justify-center">
          <div>
            <h6>Navigation</h6>
            <ul className="flex flex-col gap-2 mt-4 text-[0.8rem]">
              {navBarItems.map((el) => (
                <li key={el.href}>{el.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-7 flex flex-col items-center">
          <div className="">
            <h6>Location</h6>
            <ul className="mt-4">
              <li className="flex items-center gap-5 my-2">
                <PhoneIcon />
                <span className="text-[0.8rem]">+ 591 576 456 90</span>
              </li>
              <li className="flex items-center gap-5 my-2">
                <LocationIcon />
                <span className="text-[0.8rem]">Main street nro 1001</span>
              </li>
            </ul>
          </div>
          <picture className="mt-10">
            <img src="/src/assets/img/payment.avif" alt="payment-image" />
          </picture>
        </div>
      </div>
    </div>
  );
};
