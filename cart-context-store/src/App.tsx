import { useEffect, useState } from "react"
import axios from "axios";
import { ThemeContext, type Theme } from "./contexts/ThemeContext.tsx";
import { ProductContext, searchedProductsContext, type Product } from "./contexts/ProductContext.tsx";
import { Header } from "./components/Header.tsx";
import { SearchBar } from "./components/SearchBar.tsx";
import { ProductGrid } from "./components/ProductGrid.tsx";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if(typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
      }
      return "light";
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error)
      };
    };

    fetchData();
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
      </ThemeContext.Provider>
      <ProductContext.Provider value={{products}}>
        <searchedProductsContext.Provider value={{searchedProducts, setSearchedProducts}}>
          <SearchBar />
          <ProductGrid />
        </searchedProductsContext.Provider>
      </ProductContext.Provider>
    </>
    
  )
}

export default App
