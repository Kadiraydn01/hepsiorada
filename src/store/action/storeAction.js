import { SET_STORE_INFO } from "./actionTypes";

export const setStoreInfo = (info) => ({
  type: SET_STORE_INFO,
  payload: info,
});
