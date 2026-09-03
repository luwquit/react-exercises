import { useState, useEffect } from "react";

export function ToggleTheme () {
  const [theme, setTheme] = useState(() => {
    if(typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      const prefersDark = window.matchMedia("(prefers-color-theme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  })

  useEffect(() => {
    const root = window.document.documentElement;

    if(theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
 
  return (
    <button 
      className="cursor-pointer absolute right-10 top-5"
      onClick={toggleTheme}
    >
      <img src={theme === "light" ? 'pink-sun.png' : 'pink-moon.png'} className="w-9"/>
    </button>
  )
}