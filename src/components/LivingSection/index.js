import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CardItem from "./CardItem";

import bg1 from "../../assets/Background_card1.png";
import bg2 from "../../assets/Background_card2.png";
import bg3 from "../../assets/Background_card3.png";

import image1 from "../../assets/Illustration_Card1.png";
import image2 from "../../assets/Illustration_Card2.png";
import image3 from "../../assets/Illustration_Card3.png";

const mockData = [
  {
    image: image1,
    background: bg1,
    title: "Talk directly to verified hosts",
    description:
      "All owners and houses are verified by our teams. Browse our huge variety of homes and speak with hosts before choosing your new place to live."
  },
  {
    image: image2,
    background: bg2,
    title: "You are covered during the entire stay.",
    description:
      "We take care of the boring stuff. Your stay is covered through a safety deposit, a rental contract and a flexible cancellation policy. We are here for you 7 days of the week."
  },
  {
    image: image3,
    background: bg3,
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
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YXQb-screwedHighlighter.png"
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
