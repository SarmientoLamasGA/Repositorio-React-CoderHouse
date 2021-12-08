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
import EmptyCart from "../EmptyCart/EmptyCart";

function CheckOut() {
  const { cart, clear, totalPrice } = useCart();
  const [buyer, setBuyer] = useState({});
  const items = cart;
  const date = new Date();
  const orderDate = date.toLocaleTimeString();

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

    console.log(buyer, "buyer");
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
        alert("error");
      }

      updateDoc(prodRef, { stock: prod.stock - prod.quantity });
    });
  };

  return (
    <section className="checkOut">
      {cart.length ? (
        <>
          <div className="formSection">
            <form onSubmit={handleSubmit}>
              <h1 className="formTitle">Ingrese sus datos</h1>
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
                <FormInput
                  setBuyer={setBuyer}
                  name="tel"
                  buyer={buyer}
                  length={"11"}
                />
              </label>
              <button
                type="submit"
                disabled={
                  !(buyer.name && buyer.surName && buyer.email && buyer.phone)
                }
              >
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
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default CheckOut;
