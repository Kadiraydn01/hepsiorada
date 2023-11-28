import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import globalReducer from "./reducer/globalReducer";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import shoppingCartReducer from "./reducer/shoppingCartReducer";
import storeReducer from "./reducer/storeReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  store: storeReducer,
});

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
