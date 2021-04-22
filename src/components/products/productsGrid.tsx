import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { ProductData, getProductsAsync } from "../../Data/ProductData";
import { Spinner } from "react-bootstrap";
import { SelectProductGrid } from "./SelectButtonProductGrid";
import { ComposedProducts } from "./ComposedProducts";
import { useState } from "react";

export const ProductGrid = () => {
  const [products, setProducts] = React.useState<ProductData[]>([]);
  const [productsLoading, setProductsLoading] = React.useState(true);
  const [prdNotDistinta, setPrdNotDistinta] = useState<string[]>([]);

  //onLoad
  React.useEffect(() => {
    const getProds = async () => {
      const prod = await getProductsAsync();
      setProducts(prod);
      setPrdNotDistinta(getNotComposedProducts(prod));
      setProductsLoading(false);
    };
    getProds();
  }, []);

  //expand grid
  const expandGridRow = {
    renderer: (row: ProductData) => (
      <ComposedProducts ar_codart={row.ar_codart} />
    ),
    showExpandColumn: true,
    nonExpandable: prdNotDistinta,
  };

  const getNotComposedProducts = (prd: ProductData[]): string[] => {
    return prd
      .filter((element) => {
        return element.ar_isComposed === false;
      })
      .map((value) => value.ar_codart);
  };

  //price formatter
  function priceFormatter(cell: string, row: ProductData) {
    return cell.toLocaleString("it-IT", { minimumFractionDigits: 2 });
  }

  //set true/false label
  function setTrueFalseLabelInGrid(cell: boolean, row: ProductData) {
    return cell === true ? "Si" : "No";
  }

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
      dataField: "ar_isComposed",
      text: "Distinta base",
      searchable: false,
      formatter: setTrueFalseLabelInGrid,
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
      formatter: priceFormatter,
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
    {
      dataField: "Action1",
      isDummyField: true,
      text: "",
    },
  ];

  const option = {};
  const { SearchBar } = Search;

  return (
    <div className="container-flex">
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
                  <BootstrapTable
                    {...props.baseProps}
                    striped
                    hover
                    condensed
                    pagination={paginationFactory(option)}
                    expandRow={expandGridRow}
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
