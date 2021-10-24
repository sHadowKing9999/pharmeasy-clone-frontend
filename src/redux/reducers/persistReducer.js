import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import basketReducer from "./basketReducer";
import feedReducer from "./feedReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import navbarReducer from "./navbarReducer";
const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["basket"],
  stateReconciler: autoMergeLevel2,
};

const authPersistConfig = {
  key: "login",
  storage: storage,
  whitelist: ["token"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  login: persistReducer(authPersistConfig, loginReducer),
  feed: feedReducer,
  basket: basketReducer,
  navbar: navbarReducer,
  signup: signupReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
