import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import logo from "./../../Images/logo3.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <NavLink
            exact={true}
            to="/"
            activeClassName="is-active"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="is-active" className="nav-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/tours" activeClassName="is-active" className="nav-link">
            Tours
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="is-active"
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
