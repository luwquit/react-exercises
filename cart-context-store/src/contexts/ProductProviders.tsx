import axios from "axios";
import { useMemo, useState, useEffect, type ReactNode } from "react";
import { ProductContext, searchedProductsContext, type Product } from "./ProductContext.tsx";

export function ProductProviders({children} : {children: ReactNode}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/products');
          setProducts(response.data);
        } catch (error) {
          console.log(error)
        };
      };
      fetchData();
    }, [])

  const productValue = useMemo(() => ({products, setProducts}), [products]);
  const searchedProductValue = useMemo(() => ({searchedProducts, setSearchedProducts}), [searchedProducts]);

  return (
    <ProductContext.Provider value={productValue}>
      <searchedProductsContext.Provider value={searchedProductValue}>
        {children}
      </searchedProductsContext.Provider>
    </ProductContext.Provider>
  )
}