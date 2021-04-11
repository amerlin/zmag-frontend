import React from "react";
import { Button } from "react-bootstrap";

const Orders = () => {
  return (
    <div>
      <h2>Vendita</h2>
      <Button variant="primary">1) Selezionare il cliente</Button>&nbsp;
      <p>
        Una volta aperto il popup e selezionato il cliente, impostare i dati del
        cliente selezionato in una serie di campi non modificabili
      </p>
      <p>FORM CON I DATI DEL CLIENTE</p>
      <Button variant="primary">2) Aggiungi prodotto</Button>
      <p>
        Una volta aperto il popup e selezionato il prodotto con la quantità,
        aggiungere i dati nella nella griglia
      </p>
      <p>GRIGLIA CON I PRODOTTI SELEZIONATI</p>
      <Button variant="primary">
        Salvataggio dell'ordine facendo una post
      </Button>
      &nbsp;
    </div>
  );
};

export default Orders;
