import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import orangeHightLightLines from "../../assets/orangeHightLightLines.png";
import GridList from "./GridList";

const useStyles = makeStyles(theme => ({
  fields_section: { marginTop: "4vh", padding: "0 8vw" },
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
    left: 0
  }
}));

const FieldsSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.fields_section}>
      <span className={classes.section_title}>
        {`What are you `}
        <span className={classes.highlighter}>
          {`looking `}
          <img
            src={orangeHightLightLines}
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
        for?
      </span>
      <GridList />
    </div>
  );
};

export default FieldsSection;
