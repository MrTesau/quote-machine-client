import React from "react";
import Grid from "@material-ui/core/Grid";

const DisplayQuote = ({ quote, author, ...props }) => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={11} md={8} lg={5}>
        <div style={{ textAlign: "center" }}>
          <div className="display-quote">
            {props.randomIndex !== "" ? (
              <>
                <div id="quote-selected">
                  <h2>{`"${quote}"`}</h2>
                </div>
                <br />
                <div id="author-selected">
                  <p>{`-${author}`}</p>
                </div>
              </>
            ) : (
              <div id="quote-selected">
                <h2>Click Below to Generate a Motivational Quote</h2>
                <a
                  id="tweet-quote"
                  className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?text=${quote}`}
                >
                  {" "}
                  Tweet Quote{" "}
                </a>
              </div>
            )}
          </div>
        </div>
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
