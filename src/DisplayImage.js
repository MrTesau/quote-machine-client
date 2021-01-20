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
];

const DisplayImage = (props) => {
  const { randomIndex } = props;
  return (
    <Grid item md={8}>
      <Card>
        <CardMedia
          //className={classes.media}
          image={Imgs[randomIndex]}
          title="Contemplative Reptile"
          style={{ width: "45vw", height: "55vh" }}
        />
      </Card>
    </Grid>
  );
};
export default DisplayImage;
