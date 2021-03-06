import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "@firebase/firestore";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router";
import "./ItemDetailContainer.scss";
import Loading from "../Loading/Loading";

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

  return (
    <>
      <div className="itemDetailContainer">
        <h1 className="itemDetailContainerTitle">Vista en detalle</h1>
        {selectedProduct ? (
          <div className="list">
            <ItemDetail
              item={selectedProduct}
              stockLimit={selectedProduct.stock}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default ItemDetailContainer;
