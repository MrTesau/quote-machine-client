import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import QuoteForm from "./AddQuote.js";
import DeleteForm from "./DeleteQuote.js";
import placeholder from "../imgs/placeholder.jpg";
import Imgs from "../imgs/QuoteImages";

const DisplayImage = (props) => {
  const { randomIndex, quote } = props;

  const ButtonDisplay = () => {
    if (randomIndex !== "") {
      return (
        <div className="action-btns">
          <button className="btn-tweet" style={{ marginLeft: "5px" }}>
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
              props.fetchQuotes();
            }}
          />
          <DeleteForm />
        </div>
      );
    }
  };

  return (
    <Grid item xs={11} md={8} style={{ position: "relative" }}>
      <Card>
        <CardMedia
          image={randomIndex !== "" ? Imgs[randomIndex] : placeholder}
          title="quote Img"
          className="card-media-image"
        />
      </Card>
      {ButtonDisplay()}
    </Grid>
  );
};
export default DisplayImage;
