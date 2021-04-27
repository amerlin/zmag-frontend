import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ProductGrid from "../products/ProductsGrid";
import CustomerArea from "./CustomerArea";
import CustomerGrid from "../customers/CustomersGrid";
import OrderGrid from "./OrderGrid";
import { OrderData } from "../../Data/OrderData";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  gotOrderAction,
  gotShowModalCustomerAction,
  gotShowModalProductAction,
} from "../../Data/Store";
const DashBoard = () => {
  const dispatch = useDispatch();

  //show customers modal
  const SetShowCustomerModal = (visible: boolean) =>
    dispatch(gotShowModalCustomerAction(visible));

  //show product modal
  const SetShowProductModal = (visible: boolean) =>
    dispatch(gotShowModalProductAction(visible));

  //get if products grid modal is true
  const showProductModal = useSelector(
    (state: AppState) => state.zmagState.showModalProduct
  );

  //get if customers grid modal is true
  const showCustomertModal = useSelector(
    (state: AppState) => state.zmagState.showModalCustomer
  );

  //set customersSelected boolean value
  const customersSelected = useSelector((state: AppState) => {
    var customer = state.zmagState.selectedCustomer;
    return customer == null;
  });

  //Create new order
  const CreateCurrentOrder = () => {
    var newOrder: OrderData = {
      id: 0,
      year: 0,
      productsRow: [],
      customer: null,
      total: 0,
      totalWithVat: 0,
      note: "",
    };
    dispatch(gotOrderAction(newOrder, null));
  };

  //Delete current order
  const DeleteCurrentOrder = () => {
    var newOrder: OrderData = {
      id: 0,
      year: 0,
      productsRow: [],
      customer: null,
      total: 0,
      totalWithVat: 0,
      note: "",
    };
    dispatch(gotOrderAction(newOrder, null));
  };

  return (
    <div>
      <h2>Nuova Commessa</h2>
      <p> Ambiente: {process.env.REACT_APP_ENV || "dev"}</p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Button variant="primary" onClick={() => CreateCurrentOrder()}>
              Crea Nuovo Ordine
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => SetShowCustomerModal(true)}
            >
              Ricerca Cliente
            </Button>{" "}
            <Button variant="primary" onClick={() => DeleteCurrentOrder()}>
              Annulla Ordine
            </Button>{" "}
          </div>
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
