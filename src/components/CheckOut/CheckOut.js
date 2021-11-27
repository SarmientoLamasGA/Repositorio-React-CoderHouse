import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useCart } from "../../contexts/CartContext";
import { collection, addDoc } from "@firebase/firestore";
import { getFirestore } from "../../firebase";

function CheckOut() {
  const { cart, clear } = useCart();
  const [buyer, setBuyer] = useState({
    name: "",
    surName: "",
    eMail: "",
    phone: "",
  });
  const items = cart;

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      console.log(id);
      alert("Compra enviada");
      clear();
    });
    console.log(
      "Compra usuario" + buyer.name + " " + buyer.surName + " :",
      items,
      "Total de: " + clientOrder.total
    );
    console.log("submit");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <p>Formulario</p>
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
        <button type="submit">Confirmar compra</button>
      </form>
    </section>
  );
}

export default CheckOut;
