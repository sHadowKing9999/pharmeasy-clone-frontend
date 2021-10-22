import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import pReducer from "./reducers/persistReducer";
export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
