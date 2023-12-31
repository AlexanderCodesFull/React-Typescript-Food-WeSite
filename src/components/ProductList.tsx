import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[] | [];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-5 w-full">
      {products.length > 0 ? (
        products.map((el) => <ProductCard key={el.id} {...el} />)
      ) : (
        <p className="text-center">Not Found Products</p>
      )}
    </div>
  );
};
