import { put, takeLatest } from "redux-saga/effects";
import { performCounterReset, reset } from "./slice";

function* counterHandler() {
  try {
    console.log("usao");
    yield put(reset());
  } catch (error) {
    console.log(error);
  }
}
export function* watchResetCounter() {
  yield takeLatest(performCounterReset.type, counterHandler);
}