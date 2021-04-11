import { http } from "../http";

export interface CustomerData {
  id: number;
  idErp: number;
  an_descr1: string;
  an_descr2: string;
  an_citta: string;
  an_indir: string;
  an_prov: string;
  an_cap: string;
  vat: string;
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
export interface QuestionDataFromServer {
  id: number;
  idErp: number;
  an_descr1: string;
  an_descr2: string;
  an_citta: string;
  an_indir: string;
  an_prov: string;
  an_cap: string;
  vat: string;
}

export const mapProductFromServer = (
  customers: QuestionDataFromServer
): CustomerData => ({
  ...customers,
});
