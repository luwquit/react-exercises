import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function ToggleTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
      <button onClick={handleClick} className="justify-self-end cursor-pointer hover:opacity-80 transition-opacity">
        <img src="light-theme-icon.png" className="size-10" />
      </button>
    </>
    
  );
}