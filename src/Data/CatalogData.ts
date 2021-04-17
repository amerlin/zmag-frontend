import { http } from "../http";

export interface CatalogData {
  id: number;
  descr: string;
  type: string;
  moltiplicator: number;
  startDate: Date;
  endDate: Date;
  ultAgg: Date;
}

export const getCatalogsAsync = async (): Promise<CatalogData[]> => {
  const result = await http<CatalogData[]>({
    path: "/Catalog/GetDemoCatalog",
  });
  if (result.ok && result.body) {
    return result.body.map(mapCatalogFromServer);
  } else {
    return [];
  }
};

export interface CatalogDataFromServer {
  id: number;
  descr: string;
  type: string;
  moltiplicator: number;
  startDate: Date;
  endDate: Date;
  ultAgg: Date;
}

export const mapCatalogFromServer = (
  catalogs: CatalogDataFromServer
): CatalogData => ({
  ...catalogs,
});
