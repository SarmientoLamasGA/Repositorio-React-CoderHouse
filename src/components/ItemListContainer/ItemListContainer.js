import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  return (
    <div className="containerList">
      <h1 className="title">Nuestros productos</h1>
      <div className="list">
        <ItemList />
      </div>
    </div>
  );
}

export default ItemListContainer;
