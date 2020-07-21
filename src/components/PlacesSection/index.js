import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  places_section: { height: "20vh", padding: "0 8vw", marginTop: "4vh" },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "115.6%",
    color: "#212529"
  }
}));

const PlacesSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.places_section}>
      <span className={classes.section_title}>
        Find the place that fits your needs
      </span>
    </div>
  );
};

export default PlacesSection;
