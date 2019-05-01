import React, { Component } from "react";
//import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "components/Footer/Footer.jsx";
import Favorite from "@material-ui/icons/Favorite";
//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import SectionPills from "./SectionPills.jsx";
//import AdminDashboard from "../AdminDashboard/AdminDashboard.js";
//import MediaCapture from "./MediaCapture";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 8,
    overflowX: "auto"
  },
  iconHover: {
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
});

export class Admin extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Header
          brand="Leather Stitchers---ADMIN PORTAL"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 700,
            color: "info"
          }}
        />
        <Parallax
          image={require("assets/img/bg10.jpg")}
          filter="dark"
          small
        />

        <SectionPills />
        
      </>
    );
  }
}

export default withStyles(styles)(Admin);
