import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../products.json";
import "./ItemDetailContainer.css";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  console.log(id);

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
    getProducto(products)
      .then((res) =>
        setSelectedProduct(res.find((products) => products.id === id))
      )
      .catch((err) => console.log(err));
  }, [id]);

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
