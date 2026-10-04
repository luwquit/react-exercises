import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="pb-10 grid px-7 xl:px-50 md:px-20 w-full grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-4 justify-center gap-y-10">
      <ProductCard />
    </div>
  )
}