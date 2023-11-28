import { singupActions } from "../action/action";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case singupActions.setRoles:
      return { ...state, roles: action.payload };

    default:
      return state;
  }
};

export default globalReducer;
