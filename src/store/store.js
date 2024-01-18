import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import globalReducer from "./reducer/globalReducer";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import shoppingCartReducer from "./reducer/shoppingCartReducer";
import storeReducer from "./reducer/storeReducer";
import orderReducer from "./reducer/orderReducer";

const rootReducer = combineReducers({
  order: orderReducer,
  global: globalReducer,
  user: userReducer,
  products: productReducer,
  shoppingCart: shoppingCartReducer,
  store: storeReducer,
});

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
