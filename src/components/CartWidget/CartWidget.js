import React from "react";
import cartLogo from "../../images/cartLogo.svg";
import "./CartWidget.scss";

function CartWidget() {
  return (
    <li className="navItem" id="cartListItem">
      <div className="cartContainer">
        <img className="cartLogo" src={cartLogo} alt="Logo carrito" />
      </div>
    </li>
  );
}

export default CartWidget;
