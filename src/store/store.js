import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

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

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["order"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
