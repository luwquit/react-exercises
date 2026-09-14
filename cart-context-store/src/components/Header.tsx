import { ToggleTheme } from "./ToggleTheme";

export function Header() {
  return (
    <header className="text-main-light bg-bg-light shadow-md grid grid-cols-[60px_1fr_1fr_1fr_60px] items-center py-5 px-50 fixed z-50">
      <img src="./menu-icon-light.png" className="size-10 hover:opacity-70 transition-opacity cursor-pointer" />
      <h1 className="font-header text-4xl font-bold justify-self-start cursor-pointer">BigStore</h1>
      <nav className="justify-self-end">
        <ul className="text-xl font-semibold flex gap-x-10">
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
      <button className="bg-main-light text-xl font-semibold flex gap-x-3 justify-self-end btn">
        <img src="./cart-icon-light.png" className="size-7" />
        Cart
      </button>
      <ToggleTheme />
    </header>
  );
}