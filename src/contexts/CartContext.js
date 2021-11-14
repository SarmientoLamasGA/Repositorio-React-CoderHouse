import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (itemForCart) => {
    let id = itemForCart.id;
    let isInCart = cart.find((itemForCart) => itemForCart.id === id);

    if (isInCart === undefined) {
      setCart([...cart, itemForCart]);
    } else {
      alert("No se aceptan duplicados");
    }
  };

  const removeItem = (itemToRemove) => {
    let id = itemToRemove.id;
    let isInCart = cart.find((itemToRemove) => itemToRemove.id === id);

    if (isInCart !== undefined) {
      setCart(cart.filter((isInCart) => isInCart.id !== id));
    } else {
      alert("No existe el producto");
    }
  };

  const clear = () => {
    setCart([]);
  };

  useEffect(() => console.log(cart));

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
