import formatCurrency from "../assets/formatCurrency";
import { useCartDetails } from "../assets/useCartDetails";

export function PaymentSummary() {
  const cartDetails = useCartDetails();
  const taxPercent = 20;
  const deliveryFeeCents = 425;

  const calculateSum = () => {
    let sum = 0;
    cartDetails.map((cartItem) => {
      sum += (cartItem.product.priceCents * cartItem.quantity)
    });
    return sum;
  };

  const subtotal = calculateSum();
  const vat = (subtotal * taxPercent) / 100;
  const TOTAL = subtotal + vat + deliveryFeeCents;
  
  return (
    <section className="text-main-light w-200 px-20 py-15 rounded-xl shadow-xl dark:shadow-2xl flex flex-col fixed top-1/2 right-50 -translate-y-1/2">
      <h2 className="text-4xl font-bold text-center text-text-light pb-10">Payment Summary</h2>
      <div className="text-xl font-medium space-y-2">
        <span className="flex justify-between">
          <h3>Subtotal (excluding VAT)</h3>
          <h4 className="font-bold">{formatCurrency(subtotal)}</h4>
        </span>

        <span className="flex justify-between">
          <h3>VAT (20%)</h3>
          <h4 className="font-bold">{formatCurrency(vat)}</h4>
        </span>

        <span className="flex justify-between">
          <h3>Delivery fee</h3>
          <h4 className="font-bold">{formatCurrency(deliveryFeeCents)}</h4>
        </span>

        <span className="flex justify-between text-2xl font-bold text-text-light mt-10">
          <h3>Total (incl. VAT & delivery)</h3>
          <h4>{formatCurrency(TOTAL)}</h4>
        </span>
        
      </div>
    </section>
  );
}