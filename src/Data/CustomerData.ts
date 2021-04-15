import { http } from "../http";

export interface CustomerData {
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

export const getCustomersAsync = async (): Promise<CustomerData[]> => {
  const result = await http<CustomerData[]>({
    path: "/customers/getDemoCustomers",
  });
  if (result.ok && result.body) {
    return result.body.map(mapProductFromServer);
  } else {
    return [];
  }
};

//sistemare la mappatura
export interface ProductDataFromServer {
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

export const mapProductFromServer = (
  customers: ProductDataFromServer
): CustomerData => ({
  ...customers,
});
