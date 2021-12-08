import React, { useState } from "react";
import "./ItemCount.scss";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  const resta = () => {
    if (count > props.initial) setCount(count - 1);
  };
  const suma = () => {
    if (count < props.stock) setCount(count + 1);
  };

  const triggerButton = () => {
    props.onAdd(count);
  };

  return (
    <div className="counterDiv">
      <div className="interact">
        <div className="buttonDiv">
          <button className="subt" onClick={resta}>
            -
          </button>
        </div>
        <div className="number">
          <p>Cantidad de productos: {count} </p>
          <p>Stock: {props.stock}</p>
        </div>
        <div className="buttonDiv">
          <button className="sum" onClick={suma}>
            +
          </button>
        </div>
      </div>
      <div className="addContainer">
        <button
          className="addToCart"
          disabled={props.stock < 1}
          onClick={triggerButton}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
