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

class AddProduct_cust extends Component {

  // CREATE TABLE "customer" (
	// "customer_id" serial NOT NULL,
	// "customer_email" varchar(20) NOT NULL,
	// "customer_first_name" varchar(200) NOT NULL,
	// "customer_last_name" varchar(200),
	// "customer_company" varchar(200),
	// "customer_address_street" varchar(80) NOT NULL,
	// "customer_address_apt" varchar(10),
	// "customer_address_city" varchar(10) NOT NULL,
	// "customer_address_state" varchar(10) NOT NULL,
	// "customer_address_zip"
  state = {
   email: "",
  firstName: new Date(),
    lastName: "",
    company: "",
    addressStreet: "",
    addressAppt: "",
    addressCity:"",
    addressState:"",
    addressZip:""
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
      email: "",
      firstName: new Date(),
      lastName: "",
      company: "",
      addressStreet: "",
      addressAppt: "",
      addressCity: "",
      addressState: "",
      addressZip: ""
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
                id="email"
                label="* Email Id"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("email")}
                name="email"
                type="text"
                margin="normal"
                value={this.state.customer_email}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="firstname"
                label="* First Name"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("firstname")}
                name="firstname"
                type="text"
                margin="normal"
                value={this.state.customer_first_name}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="lastname"
                label="* Last Name"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("lastname")}
                name="firstname"
                type="text"
                margin="normal"
                value={this.state.customer_last_name}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="company"
                label=" Company"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("company")}
                name="company"
                type="text"
                margin="normal"
                value={this.state.customer_company}
                // validators={["required"]}
                // errorMessages={["this field is required"]}
                // variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="street"
                label="* Street"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("street")}
                name="street"
                type="text"
                margin="normal"
                value={this.state.customer_address_street}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="appt"
                label=" Appt #"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("Appt")}
                name="Appt"
                type="text"
                margin="normal"
                value={this.state.customer_street_appt}
                // validators={["required"]}
                // errorMessages={["this field is required"]}
                // variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={6} sm={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  margin="normal"
                  label="* Date"
                  fullWidth
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  className={classNames(classes.textField)}
                  variant="outlined"
                />
              </MuiPickersUtilsProvider>
            </Grid> */}
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="city"
                label="* City"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("city")}
                name="city"
                type="text"
                margin="normal"
                value={this.state.customer_address_city}
                validators={["required"]}
                errorMessages={["this field is required"]}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextValidator
                id="State"
                select
                fullWidth
                label="* Select State"
                className={classes.textField}
                value={this.state.selectedTag}
                onChange={this.handleChange("selectedState")}
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
                {/* {this.props.tags.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem> */}
               
              </TextValidator>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextValidator
                id="zip"
                label="* Zip"
                fullWidth
                className={classNames(classes.textField)}
                onChange={this.handleChange("zip")}
                name="zip"
                type="text"
                margin="normal"
                value={this.state.customer_address_zip}
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

export default withStyles(styles)(connect(mapReduxStateToProps)(AddProduct_cust));
