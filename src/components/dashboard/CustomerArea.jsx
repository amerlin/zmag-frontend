import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../Data/Store";
import Form from "react-bootstrap/Form";

const CustomerArea = () => {
  const customerProd = useSelector(
    (state: AppState) => state.zmagState.selectedCustomer
  );
  return (
    <div className="container-fluid">
      <Form className="mt-3">
        <div className="row">
          <div className="col-md-8">
            {" "}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ragione sociale</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ragione sociale"
                value={customerProd != null ? customerProd.an_descr1 : ""}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                checked={
                  customerProd != null ? customerProd.isPrivateCustomer : false
                }
                disabled
              />
              <label class="form-check-label" for="defaultCheck1">
                Cliente privato
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                checked={
                  customerProd != null ? !customerProd.isPrivateCustomer : false
                }
                disabled
              />
              <label class="form-check-label" for="defaultCheck2">
                Azienda
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                disabled
                checked={
                  customerProd != null ? customerProd.isInBusiness : false
                }
              />
              <label class="form-check-label" for="defaultCheck2">
                Cliente già codificato in Business
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Indirizzo"
                value={customerProd != null ? customerProd.an_indir : ""}
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Citt&agrave;</Form.Label>
              <Form.Control
                type="text"
                placeholder="Citt&agrave;"
                value={customerProd != null ? customerProd.an_citta : ""}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Provincia"
                value={customerProd != null ? customerProd.an_prov : ""}
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Partita iva / Codice Fiscale</Form.Label>
              <Form.Control
                type="text"
                placeholder="Partita iva / Codice Fiscale"
                value={customerProd != null ? customerProd.an_pariva : ""}
              />
            </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CustomerArea;
