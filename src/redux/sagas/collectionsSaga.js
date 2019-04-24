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

function* featureCollection(action) {
  try {
    yield axios.put("/collections/" + action.payload);
    yield put({ type: "FETCH_COLLECTIONS" });
  } catch (err) {
    console.log(`couldn't feature Collection`, err);
  }
}
function* collectionsSaga() {
  yield takeEvery("FETCH_COLLECTIONS", fetchCollections);
  yield takeEvery("FEATURE_COLLECTION", featureCollection);
}

export default collectionsSaga;
