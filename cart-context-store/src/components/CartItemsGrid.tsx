import { CartItem } from "./CartItem"

export function CartItemsGrid() {
  return (
    <section className="pb-10 grid gap-y-10">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </section>
  )
}