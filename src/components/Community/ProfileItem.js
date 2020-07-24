import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Ellipse from "../../assets/Ellipse.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  profile_wrapper: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 20,
    width: 400,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "auto"
    }
  },
  name: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 10
  }
}));

const ProfileItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.profile_wrapper}>
      <img src={Ellipse} alt="" />
      <Typography component="p" className={classes.description}>
        Manage your properties efficiently and turn them into a profit by
        becoming a host, you became part of our family.
      </Typography>
      <Typography component="span" className={classes.name}>
        Agathe Alzate
      </Typography>
    </div>
  );
};

export default ProfileItem;
