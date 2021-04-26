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
