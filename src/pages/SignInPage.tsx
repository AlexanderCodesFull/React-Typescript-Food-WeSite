import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <div className="border z-20 bg-white w-full p-7 py-7 text-[0.8rem]">
      <h2 className="text-[1.2rem] text-center font-bold">Sign In</h2>
      <h3 className="text-[0.8rem] text-center mb-5">
        <b>AZ</b>
        <span className="pl-2 text-primary">
          <b>PIZZA</b>
        </span>
      </h3>
      <form className="flex flex-col gap-3">
        <label htmlFor="">Email</label>
        <input type="text" className="border px-4 py-[0.4rem] outline-none" />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="border px-4 py-[0.4rem] outline-none"
        />
        <button className="bg-primary text-white px-5 py-2 rounded-sm mt-5">
          Sign In
        </button>

        <div className="flex justify-between items-center">
          <Link to="/" className="underline inline-block mt-5">
            Back to Home
          </Link>
          <Link to="/" className="underline inline-block mt-5">
            Forgout password?
          </Link>
        </div>
        <Link to="/auth/register" className="underline inline-block mt-1">
          Create Account
        </Link>
      </form>
    </div>
  );
};
