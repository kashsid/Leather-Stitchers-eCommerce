import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
               Motorcycle leather jackets are made especially for the tough and 
               adventurous men and women. A classy biker looks incomplete without 
               a stylish outfit. Our motorcycle Rider leather jackets  are 
               especially designed to give you the style you deserve. 
               These biker leather jackets add value to the personality of the 
               rider along with catching attraction of every eye. For your rough 
               bike rides this brand of clothing is extremely suitable, 
               as they are made from the tough leather in order to protect you 
               in case of any accident. Now if you are going for an adventurous 
               ride, make sure you have taken one of these jackets with you. 
               Usually moto leather jackets are perceived to be perfect combination 
               of style and protection and are used widely by people all 
               over the globe. 
               We offer a large variety of biker jackets for men and women at our store.  
               Feel free to contact us; we would love to clear your doubts regarding rider leather jackets. We make sure that each product we make is of finest quality and meeting your needs and demands. In order to get the best buy, choose us!
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="30 Days Free Returns"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Verified Customers"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="After Sales Support"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
