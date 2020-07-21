import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import smallRec from "../../assets/small-rectangle.png";
import mediumRec from "../../assets/medium-rectangle.png";
import bigRec from "../../assets/big-rectangle.png";

import bgHeroSection from "../../assets/hero_background.png";

import logo from "../../assets/logo.png";
import "./index.css";
import CustomSelect from "./CustomSelect";

const useStyles = makeStyles(theme => ({
  search_area: {
    marginTop: "6vh"
  }
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <div className="hero-section-wrapper">
      {/** LEFT RECTANGLES DESIGN */}
      {/** Dark gray background */}
      <img src={bgHeroSection} className="hero-section-bg" alt="" />
      {/** Three divs that represents left gray rectangles design */}
      <img
        src={smallRec}
        className="left-gray-rectangle"
        style={{ top: "30vh" }}
        alt=""
      />
      <img
        src={smallRec}
        className="left-gray-rectangle"
        style={{ top: "43vh" }}
        alt=""
      />
      <img
        src={mediumRec}
        className="left-gray-rectangle"
        style={{ top: "58vh" }}
        alt=""
      />
      <img
        src={bigRec}
        className="left-gray-rectangle"
        style={{ top: "86.5vh" }}
        alt=""
      />

      {/** MAIN CONTENT (TEXT/PICKERS ...) */}
      <div className="hero-content">
        <img src={logo} alt="logo" id="vico-logo" />
        <span className="title">Love where you live</span>
        <span className="description">
          Find and book furnished rooms and apartments for mid-and long-term
          stays in Medellin and Bogota.
        </span>
        <Grid container spacing={3} className={classes.search_area}>
          <Grid item xs={12} sm={3}>
            <CustomSelect />
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ backgroundColor: "white", color: "gray" }}>2</div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomSelect />
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ backgroundColor: "white", color: "gray" }}>4</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSection;
