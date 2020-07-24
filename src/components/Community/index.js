import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Slider from "react-slick";

import ProfileItem from "./ProfileItem";

const useStyles = makeStyles(theme => ({
  section_wrapper: { marginTop: "8vh", width: "90vw" }
}));

const Community = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className={classes.section_wrapper}>
      <Slider {...settings}>
        {[...Array(5).keys()].map(index => (
          <ProfileItem />
        ))}
      </Slider>
    </div>
  );
};

export default Community;
