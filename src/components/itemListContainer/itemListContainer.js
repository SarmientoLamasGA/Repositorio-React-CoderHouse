import React from "react";
import "./itemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="containerList">
      <h1 className="title">{props.titulo}</h1>
    </div>
  );
}

export default ItemListContainer;
