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
              if (soundUrls[props.randomIndex]) stopSound();
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
                style={{
                  position: "absolute",
                  right: "1.85rem",
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
          ) : (
            ""
          )}
        </div>
      </Grid>
    </Grid>
  );
};
export default DisplayQuote;
