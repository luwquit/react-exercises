import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { ProductGrid } from "../components/ProductGrid";

export function HomePage() {
  return (
    <>
      <Header />
      <SearchBar />
      <ProductGrid />
    </>
  )
}