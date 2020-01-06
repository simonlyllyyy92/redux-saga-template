import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"
import createSagaMiddleware from "redux-saga"
import { persistStore } from "redux-persist"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//create root reducer

//set store persist

const store = createStore(rootReducer, enhancer)
let persistor = persistStore(store)

//import the root saga and run this saga
sagaMiddleware.run(rootSaga)

export default () => {
  return { store, persistor }
}
