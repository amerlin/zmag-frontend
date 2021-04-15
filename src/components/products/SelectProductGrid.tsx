import React from "react";
import { Button } from "react-bootstrap";
import { ProductData } from "../../Data/ProductData";
import { useDispatch } from "react-redux";
import {
  gotProductAction,
  gotShowModalProductAction,
  gottingCurrentProductsGridAction,
} from "../../Data/Store";

interface Props {
  row: ProductData;
}

export const SelectProductGrid = (props: Props) => {
  const dispatch = useDispatch();
  const selectElement = (row: ProductData) => {
    dispatch(gotProductAction(row));
    dispatch(gotShowModalProductAction(false));
    dispatch(gottingCurrentProductsGridAction(row));
  };

  return (
    <Button className="btn-sm" onClick={() => selectElement(props.row)}>
      Seleziona
    </Button>
  );
};
