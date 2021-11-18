import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
/*import products from "../../products.json";*/
import { getDoc, doc } from "@firebase/firestore";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router";
import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setSelectedProduct(snapshot.data());
      }
    });
  }, [id]);

  console.log(selectedProduct);
  return (
    <div className="itemDetailContainer">
      <h1 className="itemDetailContainerTitle">Vista en detalle</h1>
      {selectedProduct ? (
        <ItemDetail item={selectedProduct} />
      ) : (
        "Cargando vista"
      )}
    </div>
  );
}

export default ItemDetailContainer;
