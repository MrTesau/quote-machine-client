import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
//import { createQuote } from "../API/API";
import placeholder from "../imgs/backdrop.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundImage: `url(${placeholder})`,
    backgroundBlendMode: "multiply",
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (values) => {
    // error message
    setValues({ password: "Error: Wrong Password." });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.paper}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          <button
            type="button"
            style={{ position: "absolute", bottom: "7.5rem", left: "25rem" }}
            className="btn-delete"
            onClick={handleClose}
          >
            Close
          </button>
          <div class="form-style-10">
            <form>
              <input
                type="text"
                placeholder="Quote not inspiring? Enter Admin password to remove it."
                name="password"
                onChange={handleInputChange}
                value={values.password}
              />
              <br />
              <div class="button-section">
                <input
                  type="submit"
                  name="Add Quote"
                  onClick={() => handleSubmit(values)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        className="btn-delete"
        style={{ marginLeft: "5px" }}
        onClick={handleOpen}
      >
        <i class="fa fa-trash-o" aria-hidden="true"></i> Delete{" "}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
