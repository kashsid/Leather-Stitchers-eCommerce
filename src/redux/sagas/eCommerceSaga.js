import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchProduct(action) {
console.log('this is eComm saga');
// try {
//     const products = yield axios.get("/products");
//     console.log('this is fetch products',products.data);
//     yield put({ type: "SET_PRODUCTS", payload: products.data });
  try {
    const selectedproduct = yield axios.get("/selectedproduct/" + action.payload);
    console.log("this is fetch product for one product", selectedproduct.data);
    yield put({ type: "SET_PRODUCT", payload: selectedproduct.data });
  } catch (err) {
    console.log(`couldn't fetch selected product`, err);
    
  }
}
function* selectedProductSaga() {
  yield takeEvery("FETCH_PRODUCT", fetchProduct);
}
export default selectedProductSaga;
