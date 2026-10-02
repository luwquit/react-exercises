import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="pb-10 grid px-50 grid-cols-6 justify-center gap-y-10">
      <ProductCard />
    </div>
  )
}