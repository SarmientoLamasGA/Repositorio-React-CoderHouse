import React from "react";
import "./itemListContainer.css";
import ItemCount from "../itemCount/itemCount";

function ItemListContainer(props) {
  return (
    <div className="containerList">
      <h1 className="title">{props.titulo}</h1>
      <div>
        <ItemCount initial={1} stock={5} />
      </div>
    </div>
  );
}

export default ItemListContainer;
