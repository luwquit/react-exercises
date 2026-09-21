import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export interface Product {
  id: number;
  name: string;
  image: string;
  priceCents: number;
  category: string;
};

export type SearchedProduct = Product[] | 'notFound' | undefined;

interface ProductContextType { products: Product[] };

interface SearchedProductsContextType {
  searchedProducts: SearchedProduct;
  setSearchedProducts: Dispatch<SetStateAction<SearchedProduct>>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined)
export const searchedProductsContext = createContext<SearchedProductsContextType | undefined>(undefined)

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('No Provider in Product')
  };

  return context;
};

export const useSearchedProduct = () => {
  const context = useContext(searchedProductsContext);

  if (context === undefined) {
    throw new Error('No Provider in SearchedProduct')
  };

  return context;
};