/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
//import Apps from "@material-ui/icons/Apps";
import Style from "@material-ui/icons/Style";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Public from "@material-ui/icons/Public";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";

import Layers from "@material-ui/icons/Layers";
import LineStyle from "@material-ui/icons/LineStyle";
//import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
 // var onClickSections = {};

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Product Catalog"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Style}
          dropdownList={[
            <Link to="/catalog" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Biker Jackets
              Collection
            </Link>,
            <Link to="/catalog" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              Movie Jackets Collection
            </Link>,
            <Link to="/catalog" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              Fashion Jackets Collection
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Leather Stitchers"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link
              to="/landing-page"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "headers")}
            >
              <Dns className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link
              to="/customer-care"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "features")}
            >
              <Public className={classes.dropdownIcons} /> Mission
            </Link>,
            <Link
              to="/error-page"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "blogs")}
            >
              <ListIcon className={classes.dropdownIcons} /> Blogs
            </Link>,
            <Link
              to="/error-page"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "teams")}
            >
              <People className={classes.dropdownIcons} /> Teams
            </Link>,
            <Link
              to="/error-page"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "projects")}
            >
              <Assignment className={classes.dropdownIcons} /> Clients
            </Link>,
            <Link
              to="/error-page"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "pricing")}
            >
              <MonetizationOn className={classes.dropdownIcons} /> Pricing
            </Link>,
            <Link
              to="/error-page"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "testimonials")}
            >
              <Chat className={classes.dropdownIcons} /> Testimonials
            </Link>,
            <Link
              to="/contact-us"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "contacts")}
            >
              <Call className={classes.dropdownIcons} /> Contacts
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color={window.innerWidth < 960 ? "info" : "white"}
          //target="_blank"
          className={classes.navButton}
          round
          onClick={() => props.dispatch({ type: "LOGOUT" })}
          //onClick={this.LogOutButton}
        >
          <ShoppingCart className={classes.icons} /> Log Out
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "dark"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
const mapStateToProps = reduxState => {
  return reduxState;
};
export default withStyles(headerLinksStyle)(connect(mapStateToProps)(HeaderLinks))
