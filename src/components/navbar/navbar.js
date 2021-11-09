import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logoContainer">
        <Link to={`/`}>
          <img src={logo} className="logoImg" alt="logo tienda" />
          <h1>RANDOM SHOP</h1>
        </Link>
      </div>
      <ul className="navList">
        <li className="navItem">
          <Link to={`/Category/Frutas`}>FRUTAS</Link>
        </li>
        <li className="navItem">
          <Link to={`/Category/Hortalizas`}>HORTALIZAS</Link>
        </li>
        <li className="navItem">
          <Link to={`/Category/Legumbres`}>LEGUMBRES</Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default Navbar;
