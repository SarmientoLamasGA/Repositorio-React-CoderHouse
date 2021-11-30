import React from "react";
import { Link } from "react-router-dom";
import "../ItemCount/ItemCount";
import "./Item.scss";

function Item({ id, name, photo, price }) {
  return (
    <div key={id} className="productCard">
      <Link className="cardLink" to={`/producto/${id}`}>
        <div className="imgContainer">
          <img className="imgProduct" src={photo} alt={name}></img>
        </div>
        <p className="productName">{name}</p>
        <p className="price">${price}</p>
        <p className="seeMore">Click para ver Detalles</p>
      </Link>
    </div>
  );
}

export default Item;
