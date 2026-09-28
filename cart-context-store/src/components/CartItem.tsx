import { useCart } from "../contexts/CartContext";
import { Quantity } from "./Quantity";
import formatCurrency from "../assets/formatCurrency";
import { useCartDetails } from "../assets/useCartDetails";

export function CartItem() {
  const {cartDispatch} = useCart();
  const cartDetails = useCartDetails();

  const handleRemoveItem = (id: number, quantity: number) => {
    cartDispatch({type: "removeFromCart", payload: {id: id, quantity: quantity}})
  }
  
  return (
    <>
      {cartDetails && cartDetails.map((cartItem) => {
        return (
          <div key={cartItem.id} className="rounded-xl grid grid-cols-2 gap-x-5 max-w-130 text-text-light p-3 shadow-xl dark:shadow-2xl">
            <img src={cartItem.product.image} className="w-60" />
            <div className="flex flex-col justify-between py-5">
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl text-main-light">{cartItem.product.name}</h2>
                <h3 className="font-bold text-2xl">{formatCurrency(cartItem.product.priceCents)}</h3>
                <Quantity cartItem={cartItem} />
              </div>
              <div>
                <button className="btn bg-bg-light text-main-light border font-medium"
                  onClick={() => {handleRemoveItem(cartItem.id, cartItem.quantity)}}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}