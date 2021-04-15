import React from "react";
import { Button } from "react-bootstrap";
import { CustomerData } from "../../Data/CustomerData";
import { useDispatch } from "react-redux";
import { gotCustomerAction } from "../../Data/Store";

interface Props {
  row: CustomerData;
}

export const SelectCustomerGrid = (props: Props) => {
  const dispatch = useDispatch();
  const selectElement = (row: CustomerData) => {
    dispatch(gotCustomerAction(row));
  };

  return (
    <Button
      className="btn-sm"
      onClick={() => dispatch(gotCustomerAction(props.row))}
    >
      Seleziona
    </Button>
  );
};
