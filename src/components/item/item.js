import React from "react";
import "../itemCount/itemCount";
import "./item.css";
import ItemCount from "../itemCount/itemCount";

function Item(producto) {
  return (
    <div className="productCard">
      <p className="product">{producto.name}</p>
      <div className="imgContainer">
        <img alt="IMAGEN"></img>
        <p className="price">{producto.price}</p>
      </div>
      <div className="productInteractive">
        <ItemCount initial={1} stock={5} />
      </div>
    </div>
  );
}

export default Item;
