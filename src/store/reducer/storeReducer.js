import { SET_STORE_INFO } from "../action/ActionType";
const storeStateInitial = {
  storeInfo: "",
};

const storeReducer = (state = storeStateInitial, action) => {
  switch (action.type) {
    // todo: settter method
    case SET_STORE_INFO:
      return {
        ...state,
        storeInfo: action.payload,
      };
    default:
      return state;
  }
};
export default storeReducer;
