import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
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
  const isMobileScreen = useMediaQuery("(max-width:960px)");
  // useEffect(() => {
  //   !isMobileScreen &&
  //     document
  //       .getElementsByClassName("slick-slide slick-active")[1]
  //       .classList.add("active-profile");
  // });
  return (
    <div className={classes.profile_wrapper}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/CoqH-Ellipse.png"
        alt=""
      />
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
