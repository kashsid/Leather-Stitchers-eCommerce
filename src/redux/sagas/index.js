import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import productsSaga from './productsSaga';
import ordersSaga from "./ordersSaga";
import collectionsSaga from "./collectionsSaga";
import selectedProductSaga from "./eCommerceSaga";
//import shoppingCartSaga from "./shoppingCartSaga"


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    productsSaga(),
    ordersSaga(),
    collectionsSaga(),
    selectedProductSaga(),
    //shoppingCartSaga(),
    
  ]);
}
