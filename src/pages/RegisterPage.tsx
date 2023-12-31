import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <section className="border z-20 p-7 w-full py-5 text-[0.8rem] bg-white">
      <h2 className="text-[1.2rem] text-center font-bold">Create Account</h2>
      <h3 className="text-[0.8rem] text-center mb-5">
        <b>AZ</b>
        <span className="pl-2 text-primary">
          <b>PIZZA</b>
        </span>
      </h3>
      <form className="flex flex-col gap-3">
        <label htmlFor="">Username</label>
        <input type="text" className="border px-4 py-[0.4rem] outline-none" />
        <label htmlFor="">Email</label>
        <input type="text" className="border px-4 py-[0.4rem] outline-none" />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="border px-4 py-[0.4rem] outline-none"
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          className="border px-4 py-[0.4rem] outline-none"
        />
        <button className="bg-primary text-white px-5 py-2 rounded-sm mt-5">
          Register
        </button>

        <div className="flex justify-between items-center">
          <Link to="/" className="underline inline-block mt-5">
            Back to Home
          </Link>
          <Link to="/" className="underline inline-block mt-5">
            Forgout password?
          </Link>
        </div>
        <Link to="/auth/login" className="underline inline-block mt-1">
          Sign In
        </Link>
      </form>
    </section>
  );
};
