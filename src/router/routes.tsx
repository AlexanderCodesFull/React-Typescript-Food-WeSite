import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, RootLayout } from "@layout";
import {
  HomePage,
  ErrorPage,
  ProductPage,
  CartPage,
  AboutPage,
  ContactPage,
  RegisterPage,
  SignInPage,
} from "@page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <SignInPage />,
      },
    ],
  },
]);
