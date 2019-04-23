import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


function* fetchProducts() {
  try {
    const products = yield axios.get("/products");
    console.log('this is fetch products',products.data);
    yield put({ type: "SET_PRODUCTS", payload: products.data });
  } catch (err) {
    console.log(`couldn't fetch products`, err);
  }
}
//end axios DELETE request to server and re-fetch all items from 'products' table on database
function* deleteProduct(action) {
  try {
    yield axios.delete("/product/" + action.payload);
    yield put({ type: "FETCH_PRODUCTS" });
  } catch (err) {
    console.log(`couldn't delete product`, err);
  }
}
// send axios POST request to server with payload from 'AdminForm' submit and re-fetch all items from 'projects' table
// depending on whether item was successfully added to database a 'true' or 'false' payload will be sent to the 'confirmPost' reducer
// to deteremine which message will be shown on admin snackbar
function* postProduct(action) {
  try {
    yield axios.post("/product", action.payload);
    yield put({ type: "FETCH_PRODUCTS" });
    yield put({ type: "CONFIRM_POST", payload: true });
  } catch (err) {
    yield put({ type: "CONFIRM_POST", payload: false });
    console.log(`couldn't add product`, err);
  }
}
function* productsSaga() {
  yield takeEvery("FETCH_PRODUCTS", fetchProducts);
  yield takeEvery("POST_PRODUCT", postProduct);
  yield takeEvery("DELETE_PRODUCT", deleteProduct);
}

export default productsSaga;