import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import QuoteForm from "./AddQuote.js";
import placeholder from "./imgs/placeholder.jpg";
import Imgs from "./imgs/QuoteImages";

const DisplayImage = (props) => {
  const { randomIndex, quote } = props;
  return (
    <Grid item md={8} style={{ position: "relative" }}>
      <Card>
        <CardMedia
          image={randomIndex !== "" ? Imgs[randomIndex] : placeholder}
          title="quote Img"
          style={{ width: "40rem", height: "24rem" }}
        />
      </Card>
      {randomIndex !== "" ? (
        <div
          className="btns"
          style={{
            // width: "100vw",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "24rem",
            left: "1.5rem",
          }}
        >
          <button
            className="btn-tweet"
            style={{ marginLeft: "5px" }}
            onClick={() => {
              // props.delete();
            }}
          >
            <a
              //id="tweet-quote"
              className="fa fa-twitter"
              href={`https://twitter.com/intent/tweet?text=${quote}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Tweet{" "}
            </a>
          </button>
          <QuoteForm
            onClose={() => {
              // props.fetchQuotes();
            }}
          />
          <button
            className="btn-delete"
            style={{ marginLeft: "5px" }}
            onClick={() => {
              // props.delete();
            }}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i> Delete{" "}
          </button>
        </div>
      ) : (
        ""
      )}
    </Grid>
  );
};
export default DisplayImage;
