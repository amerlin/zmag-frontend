import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Spinner } from "react-bootstrap";
import { OrderData, getOrdersAsync } from "../../Data/OrderData";

// @ts-ignore
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

export const OrdersGrid = () => {
  const [orders, setOrders] = React.useState<OrderData[]>([]);
  const [ordersLoading, setOrdersLoading] = React.useState(true);

  React.useEffect(() => {
    const getP = async () => {
      const prod = await getOrdersAsync();
      setOrders(prod);
      setOrdersLoading(false);
    };
    getP();
  }, []);

  const columns = [
    {
      dataField: "id",
      text: "Numero",
      editable: false,
      searchable: true,
    },
    {
      dataField: "year",
      text: "Anno",
      editable: false,
      searchable: true,
    },
    {
      dataField: "date",
      text: "Data",
      editable: false,
      formatter: (cell: any) => {
        let dateObj = cell;
        if (typeof cell !== "object") {
          dateObj = new Date(cell);
        }
        return `${("0" + dateObj.getUTCDate()).slice(-2)}/${(
          "0" +
          (dateObj.getUTCMonth() + 1)
        ).slice(-2)}/${dateObj.getUTCFullYear()}`;
      },
    },
    {
      dataField: "customer.an_descr1",
      text: "Cliente",
      editable: false,
      searchable: true,
    },
    {
      dataField: "total",
      text: "Totale (€)",
      editable: false,
      searchable: true,
    },
  ];

  const option = {};
  const { SearchBar } = Search;

  return (
    <div className="container">
      <div className="row">
        <br />
      </div>
      <div className="row">
        <div className="col-md-8">
          {ordersLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <ToolkitProvider
              keyField="id"
              data={orders}
              columns={columns}
              search={{
                searchFormatted: true,
              }}
            >
              {(props) => (
                <div>
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Cerca vendita"
                  />
                  <hr />
                  <BootstrapTable
                    {...props.baseProps}
                    striped
                    hover
                    condensed
                    pagination={paginationFactory(option)}
                  />
                </div>
              )}
            </ToolkitProvider>
          )}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default OrdersGrid;
