import { http } from "../http";

export interface OrderData {
  id: number;
  year: number;
  note: string;
  total: number;
  totalWithVat: number;
  customer: Customer;
  productsRow: ProductRow[];
}
export interface Customer {
  codditt: string;
  an_conto: number;
  an_descr1: string;
  an_descr2: string;
  an_citta: string;
  an_indir: string;
  an_prov: string;
  an_cap: string;
  an_pariva: string;
  an_codfis: string;
  an_tipo: string;
  isPrivateCustomer: boolean;
  isInBusiness: boolean;
}
export interface ProductRow {
  id: number; //serve per la cancellazione della riga
  ar_codart: string;
  ar_descr: string;
  ar_price: number;
  ar_barcode: string;
  ar_quant: number;
  ar_total: number;
  ar_totalWithVat: number;
  ar_ivaperc: number;
  ar_sconto: number;
}

export const getOrdersAsync = async (): Promise<OrderData[]> => {
  const result = await http<OrderData[]>({
    path: "/Orders/GeDemoOnlyHeaders",
  });
  if (result.ok && result.body) {
    return result.body.map(mapOrderFromServer);
  } else {
    return [];
  }
};

//sistemare la mappatura
export interface OrderDataFromServer {
  id: number;
  year: number;
  note: string;
  total: number;
  customer: Customer;
  productsRow: ProductRow[];
}

export const mapOrderFromServer = (orders: OrderDataFromServer): OrderData => ({
  ...orders,
});
