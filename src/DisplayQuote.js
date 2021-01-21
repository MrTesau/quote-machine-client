import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import DisplayImage from "./DisplayImage";
import QuoteForm from "./AddQuote.js";

const DisplayQuote = ({ quote, author, ...props }) => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Hidden mdDown>
        <DisplayImage randomIndex={props.randomIndex} />
      </Hidden>

      <Grid item xs={11} md={8} lg={7}>
        <div className="display-quote">
          <div id="quote-selected">
            {props.randomIndex !== "" ? (
              <>
                <h2>{`" ${quote} "`}</h2>
                <br />
                <p>{`-${author}`}</p>
              </>
            ) : (
              <h2>Click Below to Generate a Motivational Quote</h2>
            )}
          </div>
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
        <QuoteForm
          onClose={() => {
            props.fetchQuotes();
          }}
        />
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
