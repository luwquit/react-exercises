import { createContext, type Dispatch } from "react";

interface AddToCartAction {
  type: 'addToCart';
  payload: {
    id: number;
    quantity: number;
  }
}

interface RemoveFromCartAction {
  type: 'removeFromCart';
  payload: {
    id: number;
    quantity: number;
  }
}

interface CartContextType {
  cart: initialStateType;
  cartDispatch: Dispatch<AddToCartAction | RemoveFromCartAction>
};

interface CartItem {
  id: number;
  quantity: number;
};

type initialStateType = {
  products: CartItem[];
  totalQuantity: number;
}

export const initialCart = {
  products: [],
  totalQuantity: 0
}

export const CartContext = createContext<CartContextType>({cart: initialCart, cartDispatch: () => null});

export const cartReducer = (cart: initialStateType, action: AddToCartAction | RemoveFromCartAction) => {
  const {type, payload} = action;
  const {products, totalQuantity} = cart;

  switch (type) {
    case 'addToCart': {
      const matchingProduct = products.find(product => product.id === payload.id);
      return {
        products: matchingProduct 
          ? products.map(product => 
            product.id === payload.id ? {...product, quantity: product.quantity + 1} : product
          ) : [...products, {id: payload.id, quantity: 1}],
        totalQuantity: totalQuantity + 1
      }
    }

    case 'removeFromCart':
      return {
        products: [
          ...products.filter(product => product.id !== payload.id)
        ],
        totalQuantity: totalQuantity - payload.quantity
      }
      
    default:
      return cart;
  }
};