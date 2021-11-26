import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useCart } from "../../contexts/CartContext";
import { collection, addDoc } from "@firebase/firestore";
import { getFirebase } from "../../firebase";

function CheckOut() {
  const { cart } = useCart();
  const [buyer, setBuyer] = useState({});

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const db = getFirebase;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newOrder = {
        buyer,
        cart,
        totalPrice: cart.reduce(
          (counter, item) => counter + item.price * item.quantity,
          0
        ),
        date: orderDate,
      };
      const results = await addDoc(collection(db, orders)) ;
      setBuyer({
        name: ``,
        surName: ``,
        eMail: ``,
        phone: ``,
      });
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>Formulario</form>
      <label>Ingrese nombre</label>
      <FormInput setBuyer={setBuyer} name="name" buyer={buyer} />
      <label>Ingrese apellido</label>
      <FormInput setBuyer={setBuyer} name="surname" buyer={buyer} />
      <label>Ingrese eMail</label>
      <FormInput setBuyer={setBuyer} name="email" buyer={buyer} />
      <label>Ingrese Telefono</label>
      <FormInput setBuyer={setBuyer} name="tel" buyer={buyer} />
      <button type="submit">Confirmar compra</button>
    </section>
  );
}

export default CheckOut;
