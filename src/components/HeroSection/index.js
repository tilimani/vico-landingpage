import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/PSeo-hero_background.png"
        className="hero-section-bg"
        alt=""
      />
      {/** Three divs that represents left gray rectangles design */}
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/cc_I-small-rectangle.png"
        className="left-gray-rectangle"
        style={{ top: "30vh" }}
        alt=""
      />
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/cc_I-small-rectangle.png"
        className="left-gray-rectangle"
        style={{ top: "43vh" }}
        alt=""
      />
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ln_O-medium-rectangle.png"
        className="left-gray-rectangle"
        style={{ top: "58vh" }}
        alt=""
      />
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/kH2d-big-rectangle.png"
        className="left-gray-rectangle"
        style={{ top: "86.5vh" }}
        alt=""
      />

      {/** MAIN CONTENT (TEXT/PICKERS ...) */}
      <div className="hero-content">
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/X7w8-logo.png"
          alt="logo"
          id="vico-logo"
        />
        <span className="title">Love where you live</span>
        <span className="description">
          Find and book furnished rooms and apartments for mid-and long-term
          stays in Medellin and Bogota.
        </span>
        <Grid container spacing={3} className={classes.search_area}>
          <Grid item xs={12} sm={3}>
            <div style={{ backgroundColor: "white", color: "gray" }}>2</div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ backgroundColor: "white", color: "gray" }}>2</div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ backgroundColor: "white", color: "gray" }}>2</div>
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
