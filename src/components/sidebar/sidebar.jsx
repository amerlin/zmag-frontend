/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "./styled_sidebar.js";

const Sidebar = () => {
  return (
    <aside>
      <Navigation>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers">Clienti</NavLink>
        </li>
        <li>
          <NavLink to="/products">Prodotti</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Vendite</NavLink>
        </li>
        <li>
          <NavLink to="/tools">Ammistrazione</NavLink>
        </li>
      </Navigation>
    </aside>
  );
};

export default Sidebar;
