import { http } from "../http";

export interface OrderData {
  id: number;
  year: number;
  note: string;
  total: number;
  customer: Customer;
  productsRow: ProductRow[];
}
export interface Customer {
  codditt: string;
  an_conto: number;
  isInBusiness: boolean;
  an_descr1: string;
  an_descr2: string;
  an_indir: string;
  an_cap: string;
  an_citta: string;
  an_prov: string;
  an_codfis: string;
  an_pariva: string;
  an_tipo: string;
}
export interface ProductRow {
  id: number;
  codArt: string;
  qta: number;
  price: number;
  total: number;
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
