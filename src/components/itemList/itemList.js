import React, { useEffect, useState } from "react";
import Item from "../item/item";
import "./itemList.css";
import products from "../../products.json";

function List() {
  const [productos, setProductos] = useState([]);
  /*const a = new Promise((resolve, reject) => {
    const b = true;
    setTimeout(() => {
      if (b) {
        resolve("funciona");
      }
    }, 1000);
  });

  a.then((res) => console.log(res)).catch((err) => console.log(err));*/

  const getCatalogo = (catalogo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (catalogo) {
          resolve(catalogo);
        } else {
          reject("Catalogo no encontrado");
        }
      }, 500);
    });

  useEffect(() => {
    getCatalogo(products)
      .then((res) => setProductos(res))
      .catch((err) => console.log(err));
  }, []);

  /*
  const getCatalogo = (catalogo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (catalogo) {
          resolve(catalogo, console.log("Catalogo encontrado"));
        } else {
          reject("Catalogo faltante");
        }
      }, 5000);
    });

  useEffect(() => {
    getCatalogo(products)
      .then((resolve) => setProductos(resolve))
      .catch((error) => console.log(error));
  }, []);*/

  return (
    <ul className="list">
      <li className="item">
        {productos.length
          ? productos.map((producto) => (
              <Item
                name={producto.name}
                price={producto.price}
                key={producto.id}
              />
            ))
          : "Cargando producto"}
      </li>
    </ul>
  );
}

export default List;
