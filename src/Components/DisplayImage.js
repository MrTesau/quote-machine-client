import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import QuoteForm from "./AddQuote.js";
import DeleteForm from "./DeleteQuote.js";
import placeholder from "../imgs/placeholder.jpg";
import Imgs from "../imgs/QuoteImages";
import { deleteQuote } from "../API/API.js";

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
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "24rem",
            left: "1.5rem",
          }}
        >
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
      ) : (
        ""
      )}
    </Grid>
  );
};
export default DisplayImage;
