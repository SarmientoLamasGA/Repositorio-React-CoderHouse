import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../products.json";

function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState([]);

  const getProducto = (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("Producto no encontrado");
        }
      }, 500);
    });

  useEffect(() => {
    getProducto(productos)
      .then((res) => setSelectedItem(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="itemDetailContainer">
      <h1>Item Detail Container</h1>
      <ItemDetail item={selectedItem} />
    </div>
  );
}

export default ItemDetailContainer;
