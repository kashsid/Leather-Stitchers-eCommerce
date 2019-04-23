import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPills from "./SectionPills.jsx";

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
      <div>
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
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.textCenter}
              >
                <h2 className={classes.title}>
                 {/* A Place for Entrepreneurs to Share and Discover New
                  Stories  */}
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <SectionPills/>
      </div>
    )
  }
}

export default withStyles(styles)(Admin);
