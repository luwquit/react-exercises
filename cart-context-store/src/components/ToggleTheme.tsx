import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function ToggleTheme() {
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [theme])

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <button onClick={handleClick} className="justify-self-end cursor-pointer hover:opacity-80 transition-opacity">
        <img src={theme === "light" ? "light-theme-icon.png" : "dark-theme-icon.png"} className="xl:size-10 size-8" />
      </button>
    </>
    
  );
}