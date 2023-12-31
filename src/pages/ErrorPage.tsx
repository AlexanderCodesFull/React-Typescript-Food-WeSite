import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen w-full justify-center flex-col bg-gradient-to-t from-white to-orange-300">
      <h1 className="text-black text-[1.2rem] my-5">Not Found page</h1>
      <Link to="/" className="underline">
        Back to Home
      </Link>
    </section>
  );
};
