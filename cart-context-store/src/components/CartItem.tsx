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
          <div key={cartItem.id} className="rounded-xl grid grid-cols-2 items-center gap-x-5 w-full text-text-light dark:text-main-dark p-3 shadow-xl dark:shadow-2xl">
            <img src={cartItem.product.image} className="w-full" />
            <div className="flex flex-col justify-between py-5">
              <div className="flex flex-col">
                <h2 className="font-semibold 2xl:text-2xl xl:text-xl text-main-light dark:text-bg-light">{cartItem.product.name}</h2>
                <h3 className="font-bold 2xl:text-2xl xl:text-xl">{formatCurrency(cartItem.product.priceCents)}</h3>
                <Quantity cartItem={cartItem} />
              </div>
              <button className="btn mt-3 2xl:text-md xl:text-sm text-xs w-fit bg-bg-light dark:bg-bg-dark text-main-light dark:text-bg-light border font-medium"
                onClick={() => {handleRemoveItem(cartItem.id, cartItem.quantity)}}
              >
                Remove from cart
              </button>
            </div>
          </div>
        )
      })}
    </>
  );
}