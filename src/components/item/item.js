import React from "react";
import "../itemCount/itemCount";
import "./item.css";
import ItemCount from "../itemCount/itemCount";

function Item({ id, name, photo, price, description }) {
  return (
    <div key={id} className="productCard">
      <p className="productName">{name}</p>
      <div className="imgContainer">
        <img className="imgProduct" src={photo} alt={name}></img>
      </div>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <div className="productInteractive">
        <ItemCount initial={1} stock={5} />
      </div>
    </div>
  );
}

export default Item;
