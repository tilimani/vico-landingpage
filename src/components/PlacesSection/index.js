import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

import orangeHightLighter from "../../assets/orangeHightLighter.png";

const useStyles = makeStyles(theme => ({
  places_section: { marginTop: "4vh" },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "115.6%",
    color: theme.palette.secondary.dark,
    padding: "0 8vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30
    }
  },
  highlighter: {
    position: "relative"
  },
  orange_hightLighter: {
    position: "absolute",
    top: 8,
    left: 0
  },
  links_wrapper: {
    display: "flex",
    marginTop: "3vh",
    padding: "0 8vw"
  },
  link_wrapper: {
    display: "flex",
    alignItems: "flex-start",
    marginRight: 20,
    cursor: "pointer"
  },
  link_wrapper_icon: {
    fontSize: 18,
    marginRight: 2
  },
  link_wrapper_text: {
    fontSize: 14,
    color: theme.palette.primary.main
  },
  not_needed_section: {
    height: 262,
    marginTop: "2vh",
    backgroundColor: theme.palette.secondary.main
  }
}));

const PlacesSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.places_section}>
      <span className={classes.section_title}>
        Find the place that fits{" "}
        <span className={classes.highlighter}>
          your needs
          <img
            src={orangeHightLighter}
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
      </span>
      <div className={classes.links_wrapper}>
        <div className={classes.link_wrapper}>
          <AppsOutlinedIcon
            color="primary"
            className={classes.link_wrapper_icon}
          />
          <span className={classes.link_wrapper_text}>
            Show me all the VICOs
          </span>
        </div>
        <div className={classes.link_wrapper}>
          <RoomOutlinedIcon
            color="primary"
            className={classes.link_wrapper_icon}
          />
          <span className={classes.link_wrapper_text}>Show me the map</span>
        </div>
      </div>
      <div className={classes.not_needed_section} />
    </div>
  );
};

export default PlacesSection;
