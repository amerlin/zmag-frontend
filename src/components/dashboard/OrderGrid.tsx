import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, gottingCurrentTotalsGridAction } from "../../Data/Store";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import { ProductData } from "../../Data/ProductData";
import { GridDeleteButton } from "./GridDeleteButton";

// @ts-ignore
import cellEditFactory from "react-bootstrap-table2-editor";

export const OrderGrid = () => {
  const dispatch = useDispatch();

  const currentOrder = useSelector((state: AppState) => {
    return state.zmagState.currentOrder;
  });

  //products
  const products = useSelector((state: AppState) => {
    return state.zmagState.currentOrder.productsRow;
  });

  //total order doc
  const totalDoc = useSelector((state: AppState) => {
    return priceFormatter(state.zmagState.currentOrder.total, 0);
  });

  //total order doc
  const totalDocWithIva = useSelector((state: AppState) => {
    return priceFormatter(state.zmagState.currentOrder.totalWithVat, 0);
  });

  //utility
  function priceFormatter(cell, row) {
    return cell.toLocaleString("it-IT", { minimumFractionDigits: 2 });
  }

  const confirmOrder = () => {
    console.log(currentOrder);
  };

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
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: "La quantità deve essere un numero maggiore di zero",
          };
        }
        if (newValue === 0) {
          return {
            valid: false,
            message: "La quantità non può essere 0.",
          };
        }
        if (newValue < 1) {
          return {
            valid: false,
            message: "La quantità non può essere negativa",
          };
        }
        return true;
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
      formatter: priceFormatter,
      editable: false,
    },
    {
      dataField: "ar_total",
      text: "Totale IVA esclusa",
      formatter: priceFormatter,
      editable: false,
    },
    {
      dataField: "ar_ivaperc",
      text: "Iva %",
      editable: false,
    },
    {
      dataField: "ar_totalWithVat",
      text: "Totale IVA inclusa",
      formatter: priceFormatter,
      editable: false,
    },
    {
      dataField: "Action",
      isDummyField: true,
      text: "",
      editable: false,
      formatter: (cellContent: string, row: ProductData) => {
        return <GridDeleteButton ar_codart={row.ar_codart} />;
      },
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
      if (row.ar_quant < 1) return;
      var oldTotal = row.ar_total;
      var oldTotalWithVat = row.ar_totalWithVat;
      row.ar_total = row.ar_quant * row.ar_price;
      row.ar_totalWithVat =
        row.ar_quant * row.ar_price +
        (row.ar_quant * row.ar_price * row.ar_ivaperc) / 100;
      dispatch(
        gottingCurrentTotalsGridAction(
          row.ar_total,
          row.ar_totalWithVat,
          oldTotal,
          oldTotalWithVat
        )
      );
    },
  });

  return (
    <div className="container-flow">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 text-center totalgrid">
          <strong>Totale Documento (senza iva): {totalDoc} €</strong>
        </div>
        <div className="col-md-4 text-center totalgrid">
          <strong>Totale Documento (con iva): {totalDocWithIva} €</strong>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">&nbsp;</div>
      <div className="row">
        <BootstrapTable
          wrapperClasses="ordergrid"
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
        <div className="col-md-2"></div>
        <div className="col-md-4 text-center">
          <Button variant="primary" onClick={() => confirmOrder()}>
            Conferma
          </Button>{" "}
          <Button variant="primary">Annulla</Button>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default OrderGrid;
