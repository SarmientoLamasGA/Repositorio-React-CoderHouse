import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (itemForCart) => {
    console.log("addItem");
    setCart(...[cart, itemForCart]);
    console.log(cart);
  };

  const removeItem = (item) => {
    //find
  };

  const clear = () => {
    //cart[]
  };

  const isInCart = () => {
    //find
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
