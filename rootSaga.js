import { all } from "redux-saga/effects"
import loginSaga from "./login/saga"
import registerSaga from "./register/saga"

export default function* rootSaga() {
  try {
    yield all([
      ...loginSaga,
      ...registerSaga
      //   ...exampleSagas,
    ])
  } catch (err) {
    // This is where error monitoring should go
    console.log("error caught in rootsaga::", err)
  }
}
