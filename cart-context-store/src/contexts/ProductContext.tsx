import { createContext, type Dispatch, type SetStateAction } from "react";

export interface Product {
  id: number;
  name: string;
  image: string;
  priceCents: number;
  category: string;
};

interface ProductContextType { products: Product[] };

interface SearchedProductsContextType {
  searchedProducts: Product[];
  setSearchedProducts: Dispatch<SetStateAction<Product[]>>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined)

export const searchedProductsContext = createContext<SearchedProductsContextType | undefined>(undefined)