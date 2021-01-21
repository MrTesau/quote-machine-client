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
];

const DisplayImage = (props) => {
  const { randomIndex } = props;
  return (
    <Grid item md={8}>
      <Card>
        <CardMedia
          image={randomIndex !== "" ? Imgs[randomIndex] : placeholder}
          title="quote Img"
          style={{ width: "45rem", height: "26rem" }}
        />
      </Card>
    </Grid>
  );
};
export default DisplayImage;
