import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/cart/CartProvider";

export const RootLayout = () => {
  return (
    <main className="min-h-screen w-full">
      <CartProvider>
        <NavBar />
        <div className="container mx-auto pt-[5rem] snap-scroll">
          <Outlet />
        </div>
      </CartProvider>
      <Footer />
    </main>
  );
};
