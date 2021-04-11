import { http } from "../http";

export interface ProductData {
  ar_codart: string;
  ar_descr: string;
  ar_price: number;
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
}

export const mapProductFromServer = (
  products: ProductDataFromServer
): ProductData => ({
  ...products,
});