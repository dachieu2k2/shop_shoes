import React, { createContext, useEffect, useReducer } from "react";
import { CartActionKind, CartStateType, CartType } from "../Models/CartModel";
import { cartReducer } from "../Reducers/CartReducer";
import axios from "axios";
import { apiUrl, config } from "./constants";
import { ProductType } from "../Models/ProductModel";

type CartContextType = {
  cartState: CartStateType;
  getProducts: () => Promise<void>;
  setProducts: (product: ProductType) => void;
  addProducts: (product: ProductType) => void;
};
const initialCart: CartStateType = {
  data: [],
  user: null,
  totalMoney: 0,
};
const initialContextState: CartContextType = {
  cartState: initialCart,
  getProducts: () => Promise.resolve(void 0), // then here it can be () => null or () => {}
  setProducts: () => {},
  addProducts: () => {},
};

export const CartContext = createContext<CartContextType>(initialContextState);

interface Props {
  children: React.ReactNode;
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {};
  const setProducts = (product: ProductType) => {
    // dispatch(CartActionKind.SET_PRODUCT)
  };
  const addProducts = (product: ProductType) => {
    dispatch({ type: CartActionKind.ADD_PRODUCT, payload: product });
  };

  const dataCartContext = {
    cartState,
    getProducts,
    setProducts,
    addProducts,
  };
  return (
    <CartContext.Provider value={dataCartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
