import { CartItem } from "./CartItem"

export function CartItemsGrid() {
  return (
    <section className="pb-10 grid gap-y-10 w-full max-w-full min-w-0 md:order-1 order-2 md:justify-items-start justify-items-center">
      <CartItem />
    </section>
  )
}