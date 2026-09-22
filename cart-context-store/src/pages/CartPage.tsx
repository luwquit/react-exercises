import { Header } from "../components/Header";
import { CartItemsGrid } from "../components/CartItemsGrid";
import { PaymentSummary } from "../components/PaymentSummary";

export function CartPage() {
  return (
    <>
      <Header />
      <div className="pt-28 px-50 grid grid-cols-2">
        <CartItemsGrid />
        <PaymentSummary />
      </div>
      
    </>
  );
}