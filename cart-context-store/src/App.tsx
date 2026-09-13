import { useState } from "react"
import { ThemeContext, type Theme } from "./contexts/ThemeContext.tsx";
import { Header } from "./components/Header.tsx";
import { SearchBar } from "./components/SearchBar.tsx";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
      </ThemeContext.Provider>
      <SearchBar />
    </>
    
  )
}

export default App
