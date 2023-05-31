import { all, fork } from "redux-saga/effects";
import homeSaga from "./home/Saga";

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
