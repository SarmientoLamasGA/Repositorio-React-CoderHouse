import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer titulo="Cartilla de productos" />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route exact path="/producto/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
