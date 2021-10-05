import React from "react";
import { NavLink } from "react-router-dom";

const ModalNav = () => (
  <nav>
    <li>
      <NavLink exact to="/">
        Main
      </NavLink>
    </li>
    <li>
      <NavLink to="/country">Country</NavLink>
    </li>
    <li>
      <NavLink to="/calculate">Calculate</NavLink>
    </li>
  </nav>
);
export default ModalNav;
