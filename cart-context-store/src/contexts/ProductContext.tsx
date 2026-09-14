import { createContext } from "react";

export interface Product {
  id: number;
  name: string;
  image: string;
  priceCents: number;
  category: string;
};

interface ProductContextType { products: Product[] };

export const ProductContext = createContext<ProductContextType | undefined>(undefined)