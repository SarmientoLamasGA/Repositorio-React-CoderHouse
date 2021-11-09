import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import products from "../../products.json";
import { useParams } from "react-router";

function ItemList() {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  const getCatalogo = (catalogo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (catalogo) {
          resolve(catalogo);
        } else {
          reject("Catalogo no encontrado");
        }
      }, 1000);
    });

  useEffect(() => {
    getCatalogo(products)
      .then((res) => {
        category
          ? setProductos(res.filter((prod) => prod.category === category))
          : setProductos(products);
      })
      .catch((err) => console.log(err));
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
