import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch } from "react-router";
import { connect } from "react-redux";

import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
 import ProductPage from "views/ProductPage/ProductPage.jsx";
 import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";


var hist = createBrowserHistory();

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        
        
      <Router history={hist}>
      <>
    {/* <Switch> */}
      {/* <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} /> */}
      <Route exact path="/" component={ContactUsPage} />
      <Route exact path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      {/* <Route path="/login-page" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/product-page" component={ProductPage} />
      {/* <Route path="/sections" component={SectionsPage} /> */}
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      {/* <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={PresentationPage} /> */}
    {/* </Switch> */}
    </>
  </Router>
    );
  }
}

export default connect()(App);


