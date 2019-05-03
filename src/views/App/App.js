// import React, { Component } from "react";
// import { HashRouter as Router, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import { Switch } from "react-router";
// import { connect } from "react-redux";
import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { connect } from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import CustomerCare from "views/CustomerCare/CustomerCare";
 import ProductPage from "views/ProductPage/ProductPage.jsx";
  import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import CheckOutPage from "views/CheckOutPage/CheckOutPage.jsx"
 import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
 //import Admin from  "views/Admin/Admin.js";
  import AdminDashboard from "../AdminDashboard/AdminDashboard.js";
    import AdminOrders from "views/AdminOrders/AdminOrders.js";
import { Admin } from "../Admin/Admin";
import Payment from"../Payment/Payment";
import OrderSuccess from "../Payment/success-page"

//import example from "views/EcommercePage/images"
 //import test from "views/ShoppingCartPage/test.jsx";





// var hist = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      // <Router history={hist}>
      <Router>
        <>
          <Switch>
            <Redirect exact from="/" to="/home" />
            {/* <ProtectedRoute exact path="/home" component={LandingPage} /> */}
            <ProtectedRoute exact path="/home" component={Admin} />
            {/* <ProtectedRoute exact path="/home" component={UserPage} /> */}
            {/* <Route path="/about-us" component={AboutUsPage} />
            <Route path="/blog-post" component={BlogPostPage} />
            <Route path="/blog-posts" component={BlogPostsPage} />
            <Route path="/components" component={ComponentsPage} /> */}
            <Route exact path="/contact-us" component={ContactUsPage} />
            <Route exact path="/catalog" component={EcommercePage} />
            <Route exact path="/landing-page" component={LandingPage} />
            <Route exact path="/error-page" component={ErrorPage} />
            {/* <Route path="/" component={LoginPage} /> */}
            {/* <Route path="/pricing" component={PricingPage} />
            <Route path="/profile-page" component={ProfilePage} /> */}
            <Route path="/product/:product_id" component={ProductPage} />
            {/* <Route path="/sections" component={SectionsPage} /> */}
            <Route path="/shopping-cart" component={ShoppingCartPage} />
            <Route path="/checkout" component={CheckOutPage} />
            <Route path="/payment" component={Payment} />
            <Route exact path="/products" component={AdminDashboard} />
            <Route exact path="/order-success" component={OrderSuccess} />
            <Route exact path="/customer-care" component={CustomerCare} />

            {/* <Route path="/signup-page" component={SignupPage} />
            <Route path="/error-page" component={ErrorPage} />
            <Route path="/" component={PresentationPage} /> */}
            {/* <Route render={ErrorPage} /> */}
          </Switch>
        </>
      </Router>
    );
  }
}

export default connect()(App);


