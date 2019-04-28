import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI imports
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";
// import Header from "components/Header/Header.jsx";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import SectionPills from "./SectionPills.jsx";

// defined custom table to be used with Material UI
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 14
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

// Defined styles for MUI
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

class AdminOrders extends Component {
  state = {
    open: false,
    selectedId: ""
  };
  // send fetch dispatch to redux which will return all items from 'Orders' table on database
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_ORDERS" });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Order Id</CustomTableCell>
                <CustomTableCell align="center" />

                <CustomTableCell>Order Date</CustomTableCell>
                <CustomTableCell align="center" />

                <CustomTableCell>Customer Name</CustomTableCell>
                <CustomTableCell align="left" />
                <CustomTableCell>Customer Comments</CustomTableCell>
                <CustomTableCell align="left" />
                <CustomTableCell>Shipping Method</CustomTableCell>
                <CustomTableCell align="left" />
              </TableRow>
            </TableHead>
            {/* {JSON.stringify(this.props.orders)} */}

            <TableBody>
              {this.props.orders.map(row => (
                <TableRow key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.order_id}
                  </CustomTableCell>
                  <CustomTableCell align="right" />

                  <CustomTableCell component="th" scope="row">
                    {moment(row.order_date).format("MMM DD, YYYY")}
                  </CustomTableCell>
                  <CustomTableCell align="center" />

                  <CustomTableCell component="th" scope="row">
                    {row.customer_first_name + " " + row.customer_last_name}
                  </CustomTableCell>
                  <CustomTableCell align="left" />

                  <CustomTableCell component="th" scope="row">
                    {row.order_comments}
                  </CustomTableCell>
                  <CustomTableCell align="left" />

                  <CustomTableCell component="th" scope="row">
                    {row.shipping_method_desc}
                  </CustomTableCell>
                  <CustomTableCell align="left">
                    <IconButton
                      className={classes.iconHover}
                      // onClick={this.handleDeleteClick(row.id)}
                      aria-label="Delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default withStyles(styles)(connect(mapReduxStateToProps)(AdminOrders));
