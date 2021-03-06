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

class AdminCollections extends Component {
  state = {
    open: false,
    selectedId: ""
  };
  
  // send fetch dispatch to redux which will return all items from 'Products' table on database
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_COLLECTIONS" });
  };
  // Handle delete button click action to delete the selected products from table
    handleFeaturedClick = collection_id => () => {
      console.log("featured click for id", collection_id);
      this.setState({
        open: true,
        selectedId: collection_id
      });
    };
  //shows confirmation message before deleting the product from database
    FeaturedDialog = () => {
      return (
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Please Confirm"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to make this collection featured?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleFeaturedConfirm("disagree")}
              color="primary"
            >
              Disagree
            </Button>
            <Button
              onClick={this.handleFeaturedConfirm("agree")}
              color="primary"
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      );
    };

    handleFeaturedConfirm = confirmation => () => {
      if (confirmation === "agree") {
        console.log("clicked agree");
        this.props.dispatch({
          type: "FEATURE_COLLECTION",
          payload: this.state.selectedId
        });
      }
      this.setState({
        open: false,
        selectedId: ""
      });
    };
 
  render() {
    const { classes } = this.props;

    return (
      <>
        
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Collection Id</CustomTableCell>
                <CustomTableCell align="right" />

                <CustomTableCell>Collection Name</CustomTableCell>
                <CustomTableCell align="center" />

                <CustomTableCell>Featured Flag</CustomTableCell>
                <CustomTableCell align="center" />
              </TableRow>
            </TableHead>
            {/* {JSON.stringify(this.props)} */}

            <TableBody>
              {this.props.collections.map(row => (
                <TableRow key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.collection_id}
                  </CustomTableCell>
                  <CustomTableCell align="right" />

                  <CustomTableCell component="th" scope="row">
                    {row.collection_name}
                  </CustomTableCell>
                  <CustomTableCell align="center" />

                 
                  <CustomTableCell style={{ width: "10%" }} align="right">
                   
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {this.FeaturedDialog()}
      </>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default withStyles(styles)(
  connect(mapReduxStateToProps)(AdminCollections)
);
