import React, { useEffect, useState } from "react";
import Item from "../item/item";
import "./itemList.css";
import products from "../../products.json";

function ItemList() {
  const [productos, setProductos] = useState([]);

  const getCatalogo = (catalogo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (catalogo) {
          resolve(catalogo);
          console.log(products);
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
    <div className="list">
      {productos.length
        ? productos.map((producto) => (
            <Item
              key={producto.id}
              name={producto.name}
              photo={producto.photo}
              description={producto.description}
              price={producto.price}
            />
          ))
        : "Cargando producto"}
    </div>
  );
}

export default ItemList;
