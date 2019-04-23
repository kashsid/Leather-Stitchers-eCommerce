import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import SectionPills from "./SectionPills.jsx";
import AdminDashboard from "../AdminDashboard/AdminDashboard.js";

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
        
       
        <SectionPills />
        
      </>
    );
  }
}
// const mapReduxStateToProps = reduxState => {
//   return reduxState;
// };

// export default withStyles(styles)(
//   connect(mapReduxStateToProps)(Admin)
// );
export default withStyles(styles)(Admin);
