import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [foundItem, setFoundItem] = useState({});
  console.log(cart);

  const addItem = (itemForCart) => {
    //isInCart + if + else
    console.log("se activó addItem");
    setCart([...cart, itemForCart]);
    console.log(cart);
  };

  const isInCart = (item) => {
    //t/f
    console.log(item);
    setFoundItem(cart.find((item) => item.item.id === item));
    console.log(foundItem);
  };

  const removeItem = () => {
    //find + splice
  };

  const clear = () => {
    //cart[]
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
