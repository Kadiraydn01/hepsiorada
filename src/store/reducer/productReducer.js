import { productActions } from "../action/productAction";
export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
  failed: "FAILED",
};

const initialState = {
  productList: [],
  loading: false,
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
  currentCategory: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.set:
      return {
        ...state,
        productList: action.payload,
      };

    case productActions.clear:
      return initialState;
    case productActions.setCategory:
      return { ...state, currentCategory: action.payload };

    case productActions.add:
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };

    case productActions.delete:
      return {
        ...state,
        productList: state.productList.filter(
          (pro) => pro.id !== action.payload
        ),
      };

    case productActions.setLoading:
      return { ...state, loading: action.payload };

    case productActions.setFetchState:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};

export default productReducer;
