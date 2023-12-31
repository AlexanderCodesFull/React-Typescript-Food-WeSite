import { SendIcon } from "@/assets/icon/all";

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3 text-[0.8rem] pl-4" autoComplete="off">
      <label htmlFor="email" className="">
        Email
      </label>
      <input
        type="text"
        id="email"
        className="py-2 px-3 rounded-sm outline-none border border-opacity-50"
        placeholder="example@gmail.com"
      />
      <label htmlFor="description" className="">
        Description
      </label>
      <textarea
        id="description"
        className="resize-none py-2 px-3 rounded-sm outline-none border  h-[5rem]"
      ></textarea>
      <button className="w-max flex items-center gap-1 mt-2 bg-primary text-white py-2 px-4 rounded-sm hover:cursor-pointer">
        <span> Send message</span>
        <SendIcon className="text-[1rem]" />
      </button>
    </form>
  );
};
