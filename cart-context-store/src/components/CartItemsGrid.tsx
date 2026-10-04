import { CartItem } from "./CartItem"

export function CartItemsGrid() {
  return (
    <section className="pb-10 grid gap-y-10 2xl:w-130 xl:w-100 w-90">
      <CartItem />
    </section>
  )
}