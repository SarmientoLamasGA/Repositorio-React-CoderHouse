import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { getFirestore } from "../../firebase";
import "./ItemList.scss";
import Loading from "../Loading/Loading";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q = query(collection(db, "items"));

    if (!category) {
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    } else {
      q = query(collection(db, "items"), where("category", "==", category));
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [category]);

  return (
    <div className="categoryList">
      {productos.length ? (
        productos.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            photo={producto.photo}
            price={producto.price}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemList;
