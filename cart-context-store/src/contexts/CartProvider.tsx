import { useReducer, useEffect, useMemo, type ReactNode } from "react";
import { CartContext, cartReducer, initialCart } from "./CartContext.tsx";

export function CartProvider({children} : {children: ReactNode}) {
  const [cart, cartDispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart')) || initialCart);
  const value = useMemo(() => ({cart, cartDispatch}), [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}