import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";

const CustomerArea = () => {
  const customerProd = useSelector(
    (state: AppState) => state.zmagState.selectedCustomer
  );

  return customerProd != null ? (
    <div>{customerProd.an_descr1}</div>
  ) : (
    <div>non presente</div>
  );
};

export default CustomerArea;
