import React from "react";

const DisplayQuote = ({ quote, author, ...props }) => {
  return (
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
          </div>
        )}
      </div>
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

      <br />
    </div>
  );
};
export default DisplayQuote;
