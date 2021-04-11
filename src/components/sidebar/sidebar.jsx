/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "./styled_sidebar.js";

const Sidebar = () => {
  return (
    <aside>
      <Navigation>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/customers">Anagrafica Clienti</NavLink>
        </li>
        <li>
          <NavLink to="/products">Listino Prodotti</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Vendita</NavLink>
        </li>
        {/* <li>
          <NavLink to="/tools">Amministrazione</NavLink>
        </li> */}
      </Navigation>
    </aside>
  );
};

export default Sidebar;
