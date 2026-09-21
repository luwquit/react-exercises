


import { CartProvider } from "./contexts/CartProvider.tsx";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage.tsx";
import { CartPage } from "./pages/CartPage.tsx";
import { ProductProviders } from "./contexts/ProductProviders.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";

function App() {

  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <ProductProviders>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </ProductProviders>
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App
