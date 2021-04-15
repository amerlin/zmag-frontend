import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStat, gottingCurrentTotalsGridAction } from "../../Data/Store";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";

// @ts-ignore
import cellEditFactory from "react-bootstrap-table2-editor";

export const OrderGrid = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: AppState) => {
    var currentGrids = state.zmagState.currentProductsGrid;
    return currentGrids;
  });

  const totalDoc = useSelector((state: AppState) => {
    return state.zmagState.currentProductsGridTotal;
  });

  const totalDocWithIva = useSelector((state: AppState) => {
    return state.zmagState.currentProductsGridTotalWithVat;
  });

  const columns = [
    {
      dataField: "ar_codart",
      text: "Codice",
      editable: false,
    },
    {
      dataField: "ar_descr",
      text: "Descrizione",
      editable: false,
    },
    {
      dataField: "ar_quant",
      text: "Quantita",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
        width: "260px",
      },
    },
    {
      dataField: "ar_sconto",
      text: "Sconto",
      editable: false,
    },
    {
      dataField: "ar_price",
      text: "Prezzo senza IVA",
      editable: false,
    },
    {
      dataField: "ar_ivaperc",
      text: "Iva %",
      editable: false,
    },
    {
      dataField: "ar_totalWithVat",
      text: "Prezzo con IVA",
      editable: false,
    },
    {
      dataField: "ar_total",
      text: "Totale IVA esclusa",
      editable: false,
    },
    {
      dataField: "ar_totalWithVat",
      text: "Totale IVA inclusa",
      editable: false,
    },
  ];

  const cellEdit = cellEditFactory({
    mode: "click",
    blurToSave: true,
    afterSaveCell: (
      oldValue: number,
      newValue: number,
      row: ProductData,
      column: number
    ) => {
      row.ar_total = row.ar_quant * row.ar_price;
      row.ar_totalWithVat =
        row.ar_quant * row.ar_price +
        (row.ar_quant * row.ar_price * row.ar_ivaperc) / 100;

      dispatch(
        gottingCurrentTotalsGridAction(row.ar_total, row.ar_totalWithVat)
      );
    },
  });

  return (
    <div className="container-flow">
      <div className="row">&nbsp;</div>
      <div className="row">
        <BootstrapTable
          keyField="ar_codart"
          data={products}
          columns={columns}
          striped
          hover
          condensed
          cellEdit={cellEdit}
        />
      </div>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-2">
          <strong>Totale Documento (senza iva):</strong>
        </div>
        <div className="col-md-2">
          <strong>{totalDoc} €</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-2">
          <strong>Totale Documento (con iva):</strong>
        </div>
        <div className="col-md-2">
          <strong>{totalDocWithIva} €</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 text-center">
          <Button variant="primary" onClick={() => SetShowProductModal(true)}>
            Annulla
          </Button>{" "}
          <Button variant="primary">Conferma</Button>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default OrderGrid;
