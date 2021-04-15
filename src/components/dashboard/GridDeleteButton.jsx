import React from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { AppState, gottingDeleteProductGridAction } from "../../Data/Store";

interface Props {
  ar_codart: string;
  ar_total: number;
  ar_totalWithVat: number;
}

export const GridDeleteButton = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => {
    return state.zmagState.currentProductsGrid;
  });

  const deleteElement = (ar_codart, ar_total, ar_totalWithVat) => {
    var updated = products.filter(function (value) {
      if (value.ar_codart !== ar_codart) return value;
    });
    dispatch(
      gottingDeleteProductGridAction(updated, ar_total, ar_totalWithVat)
    );
  };

  return (
    <Button
      onClick={() =>
        deleteElement(props.ar_codart, props.ar_total, props.ar_totalWithVat)
      }
    >
      <BsFillTrashFill />
    </Button>
  );
};
