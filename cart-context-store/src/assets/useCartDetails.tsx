import { useMemo } from "react";
import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";

export function useCartDetails() {
  const {cart} = useCart();
  const {products} = useProduct();

  return useMemo(
    () => 
      cart.products.flatMap((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        return product ? [{...cartItem, product}] : [];
      }), 
  [cart, products])
}