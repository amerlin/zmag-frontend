import { Store, createStore, combineReducers } from "redux";
import { ProductData } from "./ProductData";
import { CustomerData } from "./CustomerData";
import { OrderData } from "./OrderData";

//General State
interface GeneralState {
  readonly ShowLoading: boolean;
  readonly showModalProduct: boolean;
  readonly showModalCustomer: boolean;
  readonly currentProductsGrid: ProductData[];
  readonly currentProductsGridTotal: number;
  readonly currentProductsGridTotalWithVat: number;
  readonly selectedProduct: ProductData | null;
  readonly selectedCustomer: CustomerData | null;
  readonly enableProductGrid: boolean; //non usata
  readonly products: ProductData[]; //non usata
  readonly customers: CustomerData[]; //non usata
  readonly currentOrder: OrderData | null; //non usata
}

//Initial
const initialGeneralState: GeneralState = {
  ShowLoading: false,
  currentProductsGrid: [],
  currentOrder: null,
  products: [],
  customers: [],
  selectedProduct: null,
  selectedCustomer: null,
  showModalProduct: false,
  showModalCustomer: false,
  enableProductGrid: false,
  currentProductsGridTotal: 0,
  currentProductsGridTotalWithVat: 0,
};

//AppState
export interface AppState {
  readonly zmagState: GeneralState;
}

//Get products
export const GETTINGPRODUCTS = "GettingProducts";
export const gettingProductsAction = () =>
  ({
    type: GETTINGPRODUCTS,
  } as const);

//Got products
export const GOTPRODUCTS = "GotProducts";
export const gotProductsAction = (products: ProductData[]) =>
  ({
    type: GOTPRODUCTS,
    products: products,
  } as const);

//Get product
export const GETTINGPRODUCT = "GettingProduct";
export const gettingProductAction = () =>
  ({
    type: GETTINGPRODUCT,
  } as const);

//Got product
export const GOTPRODUCT = "GotProduct";
export const gotProductAction = (product: ProductData | null) =>
  ({
    type: GOTPRODUCT,
    product: product,
    showModalProduct: false,
  } as const);

//Get product
export const GETTINGCUSTOMER = "GettingCustomer";
export const gettingCustomerAction = () =>
  ({
    type: GETTINGCUSTOMER,
  } as const);

//Got product
export const GOTCUSTOMER = "GotCustomer";
export const gotCustomerAction = (customer: CustomerData | null) =>
  ({
    type: GOTCUSTOMER,
    customer: customer,
    showModalCustomer: false,
  } as const);

//MODAL PRODUCT STATE
export const GETMODALPRODUCT = "GetModalProduction";
export const getShowModalProductAction = () =>
  ({
    type: GETMODALPRODUCT,
  } as const);

export const GOTMODALPRODUCT = "GotModalProduction";
export const gotShowModalProductAction = (status: boolean) =>
  ({
    type: GOTMODALPRODUCT,
    showModalProduct: status,
  } as const);

//MODAL CUSTOMER
export const GETMODALCUSTOMER = "GetModalCustomer";
export const getShowModalCustomerAction = (status: boolean) =>
  ({
    type: GETMODALCUSTOMER,
  } as const);

export const GOTMODALCUSTOMER = "GotModalCustomer";
export const gotShowModalCustomerAction = (status: boolean) =>
  ({
    type: GOTMODALCUSTOMER,
    showModalCustomer: status,
  } as const);

//CURRENT PRODUCTS GRID
export const GETCURRENTPRODUCTSGRID = "GetCurrentProductsGrid";
export const gettingCurrentProductsGridAction = () =>
  ({
    type: GETCURRENTPRODUCTSGRID,
  } as const);

export const GOTCURRENTPRODUCTSGRID = "GotCurrentProductsGrid";
export const gottingCurrentProductsGridAction = (
  product: ProductData[] | null
) =>
  ({
    type: GOTCURRENTPRODUCTSGRID,
    product: product,
  } as const);

export const GOTORDERTOTAL = "GotCurrentTotalsGrid";
export const gottingCurrentTotalsGridAction = (
  total: number,
  totalWithVat: number,
  oldTotal: number,
  oldTotalWithVat: number
) =>
  ({
    type: GOTORDERTOTAL,
    currentProductsGridTotal: total,
    currentProductsGridTotalWithVat: totalWithVat,
    oldTotal: oldTotal,
    oldTotalWithVat: oldTotalWithVat,
  } as const);

export const GOTDELETEPRODUCTSGRID = "GotDeleteProductGrid";
export const gottingDeleteProductGridAction = (
  product: ProductData,
  total: number,
  totalWithVat: number
) =>
  ({
    type: GOTDELETEPRODUCTSGRID,
    product: product,
    total: total,
    totalWithVat: totalWithVat,
  } as const);

//Action type
type ZmagActions =
  | ReturnType<typeof gettingProductsAction>
  | ReturnType<typeof gotProductsAction>
  | ReturnType<typeof gettingProductAction>
  | ReturnType<typeof gotProductAction>
  | ReturnType<typeof getShowModalProductAction>
  | ReturnType<typeof gotShowModalProductAction>
  | ReturnType<typeof getShowModalCustomerAction>
  | ReturnType<typeof gotCustomerAction>
  | ReturnType<typeof gettingCustomerAction>
  | ReturnType<typeof gettingCurrentProductsGridAction>
  | ReturnType<typeof gottingCurrentProductsGridAction>
  | ReturnType<typeof gottingCurrentTotalsGridAction>
  | ReturnType<typeof gottingDeleteProductGridAction>
  | ReturnType<typeof gotShowModalCustomerAction>;

//Reducer
const ZmagReducer = (state = initialGeneralState, action: ZmagActions) => {
  switch (action.type) {
    case GETTINGPRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GOTPRODUCTS: {
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    }
    case GETTINGPRODUCT: {
      return {
        ...state,
        selectedProduct: null,
        loading: true,
      };
    }
    case GOTPRODUCT: {
      return {
        ...state,
        selectedProduct: action.product,
        loading: false,
      };
    }
    case GETMODALPRODUCT: {
      return {
        ...state,
      };
    }
    case GOTMODALPRODUCT: {
      return {
        ...state,
        showModalProduct: action.showModalProduct,
      };
    }
    case GETMODALCUSTOMER: {
      return {
        ...state,
      };
    }
    case GOTMODALCUSTOMER: {
      return {
        ...state,
        showModalCustomer: action.showModalCustomer,
      };
    }
    case GETTINGCUSTOMER: {
      return {
        ...state,
        selectedCustomer: null,
        loading: true,
      };
    }
    case GOTCUSTOMER: {
      return {
        ...state,
        selectedCustomer: action.customer,
        showModalCustomer: false,
        loading: false,
      };
    }
    case GOTCURRENTPRODUCTSGRID: {
      //questa parte deve essere spostata nella logica
      action.product.ar_quant = 1;
      action.product.ar_total = 1 * action.product.ar_price;
      action.product.ar_totalWithVat =
        1 * action.product.ar_price +
        (1 * action.product.ar_price * action.product.ar_ivaperc) / 100;
      var total = state.currentProductsGridTotal + action.product.ar_total;
      var totalWithVat =
        state.currentProductsGridTotalWithVat + action.product.ar_totalWithVat;
      return {
        ...state,
        currentProductsGrid: [...state.currentProductsGrid, action.product],
        currentProductsGridTotal: total,
        currentProductsGridTotalWithVat: totalWithVat,
      };
    }
    case GETCURRENTPRODUCTSGRID: {
      return {
        ...state,
      };
    }
    case GOTORDERTOTAL: {
      var newTotal =
        state.currentProductsGridTotal -
        action.oldTotal +
        action.currentProductsGridTotal;

      var newTotalWithVat =
        state.currentProductsGridTotalWithVat -
        action.oldTotalWithVat +
        action.currentProductsGridTotalWithVat;

      return {
        ...state,
        currentProductsGridTotal: newTotal,
        currentProductsGridTotalWithVat: newTotalWithVat,
      };
    }
    case GOTDELETEPRODUCTSGRID: {
      var newTotal = state.currentProductsGridTotal - action.total;
      var newTotalWithVat =
        state.currentProductsGridTotalWithVat - action.totalWithVat;
      return {
        ...state,
        currentProductsGrid: action.product,
        currentProductsGridTotal: newTotal,
        currentProductsGridTotalWithVat: newTotalWithVat,
      };
    }
  }
  return state;
};

//root creation
const rootReducer = combineReducers<AppState>({
  zmagState: ZmagReducer,
});

//reducer creation
export function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
