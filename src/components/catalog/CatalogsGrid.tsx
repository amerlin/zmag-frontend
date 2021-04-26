import React from "react";
import { CatalogData, getCatalogsAsync } from "../../Data/CatalogData";
import { Spinner } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import moment from "moment";

//Catalogs Grid
export const CatalogsGrid = () => {
  const { SearchBar } = Search;
  const option = {};
  const [catalogs, setCatalogs] = React.useState<CatalogData[]>([]);
  const [catalogsLoading, setCatalogLoading] = React.useState(true);

  function dateFormatter(cell, row) {
    return moment(cell).format("MM-DD-YYYY HH:mm:ss");
  }

  function setCatalogType(cell, row) {
    return cell === "F" ? "Fornitori" : "Cliente";
  }

  React.useEffect(() => {
    const getDataAsync = async () => {
      const catalogs = await getCatalogsAsync();
      setCatalogs(catalogs);
      setCatalogLoading(false);
    };
    getDataAsync();
  }, []);

  const columns = [
    {
      dataField: "id",
      text: "Numero listino",
      editable: false,
      searchable: true,
    },
    {
      dataField: "descr",
      text: "Descrizione",
      editable: false,
      searchable: false,
    },
    {
      dataField: "type",
      text: "Tipo",
      editable: false,
      searchable: false,
      formatter: setCatalogType,
    },
    {
      dataField: "moltiplicator",
      text: "Moltiplicatore",
      editable: false,
      searchable: false,
    },
    {
      dataField: "ultagg",
      text: "Data Aggiornamento",
      formatter: dateFormatter,
      editable: false,
      searchable: false,
    },
    {
      dataField: "startDate",
      text: "Valido dal",
      formatter: dateFormatter,
      editable: false,
      searchable: false,
    },
    {
      dataField: "endDate",
      text: "Valido al",
      formatter: dateFormatter,
      editable: false,
      searchable: false,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <br />
      </div>
      <div className="row">
        <div className="col-md-12">
          {catalogsLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <ToolkitProvider
              keyField="ar_codart"
              data={catalogs}
              columns={columns}
              search={{
                searchFormatted: true,
              }}
            >
              {(props) => (
                <div>
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Cerca listino"
                  />
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
