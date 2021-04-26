import React from "react";
import { Button } from "react-bootstrap";
import { ProductData } from "../../Data/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../Data/Store";
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
    // dispatch(gotProductAction(row));
    dispatch(gotShowModalProductAction(false));
    dispatch(gottingCurrentProductsGridAction(row));
  };

  const showModalProduct = useSelector(
    (state: AppState) => state.zmagState.showModalProduct
  );

  return (
    <Button
      className="btn-sm"
      onClick={() => selectElement(props.row)}
      disabled={!showModalProduct}
    >
      Seleziona
    </Button>
  );
};
