import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { getFirestore } from "../../firebase";
import "./ItemList.scss";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  /*const getCatalogo = (catalogo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (catalogo) {
          resolve(catalogo);
        } else {
          reject("Catalogo no encontrado");
        }
      }, 1000);
    });*/

  useEffect(() => {
    /*getCatalogo(products)
      .then((res) => {
        category
          ? setProductos(res.filter((prod) => prod.category === category))
          : setProductos(products);
      })
      .then(setProductos([]))
      .catch((err) => console.log(err));*/

    const db = getFirestore();
    let q = query(collection(db, "items"));

    if (!category) {
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    } else {
      q = query(collection(db, "items"), where("category", "==", category));
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [category]);

  return (
    <div className="list">
      {productos.length
        ? productos.map((producto) => (
            <Item
              key={producto.id}
              id={producto.id}
              name={producto.name}
              photo={producto.photo}
              price={producto.price}
            />
          ))
        : "Cargando producto"}
    </div>
  );
}

export default ItemList;
