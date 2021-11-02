import React from "react";
import "../itemCount/itemCount";
import "./item.css";

function Item({ id, name, photo, price }) {
  return (
    <div key={id} className="productCard">
      <p className="productName">{name}</p>
      <div className="imgContainer">
        <img className="imgProduct" src={photo} alt={name}></img>
      </div>
      <p className="price">${price}</p>
      <button className="seeMore">Ver Detalles</button>
    </div>
  );
}

export default Item;
