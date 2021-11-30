import React from "react";
import { Link } from "react-router-dom";
import "../ItemCount/ItemCount";
import "./Item.scss";

function Item({ id, name, photo, price }) {
  return (
    <div key={id} className="productCard">
      <div className="imgContainer">
        <img className="imgProduct" src={photo} alt={name}></img>
      </div>
      <p className="productName">{name}</p>
      <p className="price">${price}</p>
      <Link to={`/producto/${id}`}>
        <button className="seeMore">Ver Detalles</button>
      </Link>
    </div>
  );
}

export default Item;
