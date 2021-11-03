import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <>
              <ItemListContainer titulo="Cartilla de productos" />
            </>
            <>
              <ItemDetailContainer />
            </>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
