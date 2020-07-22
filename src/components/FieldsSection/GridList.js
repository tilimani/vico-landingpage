import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import GridItem from "./GridItem";

import Laureles from "../../assets/Laureles.jpg";
import Apartment from "../../assets/Aparment.jpg";
import Bathroom from "../../assets/Bathroom.jpg";
import Chapinero from "../../assets/Chapinero.jpg";
import Economic from "../../assets/Economic.jpg";
import Studio from "../../assets/Studio.jpg";

const mockData = [
  {
    title: "Laureles",
    image: Laureles
  },
  {
    title: "Apartment",
    image: Apartment
  },
  {
    title: "Private bathroom",
    image: Bathroom
  },
  {
    title: "Chapinero",
    image: Chapinero
  },
  {
    title: "Economic",
    image: Economic
  },
  {
    title: "Studio",
    image: Studio
  },
  {
    title: "Laureles",
    image: Laureles
  },
  {
    title: "Apartment",
    image: Apartment
  },
  {
    title: "Private bathroom",
    image: Bathroom
  }
];
const useStyles = makeStyles(theme => ({
  list: {
    marginTop: "4vh"
  }
}));
const GridList = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.list}>
      {mockData.map((item, index) => (
        <GridItem key={index} title={item.title} image={item.image} />
      ))}
    </Grid>
  );
};

export default GridList;
