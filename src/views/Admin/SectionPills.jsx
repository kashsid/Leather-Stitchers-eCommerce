import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
//import Header from "components/Header/Header.jsx";
//import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminOrders from "../AdminOrders/AdminOrders";
import AdminCollections from "../AdminCollections/AdminCollections";
import AddProduct from "../AddProduct/AddProduct";
import MediaCapture from "./MediaCapture"



function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <>
     
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
            <NavPills
              alignCenter
              tabs={[
                {
                  tabButton: "Products",
                  tabContent: <AdminDashboard />
                },
                {
                  tabButton: "Orders",
                  tabContent: <AdminOrders />
                },
                {
                  tabButton: "Collections",
                  tabContent: <AdminCollections />
                },
                // FOR STRETCH MODE*********************
                {
                  tabButton: "Add Product",
                  tabContent: <AddProduct />
                },
                {
                  tabButton: "Business",
                  tabContent: <MediaCapture />
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
