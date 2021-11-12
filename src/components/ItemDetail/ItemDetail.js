import React, { useState } from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/CartContext";

function ItemDetail(item) {
  const [flag, setFlag] = useState(true);
  const [cartInner, setCartInner] = useState(0);
  const [searchFor, setSearchFor] = useState({});

  const { addItem, isInCart, removeItem } = useCart();

  const onAdd = (counter) => {
    console.log("se activo onAdd");
    setFlag(false);
    setCartInner(counter);
    //context
    addItem({ item: item.item, cantidad: counter });
  };

  const deleteItem = () => {
    removeItem(searchFor);
    searchItem();
  };

  const searchItem = (item) => {
    isInCart(item.item.id);
  };

  return (
    <div className="itemContainer">
      <div className="itemDetail-img-div">
        <img
          src={item.item.photo}
          alt="imagen producto"
          className="itemDetailImage"
        ></img>
      </div>
      <div className="itemDetailDescription">
        <h3 className="itemDetailName">{item.item.name}</h3>
        <p>{item.item.description}</p>
        <p className="itemDetailPrice">Valor por kilo: {item.item.price}</p>
        <div className="productInteractive">
          {flag ? (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          ) : (
            <>
              <p>Productos en el carrito: {cartInner}</p>
              <button>Continuar con la compra</button>
              <button onClick={deleteItem}>Borrar este objeto del carro</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
