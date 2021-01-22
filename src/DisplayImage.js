import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import kael from "./imgs/kael.jpg";
import nic from "./imgs/nic.jpg";
import ronnie from "./imgs/ronnie.jpg";
import jocko from "./imgs/jocko.jpg";
import khabib from "./imgs/khabib.jpg";
import stipe from "./imgs/stipe.jpg";
import amaia from "./imgs/amaia.jpg";
import soviets from "./imgs/soviets.jpg";
import palmerston from "./imgs/palmerston.jpg";
import gulls from "./imgs/gulls.jpg";
import chemist from "./imgs/chemist.jpg";
import interstellar from "./imgs/interstellar.jpg";
import oberyn from "./imgs/oberyn.jpg";
import placeholder from "./imgs/placeholder.jpg";
import ubereem from "./imgs/ubereem.jpg";
import leo from "./imgs/leo.jpg";
import arny from "./imgs/arny.jpg";
import ras from "./imgs/ras.jpg";
import QuoteForm from "./AddQuote.js";

const Imgs = [
  nic,
  khabib,
  jocko,
  stipe,
  ronnie,
  nic,
  amaia,
  soviets,
  palmerston,
  gulls,
  chemist,
  interstellar,
  kael,
  oberyn,
  ubereem,
  leo,
  arny,
  ras,
];

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
            // width: "100vw",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "24rem",
            left: "1.5rem",
          }}
        >
          <button
            className="btn-tweet"
            style={{ marginLeft: "5px" }}
            onClick={() => {
              // props.delete();
            }}
          >
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
              // props.fetchQuotes();
            }}
          />
          <button
            className="btn-delete"
            style={{ marginLeft: "5px" }}
            onClick={() => {
              // props.delete();
            }}
          >
            <i class="fa fa-trash-o" aria-hidden="true"></i> Delete{" "}
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className="btns"
        style={{
          // width: "100vw",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "22.5rem",
          right: "1.5rem",
        }}
      >
        <i
          className="fa fa-play-circle-o fa-2x"
          aria-hidden="true"
          style={{ color: "green" }}
        ></i>
      </div>
    </Grid>
  );
};
export default DisplayImage;
