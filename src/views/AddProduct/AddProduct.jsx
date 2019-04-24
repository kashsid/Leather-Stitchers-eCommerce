import React, { Component } from "react";
import { connect } from "react-redux";
// Material UI imports
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import { Typography } from "@material-ui/core";

// Material UI Styles defined here
const styles = theme => ({
  textField: {
    marginTop: 2,
    marginBottom: 2
  },
  menu: {
    width: 200
  },
  button: {
    margin: 0,
    width: 120,
    float: "right"
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  typography: {
    useNextVariants: true
  }
});

class AddProduct extends Component {
//   "product_id" serial NOT NULL,
// 	"product_description" TEXT NOT NULL,
// 	"product_price" money NOT NULL,
// 	"product_short_attr" varchar(200),
// 	"collection_id" bigint NOT NULL,
// 	"product_qty" int NOT NULL,
  state = {
    description: "",
    price: 0,
    shortAttr: "",
    quantity: "",
    selectedCollection:""
  };

  // send fetch dispatch to redux which will return all items from 'tags' table on database
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_PRODUCTS" });
  };

  // handles on inputs on form and sets state
  handleChange = property => event => {
    this.setState({
      ...this.state,
      [property]: event.target.value
    });
  };

  // handles form submit button, sends post dispatch to redux with payload of all selected form inputs + clears form
  handleSubmit = () => {
    this.props.dispatch({ type: "POST_PRODUCT", payload: this.state });
    this.setState({
      description: "",
      price: 0,
      shortAttr: "",
      quantity: "",
      selectedCollection: ""
    });
  };

  // handles date select from date-picker
  handleDateChange = date => {
    this.setState({
      selectedDate: date
    });
  };

  // determines which message will display on snackbar depending if post to database was successful
  alertMessage = () => {
    const { classes } = this.props;
    if (this.props.confirmPost.status) {
      return (
        <span id="message-id" style={{ display: "flex", alignItems: "center" }}>
          <CheckCircleIcon className={classes.icon} />
          Product Successfully Added!
        </span>
      );
    } else {
      return (
        <span id="message-id" style={{ display: "flex", alignItems: "center" }}>
          <ErrorIcon className={classes.icon} />
          Product add was unsuccessful
        </span>
      );
    }
  };

  // handles close from snackbar and sends reset dispatch to redux
  handleClose = () => {
    this.props.dispatch({ type: "RESET_POST" });
  };

  // renders form
  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography>
          <h2>Add New Product</h2>
        </Typography>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <Grid container spacing={8}>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="title"
                label="* Product Title"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("title")}
                name="title"
                type="text"
                margin="normal"
                value={this.state.product_short_attr}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="description"
                label="* Product Description"
                fullWidth
                multiline={true}
                rows={20}
                className={classNames(classes.textField)}
                onChange={this.handleChange("description")}
                name="description"
                type="text"
                margin="normal"
                value={this.state.product_description}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>

            
            <Grid item xs={6} sm={4}>
              <TextValidator
                id="selectedcollection"
                select
                fullWidth
                label="* Select Collection"
                className={classes.textField}
                value={this.state.selectedTag}
                onChange={this.handleChange("selectedcollection")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                validators={["required"]}
                errorMessages={["this field is required"]}
                margin="normal"
                variant="outlined"
              >
                {/* {this.props.collections.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem> */}
              </TextValidator>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="price"
                label="* Price"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("price")}
                name="price"
                type="text"
                margin="normal"
                value={this.state.product_price}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="qty"
                label="* Quantity"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("qty")}
                name="qty"
                type="text"
                margin="normal"
                value={this.state.product_qty}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={4} sm={2}>
              <h5
                style={{
                  margin: "0",
                  fontWeight: "lighter",
                  fontStyle: "italic"
                }}
              >
                * required
              </h5>
            </Grid>
            <Grid item xs={8} sm={10}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
        {/* <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.props.confirmPost.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={this.alertMessage()}
        /> */}
      </>
    );
  }
}
const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default withStyles(styles)(
  connect(mapReduxStateToProps)(AddProduct)
);
