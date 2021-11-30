import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [handleItem, sethandleItem] = useState();

  const addItem = (itemForCart) => {
    let id = itemForCart.id;
    let isInCart = cart.find((itemForCart) => itemForCart.id === id);

    if (isInCart === undefined) {
      setCart([...cart, itemForCart]);
    } else {
      alert("No se aceptan duplicados");
    }
  };

  const removeItem = (item) => {
    let isInCart = cart.find((x) => x.id === item.id);
    if (isInCart !== undefined) {
      setCart(cart.filter((isInCart) => isInCart.id !== item.id));
    } else {
      alert("No existe el producto");
    }
  };

  const removeSingleItem = (item) => {
    const itemToDiscount = cart.find((x) => x.id === item.id);
    sethandleItem(item);
    if (itemToDiscount.quantity > 1) {
      item.quantity = item.quantity - 1;
      sethandleItem(item);
      setCart([...cart]);
    } else {
      alert("No se pueden quitar mas objetos");
    }
  };

  const addSingleItem = (item) => {
    const itemToAdd = cart.find((x) => x.id === item.id);
    sethandleItem(item);
    if (itemToAdd.quantity < 5) {
      item.quantity = item.quantity + 1;
      sethandleItem(item);
      setCart([...cart]);
    } else {
      alert("No se pueden agregar mas objetos");
    }
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        removeSingleItem,
        addSingleItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
