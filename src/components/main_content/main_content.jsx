/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Customers from "../customers/customers";
import Products from "../products/products";
import Orders from "../orders/orders";
import Tools from "../tools/tools";
import NotFoundPage from "../notfoundpage/NotFoundPage";

const MainContent = () => {
  return (
    <div className="content w-100 p-5">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
