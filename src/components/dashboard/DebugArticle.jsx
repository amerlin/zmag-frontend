import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";

const DebugArticle = () => {
  const customerProd = useSelector(
    (state: AppState) => state.zmagState.selectedProduct
  );

  return customerProd != null ? (
    <div>{customerProd.ar_codart}</div>
  ) : (
    <div>non presente</div>
  );
};

export default DebugArticle;
