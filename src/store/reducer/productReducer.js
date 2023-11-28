export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
  failed: "FAILED",
};

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productReducer;
