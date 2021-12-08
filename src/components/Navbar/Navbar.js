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
          <NavLink to={`/Category/Lapices`} activeClassName="active">
            LAPICES
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to={`/Category/Fibras`} activeClassName="active">
            FIBRAS
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to={`/Category/Lapiceras`} activeClassName="active">
            LAPICERAS
          </NavLink>
        </li>
        <Link to={`/Cart`}>
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
