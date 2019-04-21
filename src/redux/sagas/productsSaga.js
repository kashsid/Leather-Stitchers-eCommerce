import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


function* fetchProducts() {
  try {
    const products = yield axios.get("/products");
    console.log(products.data);
    yield put({ type: "SET_PRODUCTS", payload: products.data });
  } catch (err) {
    console.log(`couldn't fetch products`, err);
  }
}

function* productsSaga() {
  yield takeEvery("FETCH_PRODUCTS", fetchProducts);
}

export default productsSaga;