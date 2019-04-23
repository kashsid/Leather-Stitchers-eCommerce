import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI imports
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
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
  // Handle delete button click action to delete the selected Orders from table
  // handleDeleteClick = id => () => {
  //   console.log("delete click for id", id);
  //   this.setState({
  //     open: true,
  //     selectedId: id
  //   });
  // };
  // //shows confirmation message before deleting the product from database
  // deleteDialog = () => {
  //   return (
  //     <Dialog
  //       open={this.state.open}
  //       onClose={this.handleClose}
  //       aria-labelledby="alert-dialog-title"
  //       aria-describedby="alert-dialog-description"
  //     >
  //       <DialogTitle id="alert-dialog-title">{"Please Confirm"}</DialogTitle>
  //       <DialogContent>
  //         <DialogContentText id="alert-dialog-description">
  //           Are you sure you want to delete this product from the database?
  //         </DialogContentText>
  //       </DialogContent>
  //       <DialogActions>
  //         <Button
  //           onClick={this.handleDeleteConfirm("disagree")}
  //           color="primary"
  //         >
  //           Disagree
  //         </Button>
  //         <Button
  //           onClick={this.handleDeleteConfirm("agree")}
  //           color="primary"
  //           autoFocus
  //         >
  //           Agree
  //         </Button>
  //       </DialogActions>
  //     </Dialog>
  //   );
  // };

  // handleDeleteConfirm = confirmation => () => {
  //   if (confirmation === "agree") {
  //     console.log("clicked agree");
  //     this.props.dispatch({
  //       type: "DELETE_PROJECT",
  //       payload: this.state.selectedId
  //     });
  //   }
  //   this.setState({
  //     open: false,
  //     selectedId: ""
  //   });
  // };

  // "order_id" serial NOT NULL,
	// "order_total" money NOT NULL,
	// "order_comments" varchar,
	// "order_tax" money,
	// "customer_id" int NOT NULL,
	// "shipping_method_id" int NOT NULL,


  render() {
    const { classes } = this.props;

    return (
      <>
        {/* <Header
          brand="Leather Stitchers---ADMIN PORTAL"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 700,
            color: "info"
          }}
        /> */}
        {/* <Parallax
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
                 A Place for Entrepreneurs to Share and Discover New
                  Stories 
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <SectionPills/> */}
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
            {/* {JSON.stringify(this.props)} */}

            <TableBody>
              {this.props.Orders.map(row => (
                <TableRow key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.product_short_attr}
                  </CustomTableCell>
                  <CustomTableCell align="right" />
                  <CustomTableCell component="th" scope="row">
                    {row.product_qty}
                  </CustomTableCell>
                  <CustomTableCell align="center" />
                  <CustomTableCell component="th" scope="row">
                    {row.product_price}
                  </CustomTableCell>
                  <CustomTableCell style={{ width: "10%" }} align="right">
                    <IconButton
                      className={classes.iconHover}
                      onClick={this.handleDeleteClick(row.id)}
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
        {this.deleteDialog()}
      </>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default withStyles(styles)(
  connect(mapReduxStateToProps)(AdminOrders)
);

