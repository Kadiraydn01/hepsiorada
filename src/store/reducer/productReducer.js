export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING", // Corrected typo in "FETCHING"
  fetched: "FETCHED",
  failed: "FAILED",
};

const initialState = {
  products: [],
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        fetchState: FETCH_STATES.fetching,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        productList: action.payload.products,
        totalProductCount: action.payload.total,
        fetchState: FETCH_STATES.fetched,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        fetchState: FETCH_STATES.failed,
      };
    default:
      return state;
  }
};

export default productReducer;
