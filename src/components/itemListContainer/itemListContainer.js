import React from "react";
import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  return (
    <div className="containerList">
      <h1 className="title">{props.titulo}</h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
