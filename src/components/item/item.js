import React from "react";
import "../itemCount/itemCount";
import "./item.css";
import ItemCount from "../itemCount/itemCount";

function Item(producto) {
  return (
    <div key={producto.id} className="productCard">
      <p className="productName">{producto.name}</p>
      <div className="imgContainer">
        <img
          className="imgProduct"
          src={producto.photo}
          alt={producto.name}
        ></img>
      </div>
      <p className="price">{producto.price}</p>
      <div className="productInteractive">
        <ItemCount initial={1} stock={5} />
      </div>
    </div>
  );
}

export default Item;
