import React from "react";
import cartLogo from "../../images/cartLogo.svg";
import { useCart } from "../../contexts/CartContext";
import "./CartWidget.scss";

function CartWidget() {
  const { cart } = useCart();
  const productosTotal = cart.reduce(
    (counter, item) => counter + item.quantity,
    0
  );
  return (
    <>
      {cart.length ? (
        <>
          <li className="navItem" id="cartListItem">
            <div className="cartContainer">
              <p className="totalProd">{productosTotal}</p>
              <img className="cartLogo" src={cartLogo} alt="Logo carrito" />
            </div>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CartWidget;
