import React from "react";

const DisplayQuote = ({ quote, author, ...props }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.randomIndex !== "" ? (
        <>
          <h2>{`"${quote}"`}</h2>
          <br />
          <p>{`-${author}`}</p>
        </>
      ) : (
        <h3>Click Below to Generate a Motivational Quote</h3>
      )}
      <button
        onClick={() => {
          props.generateIndex();
        }}
      >
        New Quote
      </button>
      <br />
      <button
        onClick={() => {
          props.delete();
        }}
      >
        {" "}
        Delete Quote{" "}
      </button>
      <br />
    </div>
  );
};
export default DisplayQuote;
