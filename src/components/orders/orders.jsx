import React from "react";
import { Button } from "react-bootstrap";
import { OrdersGrid } from "./ordersGrid";

const Orders = () => {
  return (
    <div>
      <h2>Elenco Vendite</h2>
      <OrdersGrid />
    </div>
  );
};

export default Orders;
