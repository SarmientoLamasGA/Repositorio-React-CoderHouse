import { Link } from "react-router-dom";
import "./EmptyCart.scss";

function EmptyCart() {
  return (
    <div className="empty">
      <Link to={`/`}>
        <p>
          No hay productos en el carrito. Presiona la imagen para volver al
          inicio
        </p>
        <img
          className="cartEmptyImg"
          src="https://www.zoro.com/static/assets/img/cart/empty-cart-efde5f704f.svg"
          alt="carro vacío"
        ></img>
      </Link>
    </div>
  );
}
export default EmptyCart;
