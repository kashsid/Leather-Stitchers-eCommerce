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

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import ShoppingCartPage from "../ShoppingCartPage/ShoppingCartPage";
import  Test  from "../ShoppingCartPage/test";



class ContactUsPage extends React.Component {
  state = {
    checkedA: true
  };

  

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  // handleNext = () => {
  //   this.props.history.push("/payment");
  // };
  // handleBack = () => {
  //   this.props.history.push("/payment");
  // };
  render() {
    const { classes } = this.props;
 const onSuccess = payment => {
   console.log("The payment was succeeded!", payment);
   this.props.history.push({
     pathname: "/order-success",
     state: {
       payment: payment,
      // items: cartItems,
       orderTotal: 500,
       //symbol: symbol
     }
   });
 };

 const onCancel = data => {
   console.log("The payment was cancelled!", data);
   
 };

 const onError = err => {
   console.log("Error!", err);
 };
    const client = {
      sandbox:
        "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_",
      production:
        "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_"
    };
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
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
              <GridContainer>
                <GridItem md={5} sm={2}>
                  <p>
                    You can contact us with anything related to our
                    Products. We'll get in touch with you as soon as
                    possible.
                    <br />
                    <br />
                  </p>
                  <form>
                    <CustomInput
                      labelText="Your First Name"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Your Last Name"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Steert Address"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="City"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="State"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Zip Code"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Your message"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 6
                      }}
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

                    <PaypalExpressBtn
                      env={"sandbox"}
                      client={client}
                      currency={"USD"}
                      total={"500"}
                      onError={onError}
                      onSuccess={onSuccess}
                      onCancel={onCancel}
                    />
                  </form>
                </GridItem>
                <GridItem md={6} sm={4} className={classes.mlAuto}>
                  {/* {JSON.stringify(this.props.cart)} */}

                  <InfoArea
                    className={classes.info}
                    title="Your Cart"
                    // description={
                    //   <p>
                    //     Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest,{" "}
                    //     <br /> Romania
                    //   </p>
                    // }
                    icon={PinDrop}
                    iconColor="primary"
                  />
                  <Card plain>
                    <CardBody plain>
                      <h3 className={classes.cardTitle}>Shopping Cart</h3>
                      {this.props.cart.map(row => (
                        <Table
                          key={row.id}
                          // tableHead={[
                          //   "",
                          //   "PRODUCT",
                          //   "SIZE",
                          //   "PRICE",
                          //   "QTY",
                          //   "AMOUNT",
                          //   ""
                          // ]}
                          //  tableData={[
                          //   [
                          //     <div className={classes.imgContainer}>
                          //       <img src={product1} alt="..." className={classes.img} />
                          //     </div>,
                          //     <span>
                          //       <a href="#jacket" className={classes.tdNameAnchor} />
                          //       <br />
                          //       <small className={classes.tdNameSmall}>
                          //       {/* {this.props.cart.product_short_attr} */}
                          //         {JSON.stringify(this.props.cart.product_short_attr)}
                          //       </small>
                          //     </span>,
                          //     // "Red",
                          //     "M",
                          //     <span>
                          //       <small className={classes.tdNumberSmall}>$</small> 549
                          //     </span>,
                          //     <span>
                          //       1{` `}
                          //       <div className={classes.buttonGroup}>
                          //         <Button
                          //           color="info"
                          //           size="sm"
                          //           round
                          //           className={classes.firstButton}
                          //         >
                          //           <Remove />
                          //         </Button>
                          //         <Button
                          //           color="info"
                          //           size="sm"
                          //           round
                          //           className={classes.lastButton}
                          //         >
                          //           <Add />
                          //         </Button>
                          //       </div>
                          //     </span>,
                          //     <span>
                          //       <small className={classes.tdNumberSmall}>$</small> 200
                          //     </span>,
                          //     <Tooltip
                          //       id="close1"
                          //       title="Remove item"
                          //       placement="left"
                          //       classes={{ tooltip: classes.tooltip }}
                          //     >
                          //       <Button link className={classes.actionButton}>
                          //         <Close />
                          //       </Button>
                          //     </Tooltip>
                          //   ],

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
                              <span>
                                1{` `}
                                {/* <div className={classes.buttonGroup}>
                            <Button
                              color="info"
                              size="sm"
                              round
                              className={classes.firstButton}
                            >
                              <Remove />
                            </Button>
                            <Button
                              color="info"
                              size="sm"
                              round
                              className={classes.lastButton}
                            >
                              <Add />
                            </Button>
                          </div> */}
                              </span>,
                              <span>
                                <small className={classes.tdNumberSmall}>
                                  $
                                </small>{" "}
                                200
                              </span>
                              // <Tooltip
                              //   id="close1"
                              //   title="Remove item"
                              //   placement="left"
                              //   classes={{ tooltip: classes.tooltip }}
                              // >
                              //   <Button
                              //     link
                              //     className={classes.actionButton}
                              //   >
                              //     <Close />
                              //   </Button>
                              // </Tooltip>
                            ]

                            // {
                            //   purchase: true,
                            //   colspan: "3",
                            //   amount: (
                            //     <span>
                            //       <small>$</small>2,346
                            //     </span>
                            //   ),
                            //   col: {
                            //     colspan: 3,
                            //     text: (
                            //       <Button color="info" round>
                            //         Complete Purchase <KeyboardArrowRight />
                            //       </Button>
                            //     )
                            //   }
                            // }
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
                      <span>
                        <small>$</small>300{" "}
                      </span>
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
                  {/* <InfoArea
                    className={classes.info}
                    title="Give us a ring"
                    description={
                      <p>
                        Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                        8:00-22:00
                      </p>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Legal Information"
                    description={
                      <p>
                        Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN ·
                        EN8732ENGB2300099123 <br /> Bank · Great Britain Bank
                      </p>
                    }
                    icon={BusinessCenter}
                    iconColor="primary"
                  /> */}
                </GridItem>
              </GridContainer>
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
