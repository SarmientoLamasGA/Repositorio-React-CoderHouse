import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../products.json";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState(null);

  const getProducto = (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("Producto no encontrado");
        }
      }, 2000);
    });

  useEffect(() => {
    getProducto(productos)
      .then((res) => setSelectedItem(res[0]))
      .catch((err) => console.log(err));
  }, []);

  console.log(selectedItem);

  return (
    <div className="itemDetailContainer">
      <h1 className="itemDetailContainerTitle">Item Detail Container</h1>
      {selectedItem ? <ItemDetail item={selectedItem} /> : "Cargando vista"}
    </div>
  );
}

export default ItemDetailContainer;
