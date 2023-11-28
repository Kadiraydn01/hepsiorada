const userStateInitial = {
  user: null,
  fetchState: "NOT_FETCHED",
};

const userReducer = (state = userStateInitial, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};
export default userReducer;
