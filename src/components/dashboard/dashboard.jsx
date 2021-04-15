import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ProductGrid from "../products/productsGrid";
import CustomerArea from "./CustomerArea";
import CustomerGrid from "../customers/customersGrid";
import OrderGrid from "./OrderGrid";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  gotShowModalCustomerAction,
  gotShowModalProductAction,
} from "../../Data/Store";
const DashBoard = () => {
  const dispatch = useDispatch();

  //show product modal - posso spostarlo direttamente nella griglia
  const SetShowProductModal = (visible) =>
    dispatch(gotShowModalProductAction(visible));

  //show customers modal - posso spostarlo direttamente nella griglia
  const SetShowCustomerModal = (visible) =>
    dispatch(gotShowModalCustomerAction(visible));

  const showProductModal = useSelector((state: AppState) => {
    return state.zmagState.showModalProduct;
  });

  const showCustomertModal = useSelector((state: AppState) => {
    return state.zmagState.showModalCustomer;
  });

  //current product
  const product = useSelector((state: AppState) => {
    console.log(state.zmagState.selectedProduct);
    return state.zmagState.selectedProduct;
  });

  //current customer
  const customer = useSelector((state: AppState) => {
    return state.zmagState.selectedCustomer;
  });

  return (
    <div>
      <h2>Nuova Vendita: </h2>
      <div className="container-fluid">
        <div className="row>">
          <Button variant="primary" onClick={() => SetShowCustomerModal(true)}>
            Aggiungi Cliente
          </Button>
          &nbsp;&nbsp;
          <Button variant="primary" onClick={() => SetShowProductModal(true)}>
            Aggiungi prodotto
          </Button>
        </div>
        <div></div>
      </div>

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

      <CustomerArea />
      <OrderGrid />
    </div>
  );
};

export default DashBoard;
