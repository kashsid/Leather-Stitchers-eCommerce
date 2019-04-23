import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchCollections() {
  try {
    const collections = yield axios.get("/collections");
    console.log("this is fetch collections", collections.data);
    yield put({ type: "SET_COLLECTIONS", payload: collections.data });
  } catch (err) {
    console.log(`couldn't fetch collection`, err);
  }
}
function* collectionsSaga() {
  yield takeEvery("FETCH_COLLECTIONS", fetchCollections);
}

export default collectionsSaga;
