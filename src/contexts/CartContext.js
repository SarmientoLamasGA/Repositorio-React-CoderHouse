import { createContext, useContext, useState } from "react";

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
    if (itemToDiscount.quantity > 1) {
      item.quantity = item.quantity - 1;
      setCart((prev) => {
        return prev.map((currentItem) => {
          return currentItem.id === item.id ? item : currentItem;
        });
      });
    } else {
      alert("No se pueden quitar mas objetos");
    }
  };

  const addSingleItem = (item) => {
    const itemToAdd = cart.find((x) => x.id === item.id);
    if (itemToAdd.quantity < 5) {
      item.quantity = item.quantity + 1;
      setCart((prev) => {
        return prev.map((currentItem) => {
          return currentItem.id === item.id ? item : currentItem;
        });
      });
    } else {
      alert("No se pueden agregar mas objetos");
    }
  };

  const totalQuantity = cart.reduce(
    (counter, item) => counter + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (counter, item) => counter + item.price * item.quantity,
    0
  );

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
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
