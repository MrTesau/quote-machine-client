import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import DisplayImage from "./DisplayImage";
import QuoteForm from "./AddQuote.js";
import scraping from "./quoteSounds/scraping.mp3";
import chemist from "./quoteSounds/chemist.mp3";

const soundUrls = [
  scraping,
  "",
  "",
  "",
  "",
  scraping,
  "",
  "",
  "",
  "",
  chemist,
  "",
  "",
  scraping,
  "",
  "",
  scraping,
  "",
];
const DisplayQuote = ({ quote, author, ...props }) => {
  const audioRef = React.useRef(null);
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  /*
  const stopSound = () => {
    audioRef.current.pause();
  };
  */
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
                <h3>{`${quote}`}</h3>
                <br />
                <p>{`-${author}`}</p>
              </>
            ) : (
              <h3>Click Below to Generate a Motivational Quote</h3>
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
          {soundUrls[props.randomIndex] ? (
            <>
              <audio
                ref={audioRef}
                src={soundUrls[props.randomIndex]}
                style={{ display: "none" }}
              />
              <div
                className="btns"
                style={{
                  position: "absolute",
                  right: "2rem",
                }}
                onClick={playSound}
              >
                <i
                  className="fa fa-play-circle fa-2x"
                  aria-hidden="true"
                  style={{ color: "#228B22", margin: 0 }}
                ></i>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </Grid>
    </Grid>
  );
};
export default DisplayQuote;
