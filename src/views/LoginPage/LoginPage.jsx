import React, { Component } from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import classNames from "classnames";

import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import Favorite from "@material-ui/icons/Favorite";
// import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
//import { TextValidator } from "react-material-ui-form-validator";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/bg7.jpg";
import { TextField } from "@material-ui/core";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  login = event => {
    event.preventDefault();
    console.log("in login", this.state.username, this.state.password);

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password
        }
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleInputChangeFor = propertyName => event => {
    console.log('in handle change',event.target.value);
    
    this.setState({
      [propertyName]: event.target.value
    });
  };
  // handleInputChangeFor = username => event => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}
        <Header
          absolute
          color="transparent"
          brand="Leather Stitchers"
          links={<HeaderLinks dropdownHoverColor="info" />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          {/* <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
          > */}
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                  <Card>
                    <form className={classes.form}>
                      <CardHeader
                        color="primary"
                        signup
                        className={classes.cardHeader}
                      >
                        <h4 className={classes.cardTitle}>Login</h4>
                        <div className={classes.socialLine}>
                          {/* <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button> */}
                          {/* <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button> */}
                          {/* <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-google-plus-g" />
                        </Button> */}
                        </div>
                      </CardHeader>
                      <p
                        className={`${classes.description} ${
                          classes.textCenter
                        }`}
                      >
                        Enter your user name and password.
                      </p>
                      <CardBody signup>
                        {/* <CustomInput
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "First Name...",
                          type: "text",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      /> */}
                        {/* <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor("username")}
                      /> */}
                        {/* <TextValidator
                          id="username"
                          label="* User Name"
                          fullWidth
                          className={classNames(classes.textField)}
                          onChange={this.handleInputChangeFor("username")}
                          name="username"
                          type="text"
                          margin="normal"
                          value={this.state.username}
                          validators={["required"]}
                          errorMessages={["this field was required"]}
                          //variant="outlined"
                        /> */}

                        {/* <TextValidator
                          id="password"
                          label="* password"
                          fullWidth
                          className={classNames(classes.textField)}
                          onChange={this.handleInputChangeFor("password")}
                          name="password"
                          type="password"
                          margin="normal"
                          value={this.state.password}
                          validators={["required"]}
                          errorMessages={["this field was required"]}
                          //variant="outlined"
                        /> */}
                        {/* <TextField
                        id="username"
                        Value={this.state.username}
                        onChange={this.handleInputChangeFor("username")}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "User name..",
                          type: "Text",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      /> */}
                        {/* {JSON.stringify(CustomInput.name.value)} */}
                        {/* <TextField
                          id="password"
                          value={this.state.password}
                          onChange={this.handleInputChangeFor("password")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Password",
                            type: "password",
                            startAdornment: (
                              <InputAdornment position="start">
                                <Icon className={classes.inputIconsColor}>
                                  lock_utline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        /> */}
                      </CardBody>
                      <div className={classes.textCenter}>
                        <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={this.login}
                        >
                          Login
                        </Button>
                      </div>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          {/* </ValidatorForm> */}

          {/* <Footer
            className={classes.footer}
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
                  <a href="https://www.creative-tim.com">Creative Tim</a> for a
                  better web
                </div>
              </div>
            }
          /> */}
        </div>
      </div>
    );
  }
}
// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors
});

export default withStyles(loginPageStyle)(connect(mapStateToProps)(LoginPage));

//export default withStyles(loginPageStyle)(LoginPage);
