import { ToggleTheme } from "./ToggleTheme";
import { useTheme } from "../contexts/ThemeContext";
import { useCart } from "../contexts/CartContext";
import { NavLink } from "react-router";

export function Header() {
  const { theme } = useTheme();
  const { cart } = useCart();
  return (
    <header className="text-main-light dark:text-bg-light bg-bg-light dark:bg-bg-dark shadow-md grid grid-cols-[auto_1fr_auto] items-center py-5 xl:px-50 lg:px-30 md:px-20 px-7 fixed z-50 w-full">
      <div className="flex gap-x-5 w-fit items-center">
        <img src={theme === "light" ? "./menu-icon-light.png" : "./menu-icon-dark.png"} className="xl:size-10 size-8 hover:opacity-70 transition-opacity cursor-pointer " />
        <NavLink to="/">
          <h1 className="font-header xl:text-4xl text-2xl font-bold justify-self-start cursor-pointer">BigStore</h1>
        </NavLink>
      </div>
      
      <nav className="w-fit justify-self-center items-center">
        <ul className="xl:text-xl lg:text-lg md:text-md text-sm font-semibold hidden md:flex xl:gap-x-10 gap-x-3 whitespace-nowrap">
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer relative inline-block group">
            <a>About Us 
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current
                scale-x-0 origin-right group-hover:scale-x-100 
                group-hover:origin-left transition-transform duration-500" />
              </a>
            </li>
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer relative inline-block group">
            <a>Services 
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current
                scale-x-0 origin-right group-hover:scale-x-100 
                group-hover:origin-left transition-transform duration-500" />
              </a>
            </li>
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer relative inline-block group">
            <a>Blog/News 
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current
                scale-x-0 origin-right group-hover:scale-x-100 
                group-hover:origin-left transition-transform duration-500" />
            </a>
          </li>
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer relative inline-block group">
            <a>Contact Us 
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current
                scale-x-0 origin-right group-hover:scale-x-100 
                group-hover:origin-left transition-transform duration-500" />
              </a>
            </li>
        </ul>
      </nav>

      <div className="flex gap-x-5 w-fit justify-self-end">
        <NavLink to="/cart">
          <button className="bg-main-light dark:bg-bg-light dark:text-bg-dark xl:text-xl lg:text-md font-semibold flex items-center gap-x-3 justify-self-end btn">
            <img src={theme === "light" ? "./cart-icon-light.png" : "cart-icon-dark.png"} className="xl:size-7 size-6" />
            {cart.totalQuantity}
          </button>
        </NavLink>
        <ToggleTheme />
      </div>
      
    </header>
  );
}