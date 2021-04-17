import { http } from "../http";

export interface ProductData {
  ar_codart: string;
  ar_descr: string;
  ar_price: number;
  ar_barcode: string;
  ar_quant: number;
  ar_total: number;
  ar_totalWithVat: number;
  ar_ivaperc: number;
  ar_sconto: number;
  ar_listino1: number;
  ar_iva1: number;
  ar_sconto1: number;
  ar_listino2: number;
  ar_iva2: number;
  ar_sconto2: number;
  ar_listino3: number;
  ar_iva3: number;
  ar_sconto3: number;
  ar_listino4: number;
  ar_iva4: number;
  ar_sconto4: number;
  ar_isComposed: boolean;
}

export const getProductsAsync = async (): Promise<ProductData[]> => {
  const result = await http<ProductData[]>({
    path: "/products/getDemoProducts",
  });
  if (result.ok && result.body) {
    return result.body.map(mapProductFromServer);
  } else {
    return [];
  }
};

export interface ProductDataFromServer {
  ar_codart: string;
  ar_descr: string;
  ar_price: number;
  ar_barcode: string;
  ar_quant: number;
  ar_total: number;
  ar_totalWithVat: number;
  ar_ivaperc: number;
  ar_sconto: number;
  ar_listino1: number;
  ar_iva1: number;
  ar_sconto1: number;
  ar_listino2: number;
  ar_iva2: number;
  ar_sconto2: number;
  ar_listino3: number;
  ar_iva3: number;
  ar_sconto3: number;
  ar_listino4: number;
  ar_iva4: number;
  ar_sconto4: number;
  ar_isComposed: boolean;
}

export const mapProductFromServer = (
  products: ProductDataFromServer
): ProductData => ({
  ...products,
});
