import React from "react";
import { Button } from "react-bootstrap";
import { ProductData } from "../../Data/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../Data/Store";
import { OrderProductRow } from "../../Data/OrderProductRow";
import {
  gotShowModalProductAction,
  gottingCurrentOrderWithGridAction,
} from "../../Data/Store";

interface Props {
  row: ProductData;
}

export const SelectProductGrid = (props: Props) => {
  const dispatch = useDispatch();

  const selectElement = (row: ProductData) => {
    //aggiungere funzione per non avere ordini doppi

    var qta = 1;
    var totalRow = qta * row.ar_price;
    var totalWithVatRow =
      1 * row.ar_price + (1 * row.ar_price * row.ar_ivaperc) / 100;
    currentOrder.totalWithVat += totalWithVatRow;
    currentOrder.total += totalRow;
    var newOrderRow: OrderProductRow = {
      id: 0,
      ar_codart: row.ar_codart,
      ar_descr: row.ar_descr,
      ar_price: row.ar_price,
      ar_barcode: "",
      ar_quant: 1,
      ar_total: totalRow,
      ar_totalWithVat: totalWithVatRow,
      ar_ivaperc: 22,
      ar_sconto: 0,
    };
    currentOrder.productsRow.push(newOrderRow);
    dispatch(gottingCurrentOrderWithGridAction(currentOrder));
    dispatch(gotShowModalProductAction(false));
  };

  const showModalProduct = useSelector(
    (state: AppState) => state.zmagState.showModalProduct
  );

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
