import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { ProductData, getProductsAsync } from "../../Data/ProductData";
import { Spinner } from "react-bootstrap";
import { SelectProductGrid } from "./SelectProductGrid";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../Data/Store";

export const ProductGrid = () => {
  const [products, setProducts] = React.useState<ProductData[]>([]);
  const [productsLoading, setProductsLoading] = React.useState(true);

  React.useEffect(() => {
    const getProds = async () => {
      const prod = await getProductsAsync();
      setProducts(prod);
      setProductsLoading(false);
    };
    getProds();
  }, []);

  const columns = [
    {
      dataField: "ar_codart",
      text: "Codice Articolo",
      editable: false,
      searchable: true,
    },
    {
      dataField: "ar_barcode",
      text: "Barcode",
      searchable: true,
      editable: false,
    },
    {
      dataField: "ar_descr",
      text: "Descrizione",
      searchable: true,
      editable: false,
    },
    {
      dataField: "ar_price",
      text: "Prezzo (€)",
      classes: "demo-key-row",
    },
    {
      dataField: "Action",
      isDummyField: true,
      text: "",
      editable: false,
      formatter: (cellContent: string, row: ProductData) => {
        return <SelectProductGrid row={row} />;
      },
    },
  ];

  const option = {};
  const { SearchBar } = Search;

  return (
    <div className="container-fluid">
      <div className="row">
        <br />
      </div>
      <div className="row">
        <div className="col-md-12">
          {productsLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <ToolkitProvider
              keyField="ar_codart"
              data={products}
              columns={columns}
              search={{
                searchFormatted: true,
              }}
            >
              {(props) => (
                <div>
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Cerca prodotto"
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
      </div>
    </div>
  );
};

export default ProductGrid;
