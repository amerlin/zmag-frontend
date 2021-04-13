import React from "react";
import { Button } from "react-bootstrap";
import { ProductData } from "../../Data/ProductData";

interface Props {
  row: ProductData;
}

export const SelectProductGrid = (props: Props) => {
  const selectElement = (row: ProductData) => {
    console.log("Current ar_codart: " + row.ar_codart);
    console.log("Current ar_descr: " + row.ar_descr);
    console.log("Current ar_price: " + row.ar_price);
  };

  return (
    <Button className="btn-sm" onClick={() => selectElement(props.row)}>
      Seleziona
    </Button>
  );
};
