import { Summary } from "@/types/cart";
import { Product } from "@/types/product";

interface ChangeProd {
  prod: Product;
  cart: Summary[];
}

export const changeProductToCart = ({ prod, cart }: ChangeProd): Summary[] => {
  let newCart: Summary[] = [
    ...cart,
    {
      id: prod.id,
      product: prod,
      quantity: 1,
      total: prod.price,
    },
  ];
  if (cart.length === 0) return newCart;
  else {
    const exist = cart.find((el) => el.product.id === prod.id && el);
    if (!exist) {
      return newCart;
    } else {
      return cart.map((el) => {
        if (el.id === prod.id && el.quantity < 10) {
          return {
            ...el,
            product: prod,
            quantity: el.quantity + 1,
            total: el.total + el.product.price,
          };
        }
        return el;
      });
    }
  }
};

interface Params {
  id: number;
  val: number;
  cart: Summary[] | [];
}

export const changeQuantity = ({ cart, val, id }: Params): Summary[] => {
  return cart.map((el) => {
    if (el.product.id === id) {
      if (val === 1 && el.quantity < 10) {
        return {
          ...el,
          quantity: el.quantity + 1,
          total: el.total + el.product.price,
        };
      } else el;
      if (val !== 1 && el.quantity > 1) {
        return {
          ...el,
          quantity: el.quantity - 1,
          total: el.total - el.product.price,
        };
      } else el;
    }
    return el;
  });
};

export const deleteProduct = (id: number, cart: Summary[]): Summary[] | [] => {
  return cart.filter((el) => el.product.id !== id) || [];
};
