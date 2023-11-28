import { api } from "../storeApi";
import {
  FETCH_STATES_FAILURE,
  FETCH_STATES_REQUEST,
  FETCH_STATES_SUCCESS,
} from "./ActionType";

export const singupActions = Object.freeze({
  setRoles: "SET_ROLES",
});

export const fetchRoles = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATES_REQUEST });

    try {
      const response = await api.get("/roles");
      const roles = response.data;

      dispatch({ type: FETCH_STATES_SUCCESS });
      dispatch(changeRoles(roles));
    } catch (error) {
      dispatch({ type: FETCH_STATES_FAILURE, payload: error.message });
    }
  };
};

export const changeRoles = (roles) => {
  return { type: singupActions.setRoles, payload: roles };
};
