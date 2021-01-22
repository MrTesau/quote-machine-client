import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import DisplayImage from "./DisplayImage";
import QuoteForm from "./AddQuote.js";

const DisplayQuote = ({ quote, author, ...props }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <DisplayImage quote={quote} randomIndex={props.randomIndex} />

      <Grid item xs={11} md={8}>
        <div className="display-quote">
          <div id="quote-selected">
            {props.randomIndex !== "" ? (
              <>
                <h2>{`${quote}`}</h2>
                <br />
                <p>{`-${author}`}</p>
              </>
            ) : (
              <h2>Click Below to Generate a Motivational Quote</h2>
            )}
          </div>
        </div>
      </Grid>
      {/*
      <Grid
        item
        xs={11}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
      </Grid> */}
      <Grid item xs={11} md={8}>
        <div className="container">
          <button
            className="btn"
            onClick={() => {
              props.generateIndex();
            }}
          >
            Generate Inspiration
          </button>
        </div>
      </Grid>
    </Grid>
  );
};
export default DisplayQuote;
