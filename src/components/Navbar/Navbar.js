import React from "react";
import logo from "../../images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

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
          <NavLink to={`/Category/Frutas`} activeClassName="active">
            FRUTAS
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to={`/Category/Hortalizas`} activeClassName="active">
            HORTALIZAS
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to={`/Category/Legumbres`} activeClassName="active">
            LEGUMBRES
          </NavLink>
        </li>
        <Link className="cartItem" to={`/Cart`}>
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
