import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = () => {
    alert("click");
    //setCart([]);
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
    <CartContext.Provider value={(cart, addItem, removeItem, clear, isInCart)}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
