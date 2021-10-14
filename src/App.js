import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <div className="divApp">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer titulo="Item List Container" />
      </main>
    </div>
  );
}

export default App;
