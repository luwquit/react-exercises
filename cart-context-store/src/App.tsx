import { useState } from "react"
import { ThemeContext, type Theme } from "./contexts/ThemeContext.tsx";
import {ToggleTheme} from "./components/ToggleTheme.tsx"
import { Header } from "./components/Header.tsx";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <>
      <Header />
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ToggleTheme />
      </ThemeContext.Provider>
    </>
    
  )
}

export default App
