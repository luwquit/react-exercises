import { useEffect } from "react";

export function ProductCard() {
  useEffect(() => {
    const fetchData = () => {
      
    }
  }, [])

  return (
    <div className="shadow-xl w-55 pb-4 justify-self-center">
      <div>
        <img src="test-product-img.jpg" className="size-55 object-cover" />
      </div>
      <div className="px-3 py-2  text-text-light">
        <h3 className="text-xl">Socks with pair of something</h3>
        <h3 className="text-2xl font-bold pt-1">$3.99</h3>
      </div>
      <button className="btn block bg-main-light m-auto">Add to Cart</button>
    </div>
  );
}