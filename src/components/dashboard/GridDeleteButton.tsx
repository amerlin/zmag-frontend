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
    return state.zmagState.currentOrder.productsRow;
  });

  const deleteElement = (ar_codart: string) => {
    var ar_total = 0;
    var ar_totalWithVat = 0;
    for (var i = 0; i < products.length; i++) {
      var row = products[i];
      if (row.ar_codart === ar_codart) {
        ar_total = row.ar_total;
        ar_totalWithVat = row.ar_totalWithVat;
      }
    }
    var updated = products.filter((item) => item.ar_codart !== ar_codart);
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
