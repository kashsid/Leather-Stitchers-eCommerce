import React from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import PinDrop from "@material-ui/icons/PinDrop";
import Table from "components/Table/Table.jsx";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowRight";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
import PaypalExpressBtn from "react-paypal-express-checkout";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/bg7.jpg";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
   // const { classes } = this.props;
    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);
      this.props.history.push({
        pathname: "/order-success",
        state: {
          payment: payment,
          // items: cartItems,
          orderTotal: 500
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
          absolute
          color="transparent"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="rose" />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Payment</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      {/* <GridItem xs={12} sm={5} md={5}>
                      
                        <InfoArea
                          className={classes.info}
                          title="Your Cart"
                          icon={PinDrop}
                          iconColor="primary"
                        />
                        <Card plain>
                          <CardBody plain>
                            <h3 className={classes.cardTitle}>
                              Shopping Cart
                            </h3>
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
                                      <small
                                        className={classes.tdNameSmall}
                                      />
                                    </span>,
                                    // "Red",
                                    "M",
                                    <span>
                                      <small
                                        className={classes.tdNumberSmall}
                                      >
                                        $
                                      </small>{" "}
                                      {row.product_price}
                                    </span>,
                                    <span>1{` `}</span>,
                                    <span>
                                      <small
                                        className={classes.tdNumberSmall}
                                      >
                                        $
                                      </small>{" "}
                                      200
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
                                customHeadClassesForCells={[
                                  0,
                                  2,
                                  3,
                                  4,
                                  5,
                                  6
                                ]}
                                customCellClasses={[
                                  classes.tdName,
                                  classes.customFont,
                                  classes.customFont,
                                  classes.tdNumber,
                                  classes.tdNumber +
                                    " " +
                                    classes.tdNumberAndButtonGroup,
                                  classes.tdNumber +
                                    " " +
                                    classes.textCenter
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
                      </GridItem> */}
                      <GridItem xs={12} sm={5} md={5}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color="twitter">
                            <i
                              className={
                                classes.socials + " fab fa-twitter"
                              }
                            />
                          </Button>
                          {` `}
                          <Button
                            justIcon
                            round
                            color="instagram"
                            href="https://www.instagram.com/fjackets/?hl=en"
                          >
                            <i
                              className={
                                classes.socials + " fab fa-instagram"
                              }
                            />
                          </Button>
                          {` `}
                          <Button
                            justIcon
                            round
                            color="facebook"
                            href="https://www.facebook.com/Thefilmjackets/"
                          >
                            <i
                              className={
                                classes.socials + " fab fa-facebook-f"
                              }
                            />
                          </Button>
                          {` `}
                          <h4 className={classes.socialTitle}>
                            Follow us on social media
                          </h4>
                        </div>
                        <form className={classes.form}>
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check
                                    className={classes.uncheckedIcon}
                                  />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked.indexOf(1) !== -1
                                    ? true
                                    : false
                                }
                              />
                            }
                            label={
                              <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button round color="primary">
                              Get started
                            </Button>
                            <PaypalExpressBtn
                              env={"sandbox"}
                              client={client}
                              currency={"USD"}
                              total={"500"}
                              onError={onError}
                              onSuccess={onSuccess}
                              onCancel={onCancel}
                            />
                          </div>
                        </form>
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.info}
                          title="Your Cart"
                          icon={PinDrop}
                          iconColor="primary"
                        />
                        <Card plain>
                          <CardBody plain>
                            {/* <h3 className={classes.cardTitle}>
                              Shopping Cart
                            </h3> */}
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
                                      <small
                                        className={classes.tdNameSmall}
                                      />
                                    </span>,
                                    // "Red",
                                    "M",
                                    <span>
                                      <small
                                        className={classes.tdNumberSmall}
                                      >
                                        $
                                      </small>{" "}
                                      {row.product_price}
                                    </span>,
                                    <span>1{` `}</span>,
                                    <span>
                                      <small
                                        className={classes.tdNumberSmall}
                                      >
                                        $
                                      </small>{" "}
                                      200
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
                                customHeadClassesForCells={[
                                  0,
                                  2,
                                  3,
                                  4,
                                  5,
                                  6
                                ]}
                                customCellClasses={[
                                  classes.tdName,
                                  classes.customFont,
                                  classes.customFont,
                                  classes.tdNumber,
                                  classes.tdNumber +
                                    " " +
                                    classes.tdNumberAndButtonGroup,
                                  classes.tdNumber +
                                    " " +
                                    classes.textCenter
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
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/"
                        className={classes.block}
                      >
                        Creative Tim
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className={classes.block}
                      >
                        About us
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="//blog.creative-tim.com/"
                        className={classes.block}
                      >
                        Blog
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/license"
                        className={classes.block}
                      >
                        Licenses
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with{" "}
                  <Favorite className={classes.icon} /> by{" "}
                  <a href="https://www.creative-tim.com">Creative Tim</a>{" "}
                  for a better web.
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => {
  return reduxState;
};
export default withStyles(signupPageStyle)(connect(mapReduxStateToProps)(Payment));
