import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="px-50 pb-10 grid grid-cols-6 justify-center gap-y-10">
      <ProductCard />
    </div>
  )
}