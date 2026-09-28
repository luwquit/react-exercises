import { createContext, useContext, type Dispatch } from "react";

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

interface EditQuantityAction {
  type: 'editQuantity';
  payload: {
    id: number;
    newQuantity: number;
  }
}

interface CartContextType {
  cart: initialStateType;
  cartDispatch: Dispatch<AddToCartAction | RemoveFromCartAction | EditQuantityAction>
};

export interface CartItem {
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

export const cartReducer = (cart: initialStateType, action: AddToCartAction | RemoveFromCartAction | EditQuantityAction) => {
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

    case 'editQuantity': {
      let allQuantity = 0;

      const newProducts = products.map(product => {
        if (product.id === payload.id) {
          return {...product, quantity: payload.newQuantity}
        } else {
          return product
        }
      });
      newProducts.map(product => allQuantity += product.quantity)

      return {
        products: newProducts,
        totalQuantity: allQuantity
      }
    }
      
    default:
      return cart;
  }
};

export const CartContext = createContext<CartContextType>({cart: initialCart, cartDispatch: () => null});

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('No Provider in Cart')
  }

  return context;
}