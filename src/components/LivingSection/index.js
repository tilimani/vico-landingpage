import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import screwedHighlighter from "../../assets/screwedHighlighter.png";
import CardItem from "./CardItem";

import imgCard1 from "../../assets/imgCard1.png";
import imgCard2 from "../../assets/imgCard2.png";
import imgCard3 from "../../assets/imgCard3.png";

const mockData = [
  {
    image: imgCard1,
    title: "Talk directly to verified hosts",
    description:
      "All owners and houses are verified by our teams. Browse our huge variety of homes and speak with hosts before choosing your new place to live."
  },
  {
    image: imgCard2,
    title: "You are covered during the entire stay.",
    description:
      "We take care of the boring stuff. Your stay is covered through a safety deposit, a rental contract and a flexible cancellation policy. We are here for you 7 days of the week."
  },
  {
    image: imgCard3,
    title: "Fall in love with where you live.",
    description:
      "We take care of the boring stuff. Your stay is covered through a the safety deposit, a rental contract and a flexible cancellation policy. We are here for you 7 days of the week."
  }
];

const useStyles = makeStyles(theme => ({
  living_section: { marginTop: "16vh", padding: "0 8vw" },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "115.6%",
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30
    }
  },
  highlighter: {
    position: "relative"
  },
  orange_hightLighter: {
    position: "absolute",
    top: 36,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  section_subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.dark,
    marginTop: "2vh"
  },
  cards_grid: {
    marginTop: "4vh"
  }
}));

const FieldsSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.living_section}>
      <span className={classes.section_title}>
        {`Start `}
        <span className={classes.highlighter}>
          {`loving `}
          <img
            src={screwedHighlighter}
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
        where you live.
      </span>

      <div className={classes.section_subtitle}>
        It's surprisingly hard to find a good place to live. That's why we
        started VICO.{" "}
      </div>

      <Grid container spacing={3} className={classes.cards_grid}>
        {mockData.map((item, index) => (
          <CardItem item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default FieldsSection;
