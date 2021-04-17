/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "./styled_sidebar.js";

const Sidebar = () => {
  return (
    <aside>
      <Navigation>
        <li>
          <NavLink to="/home">Nuova Commessa</NavLink>
        </li>
        <li>
          <NavLink to="/customers">Anagrafica Clienti</NavLink>
        </li>
        <li>
          <NavLink to="/products">Anagrafica Prodotti</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Elenco Vendite</NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Elenco Listini</NavLink>
        </li>
      </Navigation>
    </aside>
  );
};

export default Sidebar;
