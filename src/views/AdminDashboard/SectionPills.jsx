import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";


import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import AdminDashboard from "./AdminDashboard";
import AdminOrders from "../AdminOrders/AdminOrders";


function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: "Products",
                tabContent: ""
              },
              {
                tabButton: "Orders",
                tabContent: ""
              },
              {
                tabButton: "Collections",
                tabContent: ""
              },
              {
                tabButton: "Customers",
                tabContent: ""
              },
              {
                tabButton: "Business",
                tabContent: ""
              }
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
    
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
