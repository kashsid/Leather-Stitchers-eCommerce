import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class OrderSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallModal: false,
      largeModal: false
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
          onClick={() => this.handleClickOpen("largeModal")}
        >
          Large Modal
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLarge
          }}
          open={this.state.largeModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("largeModal")}
          aria-labelledby="large-modal-slide-title"
          aria-describedby="large-modal-slide-description"
        >
          <DialogTitle
            id="large-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => this.handleClose("largeModal")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Large modal</h4>
          </DialogTitle>
          <DialogContent
            id="large-modal-slide-description"
            className={classes.modalBody}
          >
            <p>...</p>
          </DialogContent>
        </Dialog>

        <Button
          color="primary"
          onClick={() => this.handleClickOpen("smallModal")}
        >
          Small Modal
        </Button>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalSmall
          }}
          open={this.state.smallModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("smallModal")}
          aria-labelledby="small-modal-slide-title"
          aria-describedby="small-modal-slide-description"
        >
          <DialogTitle
            id="small-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => this.handleClose("smallModal")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Small modal</h4>
          </DialogTitle>
          <DialogContent
            id="small-modal-slide-description"
            className={classes.modalBody + " " + classes.modalSmallBody}
          >
            <p>...</p>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(OrderSuccess);
