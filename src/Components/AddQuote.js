import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { createQuote } from "../API/API";
import placeholder from "../imgs/backdrop.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundImage: `url(${placeholder})`,
    backgroundBlendMode: "multiply",
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
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
            style={{ position: "absolute", bottom: "13rem", left: "10rem" }}
            className="btn-delete"
            onClick={handleClose}
          >
            Close
          </button>
          <div class="form-style-10">
            <form onSubmit={handleSubmit}>
              <div class="inner-wrap">
                <textarea
                  name="quote"
                  placeholder="...New Quote Here"
                  value={values.quote}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <br />
              <input
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleInputChange}
                value={values.author}
              />
              <br />
              <div class="button-section">
                <input
                  type="submit"
                  name="Add Quote"
                  onClick={() => handleSubmit(values)}
                />
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        className="btn-add"
        type="button"
        onClick={handleOpen}
        style={{ marginLeft: "5px" }}
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
        &nbsp;Add New
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
