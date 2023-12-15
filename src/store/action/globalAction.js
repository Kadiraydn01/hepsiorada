import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  SET_TOP_CATEGORIES,
} from "./ActionType";

import { api } from "../storeApi";

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  try {
    const { data } = await api.get("/categories");
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
    console.log("data", data);
    dispatch(setTopCategories(data.slice(0, 5)));
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
  }
};
export const setTopCategories = (topCategories) => ({
  type: SET_TOP_CATEGORIES,
  payload: topCategories,
});
