export function CartItem() {
  return (
    <div className="rounded-xl grid grid-cols-2 max-w-150 text-text-light p-3 justify-items-center shadow-xl dark:shadow-2xl">
      
      <img src="test-product-img.jpg" className="w-60" />
      
      <div className="flex flex-col justify-between py-5">
        <div className="flex flex-col">
          <h2 className="font-semibold text-2xl text-main-light">Product Name</h2>
          <h3 className="font-bold text-2xl ">$4.99</h3>
          <div className="flex gap-x-2">
            <h4 className="font-medium text-xl">Quantity: 1</h4>
            <button className="cursor-pointer hover:opacity-80 transition-opacity">
              <img src="pencil-icon-light.png" className="w-5" />
            </button>
          </div>
        </div>
          
        <div className="">
          <button className="btn bg-bg-light text-main-light border font-medium">Remove from cart</button>
        </div>
      </div>
      
    </div>
  );
}