import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  SET_TOP_CATEGORIES,
} from "../action/ActionType";

const initialState = {
  roles: [],
  categories: [],
  topCategories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };

    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_TOP_CATEGORIES:
      return { ...state, topCategories: action.payload };

    default:
      return state;
  }
};

export default globalReducer;
