//import React from "react";
import React from "react";
import { connect } from "react-redux";
// nodejs library that concatenates classes

// plugin that creates slider
//import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Tooltip from "@material-ui/core/Tooltip";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import Cached from "@material-ui/icons/Cached";
// import Subject from "@material-ui/icons/Subject";
// import Check from "@material-ui/icons/Check";
// core components
//import Accordion from "components/Accordion/Accordion.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Grid from "@material-ui/core/Grid";

import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
//import Clearfix from "components/Clearfix/Clearfix.jsx";

import suit1 from "assets/img/examples/Movie_collection_1.jpg";
// import suit2 from "assets/img/examples/suit-2.jpg";
// import suit3 from "assets/img/examples/suit-3.jpg";
// import suit4 from "assets/img/examples/suit-4.jpg";
// import suit5 from "assets/img/examples/suit-5.jpg";
// import suit6 from "assets/img/examples/suit-6.jpg";
// import color1 from "assets/img/examples/color1.jpg";
// import color3 from "assets/img/examples/color3.jpg";
// import color2 from "assets/img/examples/color2.jpg";
// import dg3 from "assets/img/dg3.jpg";
// import dg1 from "assets/img/dg1.jpg";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
//import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.jsx";

class SectionProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [1, 9, 27],
      priceRange: [101, 790]
    };
  }
 
  componentDidMount() {
    //const action = { type: "FETCH_PRODUCTS" };
    //this.props.dispatch(action);

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

  render() {
    const { classes } = this.props;

    return (
      <>
        {/* <div className={classes.section}>
       <div className={classes.container}> */}

        <GridItem
          md={4}
          sm={4}
          // className={classes.section}
          // className={classes.container}
        >
          <Card plain product>
            <CardHeader image plain>
              <a href="/contact-us">
                <img src={suit1} alt=".." />
              </a>
            </CardHeader>

            <CardBody plain>
              <a href="#pablo">
                <h4 className={classes.cardTitle}>
                  {this.props.products.product_short_attr}
                </h4>
              </a>
              <p className={classes.description}>
                {this.props.products.product_description}
              </p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentBetween}>
              <div className={classes.priceContainer}>
                <span className={classes.price}>
                  {this.props.products.product_price}
                </span>
              </div>
              <Tooltip
                id="tooltip-top"
                title="Saved to Wishlist"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  justIcon
                  simple
                  color="rose"
                  className={classes.pullRight}
                >
                  <Favorite />
                </Button>
              </Tooltip>
            </CardFooter>
          </Card>
        </GridItem>
        {/* </Grid> */}
        {/* </GridItem>
          </Grid> */}
        {/* </div>
      </div> */}
      </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState
});
//export default withStyles(styles)(SectionProducts);
export default withStyles(styles)(
  connect(mapReduxStateToProps)(SectionProducts)
);
