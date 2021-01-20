import React from "react";
import Grid from "@material-ui/core/Grid";
import DisplayImage from "./DisplayImage";

// display picture with quote

const DisplayQuote = ({ quote, author, ...props }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <DisplayImage />
      <Grid item xs={11} md={8} lg={6}>
        <div className="display-quote">
          {props.randomIndex !== "" ? (
            <>
              <div id="quote-selected">
                <h2>{`"${quote}"`}</h2>
              </div>

              <p>{`-${author}`}</p>
            </>
          ) : (
            <div id="quote-selected">
              <h2>Click Below to Generate a Motivational Quote</h2>
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={11} style={{ display: "flex", justifyContent: "center" }}>
        <a
          id="tweet-quote"
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${quote}`}
        >
          {" "}
          Tweet Quote{" "}
        </a>
      </Grid>
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
          <br />
          <button
            className="btn"
            onClick={() => {
              props.delete();
            }}
          >
            {" "}
            Delete Quote{" "}
          </button>
        </div>
      </Grid>
    </Grid>
  );
};
export default DisplayQuote;
