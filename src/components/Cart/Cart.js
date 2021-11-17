import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
  const { cart, removeItem, removeSingleItem, clear } = useCart();
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
                <th className="listContainer">Producto</th>
                <th className="listContainer">Precio x unidad</th>
                <th className="listContainer">N°</th>
                <th className="listContainer">Unidades</th>
                <th className="listContainer">Total producto</th>
                <th className="listContainer">Vaciar</th>
              </tr>
              {cart.map((prod) => (
                <td className="itemList">
                  <td className="listContainer prodNumber">{cart.index}</td>
                  <td className="listContainer prodName">{prod.name}</td>
                  <td className="listContainer prodPrice">{prod.price}</td>
                  <td className="listContainer prodQuantity">
                    <button onClick={() => removeSingleItem(prod)}>-</button>
                    <p>{prod.quantity}</p>
                  </td>
                  <td className="listContainer prodPriceTotal">
                    {prod.price * prod.quantity}
                  </td>
                  <td className="listContainer prodDelete">
                    <button onClick={() => removeItem(prod)}>Eliminar</button>
                  </td>
                </td>
              ))}
            </table>
          </div>
          <div className="priceSection">
            <div className="cartPrices">
              <p className="total">Precio total de: {totalPrice}</p>
              <button className="clearButton" onClick={clear}>
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>No hay productos en el carrito</p>
          <Link to={"/"}>
            <button>Ir al inicio</button>
          </Link>
        </>
      )}
    </section>
  );
}

export default Cart;
