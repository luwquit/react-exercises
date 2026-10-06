import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { useCart, type CartItem } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

export function Quantity({cartItem}) {
  const {theme} = useTheme();
  const [editingId, setEditingId] = useState<number>(null);
  const [editInput, setEditInput] = useState<string>('');
  const {cartDispatch} = useCart();
  const isEditing = editingId === cartItem.id;

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEditInput(event.target.value);
  }

  const handleSave = (id: number) => {
    const value = Number(editInput);
    if (value === 0 || value > 999 || value < 0) {
      return;
    }
    cartDispatch({type: "editQuantity", payload: {id: id, newQuantity: value}});
    setEditingId(null);
  }

  const handleEdit = (cartItem: CartItem ) => {
    setEditingId(cartItem.id);
    setEditInput(String(cartItem.quantity))
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement> , id: number) => {
    if (event.key === 'Enter') {
      handleSave(id);
    } else if (event.key === "Escape") {
      setEditingId(null);
    }
  }

  return(
    <div className="flex gap-x-2 gap-y-1 min-h-8 items-center">
      <h4 className="font-medium text-sm xl:text-base 2xl:text-xl whitespace-nowrap">Quantity: 
        <span className="ml-1">{!isEditing 
          ? cartItem.quantity 
          : <input type="number" value={editInput} onChange={handleInput} min={1} max={999} 
            className="border border-main-light rounded-sm w-full min-w-0 max-w-10 2xl:w-14 lg:h-7 h-5 px-1 focus:outline-none"
            onKeyDown={(event) => {onKeyDown(event, cartItem.id)}} />
        }</span>
      </h4>
      {isEditing ? 
        <button className="shrink-0 lg:h-7 h-5 rounded-sm text-bg-light px-2 bg-main-light dark:bg-main-dark lg:text-sm text-xs" onClick={() => {handleSave(cartItem.id)}}>
          Save
        </button> 
        : 
        <button className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => (handleEdit(cartItem))}>
          <img src={theme === "light" ? "pencil-icon-light.png" : "pencil-icon-dark.png"} className="lg:w-5 w-4" />
        </button>
      }
    </div>
  )
}