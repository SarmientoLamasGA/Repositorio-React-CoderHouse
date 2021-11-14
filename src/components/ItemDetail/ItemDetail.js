import React, { useState } from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/CartContext";

function ItemDetail({ item }) {
  const [flag, setFlag] = useState(true);
  const [cartInner, setCartInner] = useState(0);

  const { addItem, removeItem, clear } = useCart();

  const onAdd = (counter) => {
    console.log("se activo onAdd");
    setFlag(false);
    setCartInner(counter);
    //context
    addItem({
      name: item.name,
      quantity: counter,
      price: item.price,
      photo: item.photo,
      id: item.id,
    });
  };

  const deleteItem = () => {
    removeItem({
      name: item.name,
      price: item.price,
      photo: item.photo,
      id: item.id,
    });
  };

  const clearCart = () => {
    clear();
  };

  return (
    <div className="itemContainer">
      <div className="itemDetail-img-div">
        <img
          src={item.photo}
          alt="imagen producto"
          className="itemDetailImage"
        ></img>
      </div>
      <div className="itemDetailDescription">
        <h3 className="itemDetailName">{item.name}</h3>
        <p>{item.description}</p>
        <p className="itemDetailPrice">Valor por kilo: {item.price}</p>
        <div className="productInteractive">
          {flag ? (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          ) : (
            <>
              <p>Productos en el carrito: {cartInner}</p>
              <button>Ir al carro de compras</button>
              <button onClick={deleteItem}>Borrar este objeto del carro</button>
              <button onClick={clearCart}>Vaciar carrito</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
