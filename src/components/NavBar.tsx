import { Link, NavLink } from "react-router-dom";
import { CartIcon, MenuIcon } from "@/assets/icon/all";
import { navBarItems } from "@/utils/data/navigtion";
import { useCart } from "@/hooks";

export const NavBar = () => {
  const { items } = useCart();
  return (
    <header className="header-fixed z-20">
      <nav className="container flex h-[4rem] w-[90%] mx-auto items-center justify-between text-[0.85rem]">
        <h1 className="text-[1.5rem]">
          <b>AZ</b>
          <span className="pl-2 text-primary">
            <b>PIZZA</b>
          </span>
        </h1>
        <ul className="menu-fixed md:menu-flex text-end">
          {navBarItems.map(({ text, href }) => (
            <li key={text} className="">
              <NavLink
                className="link-fixed md:link-normal md:hover:text-primary"
                to={href}
              >
                {text}
              </NavLink>
            </li>
          ))}
          <li className="ml-[10%] mt-[5rem] text-start md:mt-0">
            <Link to="/auth/register" className="button-register">
              Register
            </Link>
          </li>
          <li className="mt-9 text-start ml-[10%] md:mt-0 md:ml-0">
            <Link to="/auth/login" className="button-login">
              Sign In
            </Link>
          </li>
        </ul>
        <span className="flex items-center justify-center gap-5 text-[1.5rem] ml-3">
          <NavLink to="/cart" className="relative">
            <CartIcon className="" />
            <b className="cart-log">{items}</b>
          </NavLink>
          <i className="visible md:hidden">
            <MenuIcon className="" />
          </i>
        </span>
      </nav>
    </header>
  );
};
