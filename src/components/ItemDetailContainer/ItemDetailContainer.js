import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../products.json";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();

  const getProducto = (catalogo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (catalogo) {
          resolve(catalogo);
        } else {
          reject("Producto no encontrado");
        }
      }, 2000);
    });

  useEffect(() => {
    getProducto(products)
      .then((res) => setSelectedProduct(res.find((item) => item.id === id)))
      .catch((err) => console.log(err));
  }, [id]);

  console.log("objeto " + selectedProduct);
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
