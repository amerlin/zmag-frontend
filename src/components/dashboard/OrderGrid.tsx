import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";

export const OrderGrid = () => {
  //andrebbe riconvertito tutto sul tipo di ordine

  const products = useSelector((state: AppState) => {
    var currentGrids = state.zmagState.currentProductsGrid;
    return currentGrids;
  });

  const totalDoc = useSelector((state: AppState) => {
    return state.zmagState.currentProductsGridTotal;
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
      editable: false,
    },
    {
      dataField: "ar_sconto",
      text: "Sconto",
      editable: false,
    },
    {
      dataField: "ar_price",
      text: "Prezzo senza iva",
      editable: false,
    },
    {
      dataField: "ar_ivaperc",
      text: "Aliquota iva",
      editable: false,
    },
    {
      dataField: "ar_totalWithVat",
      text: "Prezzo con iva",
      editable: false,
    },
    {
      dataField: "ar_total",
      text: "Totale",
      editable: false,
    },
  ];

  return (
    <div className="container-flow">
      <div className="row">&nbsp;</div>
      <div className="row">
        <BootstrapTable
          keyField="productId"
          data={products}
          columns={columns}
          striped
          hover
          condensed
        />
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-4">
          <strong>Totale Documento: {totalDoc}€</strong>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 text-center">
          <Button variant="primary">Annulla</Button>{" "}
          <Button variant="primary">Conferma</Button>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default OrderGrid;
