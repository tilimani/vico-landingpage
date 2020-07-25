import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Slider from "react-slick";

import logo_eafit from "../assets/logo_eafit.png";
import logo_udm from "../assets/logo_udm.png";
import logo_unal from "../assets/logo_unal.png";
import logo_upb from "../assets/logo_upb.png";

const partners = [logo_eafit, logo_udm, logo_unal, logo_upb];
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
    top: 30,
    left: 0
  },
  partner_img: {
    width: "200px !important"
  },
  image_wrapper: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "200px !important"
  }
}));

const PartnersSection = () => {
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
        <span className={classes.highlighter}>
          Trusted
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YXQb-screwedHighlighter.png"
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
        {`  by our partners`}
      </span>
      <Slider {...settings}>
        {partners.map((item, index) => (
          <div key={index} className={classes.image_wrapper}>
            <img
              key={index}
              src={item}
              alt=""
              className={classes.partner_img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
