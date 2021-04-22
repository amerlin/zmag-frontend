import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ProductGrid from "../products/ProductsGrid";
import CustomerArea from "./CustomerArea";
import CustomerGrid from "../customers/CustomersGrid";
import OrderGrid from "./OrderGrid";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  gotShowModalCustomerAction,
  gotShowModalProductAction,
} from "../../Data/Store";
const DashBoard = () => {
  const dispatch = useDispatch();

  //show customers modal
  const SetShowCustomerModal = (visible) =>
    dispatch(gotShowModalCustomerAction(visible));

  //show product modal
  const SetShowProductModal = (visible) =>
    dispatch(gotShowModalProductAction(visible));

  //get if products grid modal is true
  const showProductModal = useSelector(
    (state: AppState) => state.zmagState.showModalProduct
  );

  //get if customers grid modal is true
  const showCustomertModal = useSelector(
    (state: AppState) => state.zmagState.showModalCustomer
  );

  //set customer selected
  const customersSelected = useSelector((state: AppState) => {
    var customer = state.zmagState.selectedCustomer;
    return customer == null;
  });

  return (
    <div>
      <h2>Nuova Commessa</h2>
      <p> Ambiente: {process.env.REACT_APP_ENV || "dev"}</p>
      <div className="container-fluid">
        <div className="row>">
          <Button variant="primary" onClick={() => SetShowCustomerModal(true)}>
            Ricerca Cliente
          </Button>
        </div>
        <div></div>
      </div>

      <Modal
        size="xl"
        aria-labelledby="example-modal-sizes-title-sm"
        show={showCustomertModal}
        onHide={() => SetShowCustomerModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Ricerca Cliente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomerGrid />
        </Modal.Body>
      </Modal>

      <Modal
        size="xl"
        aria-labelledby="example-modal-sizes-title-sm"
        show={showProductModal}
        onHide={() => SetShowProductModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Ricerca Prodotti
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductGrid />
        </Modal.Body>
      </Modal>

      <CustomerArea />
      <div className="row">
        <div className="col-md-12">
          <Button
            variant="primary"
            onClick={() => SetShowProductModal(true)}
            disabled={customersSelected}
          >
            Aggiungi prodotto
          </Button>
        </div>
      </div>
      <OrderGrid />
    </div>
  );
};

export default DashBoard;
