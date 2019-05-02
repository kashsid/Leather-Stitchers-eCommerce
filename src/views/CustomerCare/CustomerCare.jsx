/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";

import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/dapper-advisor.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/tazia-lynne.jpg";
import cardProfile2Square from "assets/img/lady-in-violet.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class CustomerCare extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Leather Stitchers"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <Parallax
          image={require("assets/img/customer-care.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  {/* <div>
                    <img
                      src={christian}
                      alt="..."
                      className={imageClasses}
                    />
                  </div> */}
                  <div className={classes.name}>
                    {/* <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6> */}
                    {/* <Button
                      justIcon
                      simple
                      color="dribbble"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-dribbble"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="twitter"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="pinterest"
                      className={classes.margin5}
                    >
                      <i
                        className={classes.socials + " fab fa-pinterest"}
                      />
                    </Button> */}
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow this user"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(
                classes.description,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>
                GOAL OF PROMOTING ACCESSIBILITY
              </h2>
              <p>
                AT LEATHER STITCHERS, WE'RE COMMITTED TO PROMOTING
                ACCESSIBILITY, DIVERSITY AND INCLUSION. WE BELIEVE ALL OF
                OUR CUSTOMERS SHOULD BE ABLE TO SUCCESSFULLY SHOP ONLINE AT
                WWW.LEATHERSTITCHERS.COM, AND ACCESS ALL OF OUR OTHER WEB
                SITES AND DIGITAL OFFERINGS. WHETHER YOU ARE USING ASSISTIVE
                TECHNOLOGIES LIKE A SCREEN READER, A MAGNIFIER, VOICE
                RECOGNITION SOFTWARE, OR SWITCH TECHNOLOGY, OUR GOAL IS TO
                MAKE YOUR USE OF LEATHER STITCHERS TECHNOLOGY A SUCCESSFUL
                AND ENJOYABLE EXPERIENCE.{" "}
              </p>
              <h2 className={classes.title}>ASSISTANCE</h2>
              <p>
                WE ARE CONTINUOUSLY IMPLEMENTING TECHNOLOGY IMPROVEMENTS TO
                ENHANCE ACCESSIBILITY ON OUR SITE. AS WE CONTINUE TO STRIVE
                TOWARD OUR GOAL OF PROMOTING ACCESSIBILITY, WE WELCOME YOUR
                FEEDBACK ON HOW WE MIGHT IMPROVE. IF YOU HAVE DIFFICULTY
                ACCESSING ANY FEATURE OR FUNCTIONALITY OF THIS WEBSITE,
                PLEASE FEEL FREE TO CALL US AT 1-866-111-1122 OR EMAIL US AT
                Ccustomercare@leatherstitchers.com.
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Work",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>
                            Latest Collections
                          </h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + mariyaGeorgieva + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    Summer 2019
                                  </Badge>
                                  <a href="#kash">
                                    <h2 className={classes.cardTitleWhite}>
                                      Dawn Biker
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + clemOnojeghuo + ")"
                                }}
                              >
                                <a href="#kash" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="info"
                                    className={classes.badge}
                                  >
                                    Spring 2019
                                  </Badge>
                                  <a href="#kash">
                                    <h2 className={classes.cardTitleWhite}>
                                      Hooded Jackets
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + oluEletu + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    Summer 2019
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Flats
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + darrenColeshill + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="success"
                                    className={classes.badge}
                                  >
                                    Winter 2019
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Men's Trench Coats
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>160</b> Products
                            </li>
                            <li>
                              <b>6</b> Collections
                            </li>
                            <li>
                              <b>31</b> Influencers
                            </li>
                            <li>
                              <b>8.2K</b> Likes
                            </li>
                            <li>
                              <b>1.2K</b> Followers
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About Products</h4>
                          <p className={classes.description}>
                            Something about product.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">Jackets</Badge>
                          <Badge color="rose">Fashion</Badge>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Blogers",
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="http://dapperadvisor.com/">
                                      <img src={avatar} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + avatar + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      The Dapper Advisor
                                    </h4>
                                    <Muted>
                                      <h6>Blogger</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because
                                      we need to restart the human
                                      foundation in truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={marc} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + marc + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Raza Amir
                                    </h4>
                                    <Muted>
                                      <h6>DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      The man behind the designs of all
                                      leather jackets sold on the film
                                      jackets, f jackets and leather
                                      stitchers.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={kendall} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + kendall + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Tazia Lynne
                                    </h4>
                                    <Muted>
                                      <h6>Blogger</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Newyork based fashion blogger.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img
                                        src={cardProfile2Square}
                                        alt="..."
                                      />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + cardProfile2Square + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Lady in Violet
                                    </h4>
                                    <Muted>
                                      <h6>Blogger</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    )
                  }
                  //   {
                  //     tabButton: "Media",
                  //     tabIcon: Camera,
                  //     tabContent: (
                  //       <GridContainer justify="center">
                  //         <GridItem xs={12} sm={12} md={3}>
                  //           <img
                  //             alt="..."
                  //             src={mariyaGeorgieva}
                  //             className={navImageClasses}
                  //           />
                  //           <img
                  //             alt="..."
                  //             src={clemOnojegaw}
                  //             className={navImageClasses}
                  //           />
                  //         </GridItem>
                  //         <GridItem xs={12} sm={12} md={3}>
                  //           <img
                  //             alt="..."
                  //             src={clemOnojeghuo}
                  //             className={navImageClasses}
                  //           />
                  //           <img
                  //             alt="..."
                  //             src={oluEletu}
                  //             className={navImageClasses}
                  //           />
                  //           <img
                  //             alt="..."
                  //             src={cynthiaDelRio}
                  //             className={navImageClasses}
                  //           />
                  //         </GridItem>
                  //       </GridContainer>
                  //     )
                  //   }
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
        {/* <Footer
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
                <a href="https://www.creative-tim.com">Creative Tim</a> for
                a better web.
              </div>
            </div>
          }
        /> */}
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(CustomerCare);
