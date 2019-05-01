import React from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import PinDrop from "@material-ui/icons/PinDrop";
import Table from "components/Table/Table.jsx";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowRight";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components

import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.jsx";

const style = theme => ({
  ...modalStyle(theme),
  modalRootExample: {
    "& > div:first-child": {
      display: "none"
    },
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class OrderSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingModal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.handleClickOpen("scrollingModal")}
        >
          Launch Demo Modal
        </Button>
        <Dialog
          onClick={() => this.handleClose("scrollingModal")}
          classes={{
            root: `${classes.modalRoot} ${classes.modalRootExample}`,
            paper: classes.modal
          }}
          open={this.state.scrollingModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("scrollingModal")}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => this.handleClose("scrollingModal")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Modal title</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
              risus, porta ac consectetur ac, vestibulum at eros.
            </p>
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
                  {/* <span>
                              <small>$</small>300{" "}
                            </span> */}
                  <div>
                    <Button color="info" round onClick={this.handleBack}>
                      Go back to cart <KeyboardArrowLeft />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => this.handleClose("scrollingModal")}
              color="secondary"
            >
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};
export default withStyles(modalStyle)(
  connect(mapReduxStateToProps)(OrderSuccess)
);
