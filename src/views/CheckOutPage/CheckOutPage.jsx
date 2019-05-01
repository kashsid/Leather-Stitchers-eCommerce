import React from "react";
import { connect } from "react-redux";

// nodejs library that concatenates classes
import classNames from "classnames";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Close from "@material-ui/icons/Close";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PaypalExpressBtn from "react-paypal-express-checkout";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowRight";


import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";

import product1 from "assets/img/product1.jpg";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";


import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Footer from "components/Footer/Footer.jsx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import ShoppingCartPage from "../ShoppingCartPage/ShoppingCartPage";
import  Test  from "../ShoppingCartPage/test";
import { TextField } from "@material-ui/core/TextField";



class ContactUsPage extends React.Component {
  state = {
    checkedA: true,
    newOrder: {
      firstname: "",
      lastname: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zip: 0
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  handleChange = name => event => {
    console.log("in handle change customer", event.target.value, name);
    this.setState({ [name]: event.target.checked });
    this.setState({
      newOrder: {
        ...this.state.newOrder,
        [name]: event.target.value
      }
    });
    console.log(`Current inputs:`, this.state.newOrder);
  };
  handleNext = () => {
    // need to submit customer info to redux reducer
    const action = { type: "ADD_CUSTOMER_INFO", payload: this.state.newOrder };
    this.props.dispatch(action);

    // route to Checkout
    this.props.history.push("/payment");
  };
  // handleNext = () => {
  //   this.props.history.push("/payment");
  // };
  handleBack = () => {
    this.props.history.push("/shopping-cart");
  };
  render() {
    const { classes } = this.props;
    // const onSuccess = payment => {
    //   console.log("The payment was succeeded!", payment);
    //   this.props.history.push({
    //     pathname: "/order-success",
    //     state: {
    //       payment: payment,
    //       // items: cartItems,
    //       orderTotal: 500
    //       //symbol: symbol
    //     }
    //   });
    // };

    // const onCancel = data => {
    //   console.log("The payment was cancelled!", data);
    // };

    // const onError = err => {
    //   console.log("Error!", err);
    // };
    // const client = {
    //   sandbox:
    //   "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_",
    //   production:
    //   "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_"
    // };
    return (
      <div>
        <Header
          brand="Leather Stitchers"
          links={<HeaderLinks dropdownHoverColor="dark" />}
          fixed
          color="dark"
        />
        <div className={classes.bigMap} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Customer Information</h2>
              <h4 className={classes.title}>Billing Info:</h4>
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
              >
                <GridContainer>
                  <GridItem md={5} sm={1}>
                    <p>
                      You can contact us with anything related to our
                      Products. We'll get in touch with you as soon as
                      possible.
                      <br />
                      <br />
                    </p>
                    <form>
                      {/* <CustomInput
                      labelText="Your First Name"
                      name="name"
                      id="float"
                      
                      formControlProps={{
                        fullWidth: true
                      }}
                    /> */}
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
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />
                      <TextValidator
                        id="flastname"
                        label="* Last Name"
                        fullWidth
                        className={classNames(classes.textField)}
                        onChange={this.handleChange("lastname")}
                        name="lastname"
                        type="text"
                        margin="normal"
                        value={this.state.customer_last_name}
                        validators={["required"]}
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />
                      <TextValidator
                        id="email"
                        label=" Email Address"
                        fullWidth
                        className={classNames(classes.textField)}
                        onChange={this.handleChange("email")}
                        name="email"
                        type="email"
                        margin="normal"
                        value={this.state.customer_email}
                        //validators={["required"]}
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />
                      <TextValidator
                        id="street"
                        label="* Street Address"
                        fullWidth
                        className={classNames(classes.textField)}
                        onChange={this.handleChange("street")}
                        name="street"
                        type="text"
                        margin="normal"
                        value={this.state.customer_address_street}
                        validators={["required"]}
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />
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
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />
                      <TextValidator
                        id="state"
                        label="* State"
                        fullWidth
                        className={classNames(classes.textField)}
                        onChange={this.handleChange("state")}
                        name="state"
                        type="text"
                        margin="normal"
                        value={this.state.customer_address_state}
                        validators={["required"]}
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />
                      <TextValidator
                        id="zip"
                        label="* Zip Code"
                        fullWidth
                        className={classNames(classes.textField)}
                        onChange={this.handleChange("zip")}
                        name="zip"
                        type="text"
                        margin="normal"
                        value={this.state.customer_address_zip}
                        validators={["required"]}
                        errorMessages={["this field was required"]}
                        //variant="outlined"
                      />

                      <div className={classes.textCenter}>
                        <Button
                          color="primary"
                          round
                          onClick={this.handleNext}
                        >
                          Procced to Payment
                        </Button>
                      </div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChange("checkedA")}
                            value="checkedA"
                            color="primary"
                          />
                        }
                        label="My shipping address is same as billing address."
                      />

                      {/* <PaypalExpressBtn
                        env={"sandbox"}
                        client={client}
                        currency={"USD"}
                        total={"1"}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel}
                      /> */}
                    </form>
                  </GridItem>
                  <GridItem md={6} sm={4} className={classes.mlAuto}>
                    {/* {JSON.stringify(this.props.cart)} */}

                    <InfoArea
                      className={classes.info}
                      title="Your Cart"
                      icon={AddShoppingCart}
                      iconColor="primary"
                    />
                    <Card plain>
                      <CardBody plain>
                        <h3 className={classes.cardTitle}>Shopping Cart</h3>
                        {this.props.cart.map(row => (
                          <Table
                            key={row.id}
                            tableData={[
                              [
                                <span>
                                  <a
                                    href="#jacket"
                                    className={classes.tdNameAnchor}
                                  />
                                  <br />

                                  {row.product_short_attr}
                                  <small className={classes.tdNameSmall} />
                                </span>,
                                // "Red",
                                "M",
                                <span>
                                  <small className={classes.tdNumberSmall}>
                                    $
                                  </small>{" "}
                                  {row.product_price}
                                </span>,
                                <span>1{` `}</span>,
                                <span>
                                  <small className={classes.tdNumberSmall}>
                                    $
                                  </small>{" "}
                                  {row.product_price}
                                </span>
                              ]
                            ]}
                            tableShopping
                            customHeadCellClasses={[
                              classes.textCenter,
                              classes.description,
                              classes.description,
                              classes.textRight,
                              classes.textRight,
                              classes.textRight
                            ]}
                            customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                            customCellClasses={[
                              classes.tdName,
                              classes.customFont,
                              classes.customFont,
                              classes.tdNumber,
                              classes.tdNumber +
                                " " +
                                classes.tdNumberAndButtonGroup,
                              classes.tdNumber + " " + classes.textCenter
                            ]}
                            customClassesForCells={[1, 2, 3, 4, 5, 6]}
                          />
                        ))}
                        <div align="right">
                          <span>
                            <large className={classes.tdNumberLarge}>
                              Total Amount: ${this.props.updateTotal}
                            </large>
                          </span>
                        </div>
                        {/* <span>
                          <small>$</small>300{" "}
                        </span> */}
                        <div>
                          <Button
                            color="info"
                            round
                            onClick={this.handleBack}
                          >
                            Go back to cart <KeyboardArrowLeft />
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </ValidatorForm>
            </div>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.thefilmjackets.com/"
                      className={classes.block}
                    >
                      Leather Stitchers
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.thefilmjackets.com//collections/biker-collection"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.thefilmjackets.com">Kash</a> for a full
                stack project.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => {
  return reduxState;
};
export default withStyles(contactUsStyle)(
  connect(mapReduxStateToProps)(ContactUsPage));
