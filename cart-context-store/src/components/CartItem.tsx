import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";
import { Quantity } from "./Quantity";
import formatCurrency from "../assets/formatCurrency";

export function CartItem() {
  const {products} = useProduct();
  const {cart, cartDispatch} = useCart();

  const handleRemoveItem = (id: number, quantity: number) => {
    cartDispatch({type: "removeFromCart", payload: {id: id, quantity: quantity}})
  }
  
  return (
    <>
      {cart.products.map(cartItem => {
        const matchingItem = products.find(product => product.id === cartItem.id);
        if (!matchingItem) return null;
        if (products.length === 0) {
          return <div className="text-3xl text-text-light font-bold text-center">Loading cart...</div>
        }
        return (
          <div key={cartItem.id} className="rounded-xl grid grid-cols-2 gap-x-5 max-w-130 text-text-light p-3 shadow-xl dark:shadow-2xl">
            <img src={matchingItem.image} className="w-60" />
            <div className="flex flex-col justify-between py-5">
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl text-main-light">{matchingItem.name}</h2>
                <h3 className="font-bold text-2xl">{formatCurrency(matchingItem.priceCents)}</h3>
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