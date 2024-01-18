import { combineReducers } from "redux";
import { SET_SELECTED_ADDRESS } from "../action/ActionType";

const selectedAddressReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  selectedAddress: selectedAddressReducer,
});
