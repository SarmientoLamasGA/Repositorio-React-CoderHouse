import React from "react";
import { Link } from "react-router-dom";
import "../itemCount/itemCount";
import "./item.scss";

function Item({ id, name, photo, price }) {
  return (
    <div key={id} className="productCard">
      <p className="productName">{name}</p>
      <div className="imgContainer">
        <img className="imgProduct" src={photo} alt={name}></img>
      </div>
      <p className="price">${price}</p>
      <Link to={`/producto/${id}`}>
        <button className="seeMore">Ver Detalles</button>
      </Link>
    </div>
  );
}

export default Item;
