const userStateInitial = {
  user: null,
  loading: false,
  error: null,
  updateUser: false,
  gravatarUrl: null,
};

const userReducer = (state = userStateInitial, action) => {
  switch (action.type) {
    case "SET_USER_SUCCESS":
      return { ...state, loading: false, user: action.payload, error: null };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    case "SET_GRAVATAR_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        gravatarUrl: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
