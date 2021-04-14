import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ProductGrid from "../products/productsGrid";
import CustomerArea from "./CustomerArea";
import DebugArticle from "./DebugArticle";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  gotShowModalCustomerAction,
  gotShowModalProductAction,
} from "../../Data/Store";
const DashBoard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(gotShowModalProductAction(false));
    dispatch(gotShowModalCustomerAction(false));
  }, []);

  const SetShowProductModal = (visible) =>
    dispatch(gotShowModalProductAction(visible));

  const showProductModal = useSelector((state: AppState) => {
    return state.zmagState.showModalProduct;
  });

  return (
    <div>
      <h2>Nuova Vendita: </h2>
      <div className="container-fluid">
        <CustomerArea />
        <div className="row>">
          <Button variant="light" onClick={() => SetShowProductModal(true)}>
            Aggiungi prodotto
          </Button>
          <DebugArticle />
        </div>
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
    </div>
  );
};

export default DashBoard;
