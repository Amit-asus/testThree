import { all } from "redux-saga/effects";

import authSaga from "../Features/auth/saga";

export default function* rootSaga() {
  yield all([
        ...authSaga,
  ]);
}
