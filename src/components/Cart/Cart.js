import { useCart } from "../../contexts/CartContext";

function Cart() {
  const { cart, removeItem, removeSingleItem, clear } = useCart();
  const totalPrice = cart.reduce((counter, item) => counter + item.price, 0);

  return (
    <section className="cartSection">
      <h3>Carrito de compras</h3>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((prod) => (
              <li>
                <p className="prodNumber">{cart.lenght}</p>
                <p className="prodName">{prod.name}</p>
                <p className="prodPrice">{prod.price}</p>
                <div>
                  <p>{prod.quantity}</p>
                  <button onClick={() => removeSingleItem(prod)}>-</button>
                </div>
                <p className="prodPriceTotal">{prod.price * prod.quantity}</p>
                <div className="prodDelete">
                  <button onClick={() => removeItem(prod)}>
                    Borrar producto
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cartPrices">
            <div>
              <p>Precio total de: {totalPrice}</p>
              <button onClick={clear}>Vaciar carrito</button>
            </div>
          </div>
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </section>
  );
}

export default Cart;
