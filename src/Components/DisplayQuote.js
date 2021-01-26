import React from "react";
import Grid from "@material-ui/core/Grid";
import DisplayImage from "./DisplayImage";
import soundUrls from "../quoteSounds/QuoteSounds";

const DisplayQuote = ({ quote, author, ...props }) => {
  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const playSound = () => {
    setPlaying(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    audioRef.current.onended = () => {
      setPlaying(false);
    };
  };
  const stopSound = () => {
    setPlaying(false);
    audioRef.current.pause();
  };
  const AudioPlayerDisplay = () => {
    if (soundUrls[props.randomIndex]) {
      return (
        <>
          <audio
            ref={audioRef}
            src={soundUrls[props.randomIndex]}
            style={{ display: "none" }}
          />
          <div
            style={{
              position: "absolute",
              right: "-2.5rem",
              top: "0rem",
            }}
            onClick={() => {
              !playing ? playSound() : stopSound();
            }}
          >
            {!playing ? (
              <i
                className="fa fa-play-circle fa-2x"
                aria-hidden="true"
                style={{ color: "#228B22" }}
              ></i>
            ) : (
              <i
                class="fa fa-stop-circle fa-2x"
                aria-hidden="true"
                style={{ color: "maroon" }}
              ></i>
            )}
          </div>
        </>
      );
    }
  };
  return (
    <Grid
      container
      spacing={6}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <DisplayImage quote={quote} randomIndex={props.randomIndex} />
      <Grid item xs={11} md={8}>
        <div className="display-quote">
          {props.randomIndex !== "" ? (
            <>
              <h3 className="display-quote-main-text">{`${quote}`}</h3>
              <br />
              <p className="display-quote-info-text">{`-${author}`}</p>
            </>
          ) : (
            <h3 className="display-quote-main-text">
              Click Below to Generate a Motivational Quote
            </h3>
          )}
        </div>
      </Grid>
      <Grid item xs={11} md={8} justify="center" alignItems="center">
        {" "}
        <div style={{ position: "relative" }}>
          <button
            className="btn"
            onClick={() => {
              props.generateIndex();
              if (soundUrls[props.randomIndex]) stopSound();
            }}
          >
            Generate Inspiration
          </button>
          {AudioPlayerDisplay()}
        </div>
      </Grid>
    </Grid>
  );
};
export default DisplayQuote;
