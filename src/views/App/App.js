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


//import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
//import LoginPage from "views/LoginPage/LoginPage"
 import ProductPage from "views/ProductPage/ProductPage.jsx";
 import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
 //import Admin from  "views/Admin/Admin.js";
  import AdminDashboard from "../AdminDashboard/AdminDashboard.js";
    import AdminOrders from "views/AdminOrders/AdminOrders.js";
import { Admin } from "../Admin/Admin";
//import example from "views/EcommercePage/images"




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
            {/* <Route exact path="/" component={ContactUsPage} /> */}
            <Route exact path="/catalog" component={EcommercePage} />
            <Route path="/landing-page" component={LandingPage} />
            {/* <Route path="/" component={LoginPage} /> */}
            {/* <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} /> */}
            <Route path="/product" component={ProductPage} />
            {/* <Route path="/sections" component={SectionsPage} /> */}
            <Route
              path="/shopping-cart-page"
              component={ShoppingCartPage}
            />
            {/* <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={PresentationPage} /> */}

            <Route render={() => <h1>404</h1>} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default connect()(App);


