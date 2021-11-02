import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../products.json";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducto = (product) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve(product);
        } else {
          reject("Producto no encontrado");
        }
      }, 2000);
    });

  useEffect(() => {
    getProducto(productos)
      .then((res) => setSelectedProduct(res[0]))
      .catch((err) => console.log(err));
  }, []);

  console.log(selectedProduct);

  return (
    <div className="itemDetailContainer">
      <h1 className="itemDetailContainerTitle">Item Detail Container</h1>
      {selectedProduct ? (
        <ItemDetail item={selectedProduct} />
      ) : (
        "Cargando vista"
      )}
    </div>
  );
}

export default ItemDetailContainer;
