import { api } from "../storeApi";
import {
  FETCH_STATES_FAILURE,
  FETCH_STATES_REQUEST,
  FETCH_STATES_SUCCESS,
} from "./ActionType";

export const productsActions = Object.freeze({
  setProducts: "SET_PRODUCTS",
});

export const fetchProducts = (params) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATES_REQUEST });

    try {
      const response = await api.get("/products", { params });
      const productsData = response.data;

      dispatch({ type: FETCH_STATES_SUCCESS });
      dispatch(setProducts(productsData.products));
      console.log(productsData.products);
    } catch (error) {
      dispatch({ type: FETCH_STATES_FAILURE, payload: error.message });
    }
  };
};

export const setProducts = (products) => ({
  type: productsActions.setProducts,
  payload: products,
});
