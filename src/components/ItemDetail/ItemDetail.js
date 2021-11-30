import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/CartContext";
import "./ItemDetail.scss";

function ItemDetail({ item }) {
  const [flag, setFlag] = useState(true);
  const [cartInner, setCartInner] = useState(0);

  const { addItem } = useCart();

  const onAdd = (counter) => {
    console.log("se activo onAdd");
    setFlag(false);
    setCartInner(counter);
    addItem({
      name: item.name,
      quantity: counter,
      price: item.price,
      photo: item.photo,
      id: item.id,
    });
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
              <Link to={"/Cart"} key={item.id} item={item}>
                <button className="buttonToCart">Ir al carro de compras</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
