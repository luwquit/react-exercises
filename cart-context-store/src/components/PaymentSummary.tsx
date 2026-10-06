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
    <section className="min-w-0 w-full text-main-light dark:text-main-dark flex flex-col md:sticky md:top-[50vh] md:-translate-y-1/2 md:order-2 order-1">
      <div className="w-full rounded-xl shadow-xl dark:shadow-2xl bg-bg-light dark:bg-bg-dark p-6 lg:px-10 lg:py-12">
        <h2 className="text-2xl xl:text-4xl font-bold text-center text-text-light dark:text-bg-light pb-6 lg:pb-10">Payment Summary</h2>
        <div className="text-base xl:text-xl font-medium space-y-2">
          <span className="flex justify-between gap-4">
            <h3>Subtotal (excluding VAT)</h3>
            <h4 className="font-bold shrink-0">{formatCurrency(subtotal)}</h4>
          </span>

          <span className="flex justify-between">
            <h3>VAT (20%)</h3>
            <h4 className="font-bold shrink-0">{formatCurrency(vat)}</h4>
          </span>

          <span className="flex justify-between">
            <h3>Delivery fee</h3>
            <h4 className="font-bold shrink-0">{formatCurrency(deliveryFeeCents)}</h4>
          </span>

          <span className="flex justify-between gap-4 text-xl xl:text-2xl font-bold text-text-light dark:text-bg-light mt-6 lg:mt-10">
            <h3>Total (incl. VAT & delivery)</h3>
            <h4 className="shrink-0">{formatCurrency(TOTAL)}</h4>
          </span>
          
        </div>
      </div>
    </section>
  );
}