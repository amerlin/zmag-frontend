import { http } from "../http";
import { OrderCustomer } from "./OrderCustomer";
import { OrderProductRow } from "./OrderProductRow";

export interface OrderData {
  id: number;
  year: number;
  note: string;
  total: number;
  totalWithVat: number;
  customer: OrderCustomer | null;
  productsRow: OrderProductRow[];
}

//Get all orders
export const getOrdersAsync = async (): Promise<OrderData[]> => {
  const result = await http<OrderData[]>({
    path: "/Orders/GeDemoOnlyHeaders",
  });
  if (result.ok && result.body) {
    console.log(result.body);
    return result.body.map(mapOrderFromServer);
  } else {
    return [];
  }
};

export const mapOrderFromServer = (orders: OrderDataFromServer): OrderData => ({
  ...orders,
});

export interface OrderDataFromServer {
  id: number;
  year: number;
  note: string;
  total: number;
  totalWithVat: number;
  customer: OrderCustomer | null;
  productsRow: OrderProductRow[];
}
