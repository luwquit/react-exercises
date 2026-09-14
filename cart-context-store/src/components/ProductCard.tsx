import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import formatCurrency from "../assets/formatCurrency";

export function ProductCard() {
  const {products} = useContext(ProductContext);

  return (
    <>
      {products && products.map(product => {
        return (
          <div key={product.id} className="shadow-xl dark:shadow-2xl w-55 pb-4 justify-self-center flex flex-col h-full overflow-hidden">
            <img src={product.image} className="w-full h-55 object-cover" />
            <div className="px-3 py-2 text-text-light dark:text-bg-light flex flex-col grow">
              <h3 className="text-xl">{product.name}</h3>
              <h3 className="text-2xl font-bold pt-1 mt-auto">{formatCurrency(product.priceCents)}</h3>
            </div>
            <button className="btn block bg-main-light dark:bg-bg-light dark:text-bg-dark dark:font-semibold m-auto">Add to Cart</button>
          </div>
        )
      })}
    </>
  );
}