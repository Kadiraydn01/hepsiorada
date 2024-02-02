import { combineReducers } from "redux";
import { SET_SELECTED_ADDRESS, SET_SELECTED_CARD } from "../action/ActionType";

const initialState = {
  selectedAddress: null,
};

const selectedAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ADDRESS:
      return { ...state, selectedAddress: action.payload };
    default:
      return state;
  }
};
const selectedCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CARD:
      return { ...state, selectedCard: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  selectedAddress: selectedAddressReducer,
  selectedCard: selectedCardReducer,
});
