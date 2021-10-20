import React, { useState } from "react";
import "./itemCount.css";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  const resta = () => {
    if (count > props.initial) setCount(count - 1);
    console.log(props.initial);
  };
  const suma = () => {
    if (count < props.stock) setCount(count + 1);
    console.log(props.stock);
  };

  return (
    <div className="counterDiv">
      <div className="button">
        <button className="subt" onClick={resta}>
          -
        </button>
      </div>
      <div className="number">
        <p>Cantidad de productos: {count} </p>
      </div>
      <div className="button">
        <button className="sum" onClick={suma}>
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
