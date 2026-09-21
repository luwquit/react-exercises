import { useContext, useEffect, useState } from "react";
import { ProductContext, searchedProductsContext, type Product } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import formatCurrency from "../assets/formatCurrency";

export function ProductCard() {
  const NOT_FOUND = 'No items was found';
  const {products} = useContext(ProductContext);
  const {searchedProducts} = useContext(searchedProductsContext);
  const {cartDispatch} = useContext(CartContext);
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
              <div key={product.id} className="shadow-xl dark:shadow-2xl w-55 pb-4 justify-self-center flex flex-col h-full overflow-hidden">
                <img src={product.image} className="w-full h-55 object-cover" />
                <div className="px-3 py-2 text-text-light dark:text-bg-light flex flex-col grow">
                  <h3 className="text-xl">{product.name}</h3>
                  <h3 className="text-2xl font-bold pt-1 mt-auto">{formatCurrency(product.priceCents)}</h3>
                </div>
                <button className="btn block bg-main-light dark:bg-bg-light dark:text-bg-dark dark:font-semibold m-auto"
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