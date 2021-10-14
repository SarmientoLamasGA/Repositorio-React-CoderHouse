import React from "react";
import "./cartWidget.css";

function CartWidget() {
  return (
    <li className="navItem">
      <div className="cartContainer">
        <img
          className="cartLogo"
          src="../../images/cartLogo.svg"
          alt="Logo carrito"
        />
      </div>
    </li>
  );
}

export default CartWidget;
