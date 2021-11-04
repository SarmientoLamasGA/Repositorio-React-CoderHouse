import React from "react";
import "./ItemDetail.css";
import ItemCount from "../itemCount/itemCount";

function ItemDetail(item) {
  console.log(item + "objeto detail");
  return (
    <div className="itemContainer">
      {console.log(item)}
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
