import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchOrders() {
  try {
    const orders = yield axios.get("/orders");
    console.log("this is fetch orders", orders.data);
    yield put({ type: "SET_ORDERS", payload: orders.data });
  } catch (err) {
    console.log(`couldn't fetch orders`, err);
  }
}

function* postOrder(action) {
  try {
    yield axios.post("/orders", action.payload);
   console.log('this is Post order', action.payload);
   
  } catch (err) {
   
    console.log(`couldn't add order`, err);
  }
}

function* ordersSaga() {
  yield takeEvery("FETCH_ORDERS", fetchOrders);
  yield takeEvery("POST_ORDER", postOrder);
  
}

export default ordersSaga;
