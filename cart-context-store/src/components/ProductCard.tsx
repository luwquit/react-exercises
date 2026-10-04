import { useEffect, useState } from "react";
import { useProduct, useSearchedProduct, type Product } from "../contexts/ProductContext";
import { useCart } from "../contexts/CartContext";
import formatCurrency from "../assets/formatCurrency";

export function ProductCard() {
  const NOT_FOUND = 'No items was found';
  const {products} = useProduct();
  const {searchedProducts} = useSearchedProduct();
  const {cartDispatch} = useCart();
  const [renderProducts, setRenderProducts] = useState<Product[] | typeof NOT_FOUND | undefined>([]);

  useEffect(() => {
    if (searchedProducts === 'notFound') {
      setRenderProducts(NOT_FOUND);
    
    } else if (searchedProducts === undefined) {
      setRenderProducts(products);
    
    } else {
      setRenderProducts(searchedProducts);
    }
  }, [products, searchedProducts])

  return (
    <>
      { renderProducts === 'No items was found' ? (
        <p className="col-span-full text-center text-2xl font-medium text-main-light dark:text-bg-light">{renderProducts}</p>
      ) : (
        renderProducts.map(product => {
            return (
              <div key={product.id} className="shadow-xl dark:shadow-2xl xl:w-55 md:w-40 w-40 pb-4 justify-self-center flex flex-col h-full overflow-hidden">
                <img src={product.image} className="w-full xl:h-55 md:h-40 h-40 object-cover" />
                <div className="px-3 py-2 text-text-light dark:text-bg-light flex flex-col grow">
                  <h3 className="xl:text-xl text-lg">{product.name}</h3>
                  <h3 className="xl:text-2xl text-xl font-bold pt-1 mt-auto">{formatCurrency(product.priceCents)}</h3>
                </div>
                <button className="mt-2 btn xl:text-lg text-sm xl:px-5 px-3 py-2 block bg-main-light dark:bg-bg-light dark:text-bg-dark dark:font-semibold m-auto"
                  onClick={() => {cartDispatch({type: "addToCart", payload: {id: product.id, quantity: 1}})}}>
                  Add to Cart
                </button>
              </div>
            )
          })
      )}
    </>
  );
}