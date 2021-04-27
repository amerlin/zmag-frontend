import { Store, createStore, combineReducers } from "redux";
import { ProductData } from "./ProductData";
import { CustomerData } from "./CustomerData";
import { OrderData } from "./OrderData";
import { OrderProductRow } from "./OrderProductRow";

//General State
interface GeneralState {
  readonly showLoading: boolean; //loading
  readonly showModalProduct: boolean; //modal product is visibile
  readonly showModalCustomer: boolean; //modal customer is visible
  readonly selectedProduct: ProductData | null; //selected value from modal grid to grid
  readonly selectedCustomer: CustomerData | null; //select customer from modal grid to grid
  readonly currentOrder: OrderData; //current order
  readonly isNewOrder: boolean; //is new order
}

//initial configuration
const initialGeneralState: GeneralState = {
  showLoading: false,
  currentOrder: createEmptyOrderData(),
  selectedProduct: null,
  selectedCustomer: null,
  showModalProduct: false,
  showModalCustomer: false,
  isNewOrder: false,
};

//create empty order
function createEmptyOrderData(): OrderData {
  var newOrder: OrderData = {
    id: 0,
    year: 0,
    productsRow: [],
    customer: null,
    total: 0,
    totalWithVat: 0,
    note: "",
  };
  return newOrder;
}

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

//Got customer
export const GOTCUSTOMER = "GotCustomer";
export const gotCustomerAction = (customer: CustomerData | null) =>
  ({
    type: GOTCUSTOMER,
    customer: customer,
    showModalCustomer: false,
  } as const);

//get order
export const GETTINGORDER = "GettingOrder";
export const gettingOrderAction = () =>
  ({
    type: GETTINGORDER,
  } as const);

//got order
export const GOTORDER = "GotOrder";
export const gotOrderAction = (
  order: OrderData | null,
  customer: CustomerData | null
) =>
  ({
    type: GOTORDER,
    order: order,
    customer: customer,
    showModalCustomer: false,
  } as const);

//GET PRODUCT MODAL STATE
export const GETMODALPRODUCT = "GetModalProduction";
export const getShowModalProductAction = () =>
  ({
    type: GETMODALPRODUCT,
  } as const);

//SET PRODUCT MODAL STATE
export const GOTMODALPRODUCT = "GotModalProduction";
export const gotShowModalProductAction = (status: boolean) =>
  ({
    type: GOTMODALPRODUCT,
    showModalProduct: status,
  } as const);

//SET CUSTOMER MODAL STATUS
export const GETMODALCUSTOMER = "GetModalCustomer";
export const getShowModalCustomerAction = (status: boolean) =>
  ({
    type: GETMODALCUSTOMER,
  } as const);

//GET CUSTOMER MODAL STATUS
export const GOTMODALCUSTOMER = "GotModalCustomer";
export const gotShowModalCustomerAction = (status: boolean) =>
  ({
    type: GOTMODALCUSTOMER,
    showModalCustomer: status,
  } as const);

//GET CURRENT ORDER
export const GETFULLORDER = "GetCurrentOrderWithGrid";
export const gettingCurrentOrderWithGridAction = () =>
  ({
    type: GETFULLORDER,
  } as const);

//ADD NEW PRODUCT IN GRID (UPDATE TOTAL DOC AND TOTAL DOC WITH VAT)
export const GOTCURRENTFULLORDER = "GotCurrentOrderWithGrid";
export const gottingCurrentOrderWithGridAction = (currentOrder: OrderData) =>
  ({
    type: GOTCURRENTFULLORDER,
    currentOrder: currentOrder,
  } as const);

//GOT TOTAL GRID (EURO)
//Questa parte di codice deve essere modificata
export const GOTORDERTOTAL = "GotCurrentTotalsGrid";
export const gottingCurrentTotalsGridAction = (
  total: number,
  totalWithVat: number,
  oldTotal: number,
  oldTotalWithVat: number
) =>
  ({
    type: GOTORDERTOTAL,
    total: total,
    totalWithVat: totalWithVat,
    oldTotal: oldTotal,
    oldTotalWithVat: oldTotalWithVat,
  } as const);

//DELETE ELEMENT IN GRID
export const GOTDELETEPRODUCTSGRID = "GotDeleteProductGrid";
export const gottingDeleteProductGridAction = (
  products: OrderProductRow[],
  total: number,
  totalWithVat: number
) =>
  ({
    type: GOTDELETEPRODUCTSGRID,
    products: products,
    total: total,
    totalWithVat: totalWithVat,
  } as const);

//Action type
type ZmagActions =
  | ReturnType<typeof gettingProductsAction> //products
  | ReturnType<typeof gotProductsAction>
  | ReturnType<typeof gettingProductAction> //product
  | ReturnType<typeof gotProductAction>
  | ReturnType<typeof getShowModalProductAction> //modal
  | ReturnType<typeof gotShowModalProductAction>
  | ReturnType<typeof getShowModalCustomerAction>
  | ReturnType<typeof gotShowModalCustomerAction>
  | ReturnType<typeof gotCustomerAction> //customer
  | ReturnType<typeof gettingCustomerAction>
  | ReturnType<typeof gettingCurrentOrderWithGridAction> //order
  | ReturnType<typeof gottingCurrentOrderWithGridAction>
  | ReturnType<typeof gottingDeleteProductGridAction>
  | ReturnType<typeof gotOrderAction>
  | ReturnType<typeof gottingCurrentTotalsGridAction>
  | ReturnType<typeof gettingOrderAction>;

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

    //UPDATE CURRENT ORDER (CUSTOMER + GRID)
    case GOTCURRENTFULLORDER: {
      console.log(action.currentOrder);
      return {
        ...state,
        currentOrder: action.currentOrder,
      };
    }

    //GET CURRENT ORDER (CUSTOMER + GRID)
    case GETFULLORDER: {
      return {
        ...state,
      };
    }

    //GOT TOTAL CURRENT ORDER
    case GOTORDERTOTAL: {
      state.currentOrder.total = state.currentOrder.total - action.oldTotal;
      state.currentOrder.totalWithVat =
        state.currentOrder.totalWithVat - action.oldTotalWithVat;
      state.currentOrder.total += action.total;
      state.currentOrder.totalWithVat += action.totalWithVat;
      return {
        ...state,
      };
    }

    //DELETE PRODUCT
    case GOTDELETEPRODUCTSGRID: {
      state.currentOrder.total = state.currentOrder.total - action.total;
      state.currentOrder.totalWithVat =
        state.currentOrder.totalWithVat - action.totalWithVat;
      state.currentOrder.productsRow = action.products;
      return {
        ...state,
      };
    }
    case GETTINGORDER: {
      return {
        ...state,
      };
    }

    case GOTORDER: {
      return {
        ...state,
        currentOrder: action.order,
        selectedCustomer: action.customer,
        showModalCustomer: false,
      };
    }
    default:
      return state;
  }
};

//root creation
const rootReducer = combineReducers({
  zmagState: ZmagReducer,
});

//reducer creation
export function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
