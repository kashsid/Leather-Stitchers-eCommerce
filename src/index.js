import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./redux/reducers"; // imports ./redux/reducers/index.js
import rootSaga from "./redux/sagas"; // imports ./redux/sagas/index.js

import App from "./views/App/App";

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./views/App/App"
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router";
// import axios from "axios";


// import { takeEvery, put } from "redux-saga/effects";
// Import saga middleware
// import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
//import { takeEvery, put } from "redux-saga/effects";
// Import saga middleware
//import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
//import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js
import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this product
// import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
// import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
// import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
// import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
//  import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
//  import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
// import LandingPage from "views/LandingPage/LandingPage.jsx";
// import LoginPage from "views/LoginPage/LoginPage.jsx";
// import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
// import PricingPage from "views/PricingPage/PricingPage.jsx";
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
 //import ProductPage from "views/ProductPage/ProductPage.jsx";
// import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
 //import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
// import SignupPage from "views/SignupPage/SignupPage.jsx";
// import ErrorPage from "views/ErrorPage/ErrorPage.jsx";

// var hist = createBrowserHistory();

// const middlewareList =
//   process.env.NODE_ENV === "development"
//     ? [sagaMiddleware, logger]
//     : [sagaMiddleware];
// const store = createStore(() => {
//   rootReducer,
//   applyMiddleware(...middlewareList),
// });

// USING OLD STRUCTURE*********
// function* rootSaga() {
//   yield takeEvery("FETCH_PRODUCTS", fetchProducts);
  
// }
// function* fetchProducts() {
//   try {
//     const products = yield axios.get("/ecommerce-page");
//     console.log('infetch products');
//     yield put({ type: "SET_PRODUCTS", payload: products.data });
//     console.log('the data is ',products.data);
    
//   } catch (err) {
//     console.log(`couldn't fetch projects`, err);
//   }
// }
// const sagaMiddleware = createSagaMiddleware();
// const products = (state = [], action) => {
//   console.log("inside reducer", action.type);
//   switch (action.type) {
//     case "SET_PRODUCTS":
//       console.log("Alright");
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const store = createStore(
  
//   combineReducers({
//     products

//   }),
//   // Add sagaMiddleware to our store
//   applyMiddleware(sagaMiddleware, logger)
// );





// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
//sagaMiddleware.run(rootSaga);

//ReactDOM.render(
  // <Router history={hist}>
  //   <Switch>
  //     {/* <Route path="/about-us" component={AboutUsPage} />
  //     <Route path="/blog-post" component={BlogPostPage} />
  //     <Route path="/blog-posts" component={BlogPostsPage} />
  //     <Route path="/components" component={ComponentsPage} /> */}
  //     <Route path="/contact-us" component={ContactUsPage} />
  //     <Route path="/ecommerce-page" component={EcommercePage} />
  //     <Route path="/landing-page" component={LandingPage} />
  //     {/* <Route path="/login-page" component={LoginPage} />
  //     <Route path="/pricing" component={PricingPage} />
  //     <Route path="/profile-page" component={ProfilePage} /> */}
  //     <Route path="/product-page" component={ProductPage} />
  //     {/* <Route path="/sections" component={SectionsPage} /> */}
  //     <Route path="/shopping-cart-page" component={ShoppingCartPage} />
  //     {/* <Route path="/signup-page" component={SignupPage} />
  //     <Route path="/error-page" component={ErrorPage} />
  //     <Route path="/" component={PresentationPage} /> */}
  //   </Switch>
  // </Router>,
  // <Provider store={store}>
//     <Provider >
//    <App/>
//   </Provider>,
//   document.getElementById('root'),
// );
//   document.getElementById("root")
// );
const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList)
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);