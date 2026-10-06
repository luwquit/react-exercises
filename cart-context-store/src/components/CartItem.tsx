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
          <div key={cartItem.id} className="rounded-xl grid grid-cols-[clamp(64px,30%,200px)_minmax(0,1fr)] items-center gap-x-5 w-full max-w-130 text-text-light dark:text-main-dark p-3 shadow-xl dark:shadow-2xl">
            <img src={cartItem.product.image} className="w-full aspect-square object-cover" />
            <div className="flex flex-col justify-between min-w-0 gap-3 py-5">
              <div className="flex flex-col min-w-0">
                <h2 className="font-semibold text-base xl:text-xl 2xl:text-2xl wrap-break-word text-main-light dark:text-bg-light">{cartItem.product.name}</h2>
                <h3 className="font-bold text-base xl:text-xl 2xl:text-2xl">{formatCurrency(cartItem.product.priceCents)}</h3>
                <Quantity cartItem={cartItem} />
              </div>
              <button className="btn w-fit text-xs xl:text-sm bg-bg-light dark:bg-bg-dark text-main-light dark:text-bg-light border font-medium"
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