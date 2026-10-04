import { Header } from "../components/Header";
import { CartItemsGrid } from "../components/CartItemsGrid";
import { PaymentSummary } from "../components/PaymentSummary";

export function CartPage() {
  return (
    <>
      <Header />
      <div className="pt-28 xl:px-50 lg:px-30 md:px-20 px-7 relative">
        <CartItemsGrid />
        <PaymentSummary />
      </div>
      
    </>
  );
}