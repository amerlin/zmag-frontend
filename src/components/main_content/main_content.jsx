/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Customers from "../customers/customers";
import Products from "../products/products";
import Orders from "../orders/orders";
import Catalog from "../catalog/catalog";

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
