import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./contexts/CartContext";
import "./App.scss";

function App() {
  return (
    <>
      <CartProvider>
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
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkOut">
              <CheckOut />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
