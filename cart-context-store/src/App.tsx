import { useEffect, useState } from "react"
import axios from "axios";
import { ThemeContext, type Theme } from "./contexts/ThemeContext.tsx";
import { ProductContext, type Product } from "./contexts/ProductContext.tsx";
import { Header } from "./components/Header.tsx";
import { SearchBar } from "./components/SearchBar.tsx";
import { ProductGrid } from "./components/ProductGrid.tsx";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [products, setProducts] = useState<Product[]>([]);

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
      <SearchBar />
      <ProductContext.Provider value={{products}}>
        <ProductGrid />
      </ProductContext.Provider>
    </>
    
  )
}

export default App
