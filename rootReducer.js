import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

//Import reducer from each folder here:

// import loginReducer from "./login/reducer"
// import registerReducer from "./register/reducer"
//.....

const rootPersistConfig = {
  key: "root",
  storage: storage
  // whitelist: ["loginReducer", "dashboardReducer"]
}
// const walletReducerPersistConfig = {
//   key: "walletReducer",
//   storage: storage,
//   whitelist: ["proUserLogin"]
// }

const rootReducer = combineReducers({
  // loginReducer: loginReducer,
  // registerReducer: registerReducer,
  // ....
})

export default persistReducer(rootPersistConfig, rootReducer)
