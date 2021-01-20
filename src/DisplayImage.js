import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import currentBG from "./imgs/backdrop.jpg";

// display picture with quote

const DisplayImage = (props) => {
  // const { imgIndex, images } = props;
  return (
    <Grid item md={8}>
      <Card
        style={{
          backgroundImage: `url(${currentBG})`,
          minWidth: "60vw",
          height: "55vh",
        }}
      ></Card>
    </Grid>
  );
};
export default DisplayImage;
