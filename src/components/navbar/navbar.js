import React from "react";
import logo from "../../images/logo.png";
import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";

function Navbar() {
  return (
    <nav>
      <div className="logoContainer">
        <img src={logo} className="logoImg" alt="logo tienda" />
        <h1>PRUEBA</h1>
      </div>
      <ul className="navList">
        <li className="navItem">
          <a className="navLink" href="/index.html">
            INICIO
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="/index.html">
            TIENDA
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="/index.html">
            CONTACTO
          </a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}

export default Navbar;
