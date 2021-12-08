import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";
import EmptyCart from "../EmptyCart/EmptyCart";

function Cart() {
  const { cart, removeItem, removeSingleItem, addSingleItem, clear } =
    useCart();
  const totalPrice = cart.reduce(
    (counter, item) => counter + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h3 className="cartTitle">Carrito de compras</h3>
      {cart.length ? (
        <div className="cartSection">
          <div className="listSection">
            <table className="table">
              <tbody className="cartList">
                <tr className="itemList">
                  <th className="listContainer prodName">Nombre</th>
                  <th className="listContainer">Precio x unida</th>
                  <th className="listContainer prodQuantity">Unidades</th>
                  <th className="listContainer">Total producto</th>
                  <th className="listContainer clearCart">Vaciar</th>
                </tr>
                {cart.map((prod) => (
                  <tr className="itemList" key={prod.id}>
                    <td className="listContainer prodName">{prod.name}</td>
                    <td className="listContainer prodPrice">{prod.price}</td>
                    <td className="listContainer prodQuantity">
                      <button
                        className="decrease"
                        onClick={() => removeSingleItem(prod)}
                      >
                        -
                      </button>
                      <p>{prod.quantity}</p>
                      <button
                        className="add"
                        onClick={() => addSingleItem(prod)}
                      >
                        +
                      </button>
                    </td>
                    <td className="listContainer prodPriceTotal">
                      {prod.price * prod.quantity}
                    </td>
                    <td className="listContainer prodDelete">
                      <button onClick={() => removeItem(prod)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="priceSection">
            <div className="cartPrices">
              <span className="cartPricesLine">
                <div className="cartPricesName">
                  <p>Lista de compras</p>
                </div>
              </span>
              {cart.map((prod) => (
                <span key={prod.id} className="cartPricesLine">
                  <div className="cartPricesName">
                    <p>{prod.name}</p>
                  </div>
                  <div className="cartPricesPrice">
                    <p>{prod.price}</p>
                  </div>
                </span>
              ))}
              <span className="cartPricesLastLine">
                <p className="total">Precio total de:</p>
                <p className="number">{totalPrice}</p>
              </span>
              <span className="cartLineDashed">
                <div className="divLeft">
                  <p>Me arrepiento:</p>
                  <Link to={`/`}>
                    <button className="clearButton" onClick={clear}>
                      Vaciar carrito
                    </button>
                  </Link>
                </div>
                <div>
                  <p>Estoy seguro:</p>
                  <Link to={`/checkOut`}>
                    <button className="checkOutButton">Continuar compra</button>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default Cart;
