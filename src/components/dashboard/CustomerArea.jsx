import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";

const CustomerArea = () => {
  const customerProd = useSelector(
    (state: AppState) => state.zmagState.selectedCustomer
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <hr />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-10">
              <label>Ragione sociale1</label>
              <input
                disabled
                type="text"
                value={customerProd != null ? customerProd.an_descr1 : ""}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>Ragione sociale2</label>
              <input
                disabled
                type="text"
                value={customerProd != null ? customerProd.an_descr2 : ""}
              ></input>
            </div>
            <div className="col-md-4">
              <label>Indirizzo</label>
              <input
                disabled
                type="text"
                value={customerProd != null ? customerProd.an_indir : ""}
              ></input>
            </div>
            <div className="col-md-4">
              <label>Provincia</label>
              <input
                disabled
                type="text"
                value={customerProd != null ? customerProd.an_prov : ""}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerArea;
