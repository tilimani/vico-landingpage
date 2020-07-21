import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./index.css";
import CustomSelect from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";

const useStyles = makeStyles(theme => ({
  search_area: {
    marginTop: "6vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2vh"
    }
  },
  grid_item_content: {
    width: "100%",
    height: 58,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 12
  }
}));

const HeroSection = () => {
  const classes = useStyles();

  const handleSearch = () => {
    //Search
  };
  return (
    <div className="hero-section-wrapper">
      {/** LEFT RECTANGLES DESIGN */}
      {/** Dark gray background */}
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/PSeo-hero_background.png"
        className="hero-section-bg"
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
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "white",
                color: "white",
                height: 58,
                borderRadius: 12
              }}
            >
              1
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "white",
                color: "white",
                height: 58,
                borderRadius: 12
              }}
            >
              <CustomDatePicker />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "white",
                color: "white",
                height: 58,
                borderRadius: 12
              }}
            >
              1
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.grid_item_content}
              onClick={() => handleSearch()}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSection;
