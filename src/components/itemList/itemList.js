import React, { useEffect, useState } from "react";
import Item from "../item/item";
import "./itemList.css";
import products from "../../products.json";

function List() {
  const [productos, setProductos] = useState([]);

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

  return (
    <ul className="list">
      <li className="item">
        {productos.length
          ? productos.map((producto) => (
              <Item
                name={producto.name}
                photo={producto.photo}
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
