import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../Data/Store";
import { OrderProductRow } from "../../Data/OrderProductRow";
import {
  gotShowModalProductAction,
  gottingCurrentOrderWithGridAction,
} from "../../Data/Store";

interface Props {
  row: OrderProductRow;
}

//select product grid
export const SelectProductGrid = (props: Props) => {
  const dispatch = useDispatch();

  //new order row
  const selectElement = (row: OrderProductRow) => {
    var totalRow = 1 * row.ar_price;
    var totalWithVatRow =
      1 * row.ar_price + (1 * row.ar_price * row.ar_ivaperc) / 100;
    currentOrder.totalWithVat += totalWithVatRow;
    currentOrder.total += totalRow;
    var rowId = 1;

    //create max row id
    if (currentOrder.productsRow.length > 0) {
      var max = currentOrder.productsRow.reduce((max, currentValue) => {
        return max.id > currentValue.id ? max : currentValue;
      });
      rowId = max.id + 1;
    }

    //add row
    row.id = rowId;
    row.ar_totalWithVat = totalWithVatRow;
    row.ar_total = totalRow;
    row.ar_quant = 1;
    row.ar_ivaperc = 22;
    row.ar_sconto = 0;
    currentOrder.productsRow.push(row);
    dispatch(gottingCurrentOrderWithGridAction(currentOrder));
    dispatch(gotShowModalProductAction(false));
  };

  //show modal modal product
  const showModalProduct = useSelector(
    (state: AppState) => state.zmagState.showModalProduct
  );

  //show modal current order
  const currentOrder = useSelector(
    (state: AppState) => state.zmagState.currentOrder
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
