import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { CustomerData, getCustomersAsync } from "../../Data/CustomerData";
import { Spinner } from "react-bootstrap";

export const CustomerGrid = () => {
  const [customers, setCustomers] = React.useState<CustomerData[]>([]);
  const [customersLoading, setCustomersLoading] = React.useState(true);

  React.useEffect(() => {
    const getP = async () => {
      const prod = await getCustomersAsync();
      setCustomers(prod);
      setCustomersLoading(false);
    };
    getP();
  }, []);

  const columns = [
    {
      dataField: "an_descr1",
      text: "Ragione Sociale",
      editable: false,
    },
    {
      dataField: "an_descr2",
      text: "Descrizione",
      editable: false,
    },
    {
      dataField: "an_indir",
      text: "Indirizzo",
      classes: "demo-key-row",
    },
    {
      dataField: "an_citta",
      text: "Città",
      classes: "demo-key-row",
    },
    {
      dataField: "an_prov",
      text: "Provincia",
      classes: "demo-key-row",
    },
    {
      dataField: "an_cap",
      text: "C.A.P.",
      classes: "demo-key-row",
    },
  ];

  const option = {};

  return (
    <div className="container">
      <div className="row">
        <br />
      </div>
      <div className="row">
        <div className="col-md-8">
          {customersLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <BootstrapTable
              keyField="ar_codart"
              data={customers}
              columns={columns}
              pagination={paginationFactory(option)}
              striped
              hover
              condensed
            />
          )}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default CustomerGrid;