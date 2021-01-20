import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import currentBG from "./imgs/backdrop.jpg";
import ronnie from "./imgs/ronnie.jpg";
import jocko from "./imgs/jocko.jpg";

// display picture with quote

const DisplayImage = (props) => {
  // const { imgIndex, images } = props;
  return (
    <Grid item md={8}>
      <Card
        style={
          {
            //backgroundImage: `url(${currentBG})`,
            // minWidth: "50vw",
            // height: "55vh",
            //display: "flex",
            //justifyContent: "center",
            //padding: "0.5rem",
          }
        }
      >
        <CardMedia
          //className={classes.media}
          image={ronnie}
          title="Contemplative Reptile"
          style={{ width: "45vw", height: "45vh" }}
        />
      </Card>
    </Grid>
  );
};
export default DisplayImage;
