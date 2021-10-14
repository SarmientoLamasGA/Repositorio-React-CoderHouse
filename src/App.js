import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemConainerList from "./components/itemContainerList/itemContainerList";

function App() {
  return (
    <div className="divApp">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemConainerList titulo="Este es el titulo de la seccion" />
      </main>
    </div>
  );
}

export default App;
