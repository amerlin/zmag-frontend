import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gotOrderAction } from "../../Data/Store";
import { OrderData } from "../../Data/OrderData";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";
import { CustomerData } from "../../Data/CustomerData";

//SelectButtonCustomerGrid
export const SelectButtonCustomerGrid = (props) => {
  const dispatch = useDispatch();

  //enable or disable selection button
  const enableSelectButton = useSelector(
    (state: AppState) => state.zmagState.showModalCustomer
  );

  //order
  const currentOrder = useSelector(
    (state: AppState) => state.zmagState.currentOrder
  );

  const setCustomerInOrder = (row: CustomerData) => {
    console.log(currentOrder);
    if (currentOrder === null || currentOrder.customer == null) {
      var newOrder: OrderData = {
        id: 0,
        year: 0,
        productsRow: [],
        customer: null,
        total: 0,
        totalWithVat: 0,
        note: "",
      };
      dispatch(gotOrderAction(newOrder, row));
    } else {
      dispatch(gotOrderAction(currentOrder, row));
    }
  };

  return (
    <Button
      className="btn-sm"
      onClick={() => setCustomerInOrder(props.row)}
      disabled={!enableSelectButton}
    >
      Seleziona
    </Button>
  );
};
