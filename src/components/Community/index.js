import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Slider from "react-slick";

import ProfileItem from "./ProfileItem";

import illustration from "../../assets/illustration4.png";

const useStyles = makeStyles(theme => ({
  section_wrapper: { marginTop: "8vh", width: "90vw" },
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
    top: -24,
    left: -38
  }
}));

const Community = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:960px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: isMobileScreen ? 1 : 3,
    slidesToScroll: 1
  };

  return (
    <div className={classes.section_wrapper}>
      <span className={classes.section_title}>
        {`Meet our `}
        <span className={classes.highlighter}>
          community
          <img
            src={illustration}
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
      </span>
      <Slider {...settings}>
        {[...Array(5).keys()].map(index => (
          <ProfileItem key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Community;
