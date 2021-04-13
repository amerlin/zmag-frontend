import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ProductGrid from "../products/productsGrid";

const DashBoard = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <h2>Nuova Vendita</h2>
      <div className="container-fluid">
        <div className="col-md-12">
          <hr />
        </div>

        <div className="row mt-20 ml-0 mt-4">
          <Form.Group controlId="formBasicEmail" className="d-flex">
            <fieldset className="mr-4">
              <Form.Label>Ragione sociale</Form.Label>
              <Form.Control type="text" placeholder="Ragione sociale" />
            </fieldset>
          </Form.Group>
        </div>

        <div className="row mt-20 ml-0 mt-4">
          <Form.Group controlId="formBasicEmail" className="d-flex">
            <fieldset className="mr-12">
              <Form.Label>Ragione sociale</Form.Label>
              <Form.Control type="text" placeholder="Ragione sociale" />
            </fieldset>
            <fieldset className="mr-4">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control type="text" placeholder="Indirizzo" />
            </fieldset>
            <fieldset className="mr-4">
              <Form.Label>Città</Form.Label>
              <Form.Control type="text" placeholder="Città" />
            </fieldset>
            <fieldset className="mr-4">
              <Form.Label>C.A.P.</Form.Label>
              <Form.Control type="text" placeholder="C.A.P." />
            </fieldset>
          </Form.Group>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <div className="row>">
          <Button onClick={() => setSmShow(true)} variant="light">
            Aggiungi prodotto
          </Button>
        </div>
      </div>

      <Modal
        size="xl"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
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
