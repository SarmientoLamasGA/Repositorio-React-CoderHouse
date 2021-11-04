import React from "react";
import "./itemListContainer.scss";
import ItemList from "../itemList/itemList";

function ItemListContainer(props) {
  return (
    <div className="containerList">
      <h1 className="title">{props.titulo}</h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
