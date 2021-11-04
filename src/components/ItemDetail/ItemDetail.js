import React from "react";
import "./ItemDetail.scss";
import ItemCount from "../itemCount/itemCount";

function ItemDetail(item) {
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
        <p className="itemDetailPrice">El Precio es de: {item.item.price}</p>
        <div className="productInteractive">
          <ItemCount initial={1} stock={5} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
