import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer titulo="Cartilla de productos" />
      </main>
      <section>
        <ItemDetailContainer />
      </section>
    </>
  );
}

export default App;
