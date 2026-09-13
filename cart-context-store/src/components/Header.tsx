import { ToggleTheme } from "./ToggleTheme";

export function Header() {
  return (
    <header className="text-main-light bg-bg-light shadow-md grid grid-cols-[60px_1fr_1fr_1fr_60px] items-center py-5 px-50 fixed z-50">
      <img src="./menu-icon-light.png" className="size-10 hover:opacity-70 transition-opacity cursor-pointer" />
      <h1 className="font-header text-4xl font-bold justify-self-start cursor-pointer">BigStore</h1>
      <nav className="justify-self-end">
        <ul className="text-xl font-semibold flex gap-x-10">
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer"><a>About Us</a></li>
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer"><a>Services</a></li>
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer"><a>Blog/News</a></li>
          <li className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer"><a>Contact Us</a></li>
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