import React from "react";

function ItemDetail(item) {
  return (
    <div className="itemDetail__div">
      <div className="itemDetail__img-div">
        <img src={item.photo} alt="imagen producto"></img>
      </div>
      <div className="itemDetail__details">
        <h3 className="itemDetail__name">{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
