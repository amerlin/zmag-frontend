import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gotCustomerAction } from "../../Data/Store";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";

//SelectButtonCustomerGrid
export const SelectButtonCustomerGrid = (props) => {
  const dispatch = useDispatch();

  const showCustomerModal = useSelector(
    (state: AppState) => state.zmagState.showModalCustomer
  );

  return (
    <Button
      className="btn-sm"
      onClick={() => dispatch(gotCustomerAction(props.row))}
      disabled={!showCustomerModal}
    >
      Seleziona
    </Button>
  );
};
