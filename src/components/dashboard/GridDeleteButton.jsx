import React from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { AppState, gottingDeleteProductGridAction } from "../../Data/Store";

interface Props {
  ar_codart: string;
}

export const GridDeleteButton = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => {
    return state.zmagState.currentProductsGrid;
  });

  const deleteElement = (ar_codart) => {
    var ar_total = 0;
    var ar_totalWithVat = 0;
    var updated = products.filter(function (value) {
      if (value.ar_codart === ar_codart) {
        ar_totalWithVat = value.ar_totalWithVat;
        ar_total = value.ar_total;
        ar_total = value.ar_total;
      }
      if (value.ar_codart !== ar_codart) return value;
      return value;
    });
    dispatch(
      gottingDeleteProductGridAction(updated, ar_total, ar_totalWithVat)
    );
  };

  return (
    <Button onClick={() => deleteElement(props.ar_codart)}>
      <BsFillTrashFill />
    </Button>
  );
};
