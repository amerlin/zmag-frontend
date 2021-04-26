import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gotCustomerAction, gotOrderAction } from "../../Data/Store";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";

//SelectButtonCustomerGrid
export const SelectButtonCustomerGrid = (props) => {
  const dispatch = useDispatch();

  //enable or disable selection button
  const enableSelectButton = useSelector(
    (state: AppState) => state.zmagState.showModalCustomer
  );

  const setCustomerInOrder = (row: any) => {
    console.log(row);
    dispatch(gotCustomerAction(props.row)); //remove
    dispatch(gotOrderAction(props.row)); //dispatch in new order
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
