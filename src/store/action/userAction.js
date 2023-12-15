import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_GRAVATAR_SUCCESS,
  SET_USER_SUCCESS,
} from "./ActionType";
import { api } from "../storeApi";
import { fetchProducts } from "./productAction";

export const setUserDataSuccess = (userData) => ({
  type: SET_USER_SUCCESS,
  payload: userData,
});

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", loginData);
    console.log("login user", data);

    const userData = data;
    localStorage.setItem("token", userData.token);

    dispatch(setUserDataSuccess(data));
    dispatch(fetchProducts());

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const checkStoredToken = () => async (dispatch) => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    try {
      const { data } = await api.post("/checkToken", { token: storedToken });
      dispatch(setUserDataSuccess(data));

      const gravatarResponse = await api.get(`/getGravatar/${data.email}`);
      const gravatarUrl = gravatarResponse.data;

      dispatch({ type: SET_GRAVATAR_SUCCESS, payload: gravatarUrl });

      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      console.log("Token validation error:", error);

      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");

  delete api.defaults.headers.common["Authorization"];

  dispatch({ type: "LOGOUT" });
};

export const verifyToken = () => async (dispatch) => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    api.defaults.headers.common["Authorization"] = storedToken;

    try {
      const { data } = await api.get("/verify");
      dispatch(setUserDataSuccess(data));

      localStorage.setItem("token", data.token);

      api.defaults.headers.common["Authorization"] = data.token;
    } catch (error) {
      console.error("Token verification failed:", error);

      dispatch(logoutUser());
    }
  }
};
