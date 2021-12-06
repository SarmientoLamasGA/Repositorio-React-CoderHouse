import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useCart } from "../../contexts/CartContext";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  getDoc,
} from "@firebase/firestore";
import { getFirestore } from "../../firebase";
import "./CheckOut.scss";

function CheckOut() {
  const { cart, clear } = useCart();
  const [buyer, setBuyer] = useState({});
  const items = cart;
  const totalPrice = cart.reduce(
    (counter, item) => counter + item.price * item.quantity,
    0
  );
  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuyer({ name: "", surName: "", eMail: "", phone: "" });
    const clientOrder = {
      client: buyer,
      items: items,
      total: cart.reduce(
        (counter, item) => counter + item.price * item.quantity,
        0
      ),
      date: orderDate,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, clientOrder).then(({ id }) => {
      alert("Compra enviada");
      clear();
    });

    cart.forEach((prod) => {
      const prodRef = doc(db, "items", prod.id);
      try {
        const prodSel = getDoc(prodRef);
        console.log(prodSel, "prodsel");
      } catch (e) {
        alert("nada");
      }

      console.log(prod.stock + " stock", prod.quantity + " quantity");
      updateDoc(prodRef, { stock: prod.stock - prod.quantity });
    });
  };

  return (
    <section className="checkOut">
      <div className="formSection">
        <form onSubmit={handleSubmit}>
          <p>Ingrese sus datos</p>
          <label>
            Ingrese nombre
            <FormInput setBuyer={setBuyer} name="name" buyer={buyer} />
          </label>
          <label>
            Ingrese apellido
            <FormInput setBuyer={setBuyer} name="surname" buyer={buyer} />
          </label>
          <label>
            Ingrese eMail
            <FormInput setBuyer={setBuyer} name="email" buyer={buyer} />
          </label>
          <label>
            Ingrese Telefono
            <FormInput setBuyer={setBuyer} name="tel" buyer={buyer} />
          </label>
          <button type="submit">
            Confirmar compra <span id="check">✓ </span>
          </button>
        </form>
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
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
