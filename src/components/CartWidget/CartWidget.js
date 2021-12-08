import cartLogo from "../../images/cartLogo.svg";
import { useCart } from "../../contexts/CartContext";
import "./CartWidget.scss";

function CartWidget() {
  const { cart, totalQuantity } = useCart();

  return (
    <>
      {cart.length ? (
        <>
          <li className="navItem" id="cartListItem">
            <div className="cartContainer">
              <p className="totalProd">{totalQuantity}</p>
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
