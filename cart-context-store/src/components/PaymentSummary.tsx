export function PaymentSummary() {
  return (
    <section className="text-main-light max-w-150 max-h-80 px-10 rounded-xl shadow-xl dark:shadow-2xl flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center text-text-light pb-5">Payment Summary</h2>
      <div className="text-xl font-medium space-y-2">
        <span className="flex justify-between">
          <h3>Subtotal (excluding VAT)</h3>
          <h4 className="font-bold">$13.99</h4>
        </span>

        <span className="flex justify-between">
          <h3>VAT (20%)</h3>
          <h4 className="font-bold">$13.99</h4>
        </span>

        <span className="flex justify-between">
          <h3>Delivery fee</h3>
          <h4 className="font-bold">$13.99</h4>
        </span>

        <span className="flex justify-between text-2xl font-bold text-text-light pt-7">
          <h3>Total (incl. VAT & delivery)</h3>
          <h4>$13.99</h4>
        </span>
        
      </div>
    </section>
  );
}