import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center relative anim-fade">
      <section className="relative flex w-[80%] overflow-hidden rounded-lg shadow-lg">
        <picture className="absolute w-[60%]">
          <img src="/src/assets/img/auth.avif" alt="auth-image" className="" />
        </picture>
        <div className="grid grid-cols-[1.3fr_1fr] min-h-[35rem] w-full overflow-hidden">
          <span></span>
          <Outlet />
        </div>
      </section>
    </div>
  );
};
