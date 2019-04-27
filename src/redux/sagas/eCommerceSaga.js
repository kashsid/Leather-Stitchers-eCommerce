import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchProduct(action) {
  console.log("this is eComm saga");
  // try {
  //     const products = yield axios.get("/products");
  //     console.log('this is fetch products',products.data);
  //     yield put({ type: "SET_PRODUCTS", payload: products.data });
  try {
    const selectedproduct = yield axios.get("/product/" + action.payload);
    console.log("this is fetch product for one product", selectedproduct.data);
    yield put({ type: "SET_PRODUCT", payload: selectedproduct.data });
  } catch (err) {
    console.log(`couldn't fetch selected product`, err);
  }
}

function* fetchImages(action) {
  try {
    const selectedImages = yield axios.get("/images/" + action.payload);
    console.log(
      "this is fetch product for one product images",
      selectedImages.data
    );
    yield put({ type: "SET_IMAGES", payload: selectedImages.data });
  } catch (err) {
    console.log(`couldn't fetch  Images for selected product`, err);
  }
}
function* selectedProductSaga() {
  yield takeEvery("FETCH_PRODUCT", fetchProduct);
  yield takeEvery("FETCH_IMAGES", fetchImages);
}
export default selectedProductSaga;
