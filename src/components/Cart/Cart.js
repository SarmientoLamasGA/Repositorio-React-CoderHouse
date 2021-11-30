import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

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
            <table className="cartList">
              <tr className="itemList">
                <th className="listContainer prodName">Nombre</th>
                <th className="listContainer">Precio x unida</th>
                <th className="listContainer prodQuantity">Unidades</th>
                <th className="listContainer">Total producto</th>
                <th className="listContainer clearCart">Vaciar</th>
              </tr>
              {cart.map((prod) => (
                <td className="itemList" key={prod.id}>
                  <th className="listContainer prodName">{prod.name}</th>
                  <th className="listContainer prodPrice">{prod.price}</th>
                  <th className="listContainer prodQuantity">
                    <button
                      className="decrease"
                      onClick={() => removeSingleItem(prod)}
                    >
                      -
                    </button>
                    <p>{prod.quantity}</p>
                    <button className="add" onClick={() => addSingleItem(prod)}>
                      +
                    </button>
                  </th>
                  <th className="listContainer prodPriceTotal">
                    {prod.price * prod.quantity}
                  </th>
                  <th className="listContainer prodDelete">
                    <button onClick={() => removeItem(prod)}>Eliminar</button>
                  </th>
                </td>
              ))}
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
                <span className="cartPricesLine">
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
                    <button className="checkOut">Continuar compra</button>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>No hay productos en el carrito</p>
          <Link to={`/`}>
            <button>Ir al inicio</button>
          </Link>
        </>
      )}
    </section>
  );
}

export default Cart;
