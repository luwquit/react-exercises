import { type ReactNode, useMemo, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext.tsx";

export function ThemeProvider({children} : {children: ReactNode}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if(typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
      }
      return "light";
  });
  const value = useMemo(() => ({theme, setTheme}), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}