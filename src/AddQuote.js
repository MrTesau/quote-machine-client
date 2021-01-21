import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { createQuote } from "./API";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    quote: "",
    author: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await createQuote(values);
      onclose();
      setValues({
        quote: "",
        author: "",
      });
    } catch (error) {
      console.error(error);
    }
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
        <div style={{ textAlign: "center" }}>
          <div class="form-style-10">
            <form onSubmit={handleSubmit}>
              <div class="section"></div>
              <div class="inner-wrap">
                <label>
                  Quote{" "}
                  <textarea
                    name="quote"
                    value={values.quote}
                    onChange={handleInputChange}
                  ></textarea>
                </label>
              </div>
              <label>
                Author{" "}
                <input
                  type="text"
                  name="author"
                  onChange={handleInputChange}
                  value={values.author}
                />
              </label>
              <div class="button-section">
                <input
                  type="submit"
                  name="Add Quote"
                  onClick={() => handleSubmit(values)}
                />
              </div>{" "}
            </form>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <button type="button" onClick={handleOpen}>
        Add Quote
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
