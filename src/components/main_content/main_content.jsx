/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Customers from "../customers/Customers";
import Products from "../products/Products";
import Orders from "../orders/orders";
import Catalog from "../catalog/Catalog";

const MainContent = () => {
  return (
    <div className="content w-100 p-5">
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default MainContent;
