import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import home from "../../assets/home.png";
import arrow from "../../assets/arrow.png";
import orangeHighlighter from "../../assets/orangeHighlighter2.png";

import icon_home from "../../assets/icon_home.png";
import icon_chat from "../../assets/icon_chat.png";
import icon_sheet from "../../assets/icon_sheet.png";
import icon_smile from "../../assets/icon_smile.png";

const useStyles = makeStyles(theme => ({
  steps_section: {
    marginTop: "8vh",
    padding: "0 8vw"
  },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    display: "flex",
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 42
    }
  },
  highlighter: {
    position: "relative",
    marginLeft: 20
  },
  orange_hightLighter: {
    position: "absolute",
    top: -16,
    left: -9
  },
  arrow_wrapper: {
    padding: "0px 20px"
  },
  subtitle: {
    color: theme.palette.secondary.dark,
    fontSize: 16,
    marginTop: 20
  },
  steps_grid: {
    marginTop: 20
  },
  step_item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  step_item_image: {
    position: "relative",
    height: "50%"
  },
  step_item_title: {
    position: "relative",
    height: "50%",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "2vh"
  },
  home_image_wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  home_image: {
    position: "relative",
    width: "100%"
  },
  section_title_grid: {
    padding: "0px !important"
  },
  search_button: {
    height: 58,
    width: 309,
    borderRadius: 12,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: "6vh",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: 20
    }
  }
}));

const StepsSection = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const getTitleComponent = () => {
    return (
      <Fragment>
        {isMobileScreen ? (
          <Grid container spacing={3} className={classes.section_title}>
            <Grid item sm={12} md={6} className={classes.section_title_grid}>
              <span>{`Move in `}</span>
            </Grid>
            <Grid item sm={2} md={6} className={classes.section_title_grid}>
              <div className={classes.arrow_wrapper}>
                <img src={arrow} alt="arrow" />
              </div>
            </Grid>
            <Grid item sm={8} md={6} className={classes.section_title_grid}>
              <span>{` Start `}</span>
              <span className={classes.highlighter}>
                {` living`}
                <img
                  src={orangeHighlighter}
                  alt=""
                  className={classes.orange_hightLighter}
                />
              </span>
            </Grid>
          </Grid>
        ) : (
          <div className={classes.section_title}>
            <span>{`Move in `}</span>
            <div className={classes.arrow_wrapper}>
              <img src={arrow} alt="arrow" />
            </div>
            <span>{` Start `}</span>
            <span className={classes.highlighter}>
              {` living`}
              <img
                src={orangeHighlighter}
                alt=""
                className={classes.orange_hightLighter}
              />
            </span>
          </div>
        )}
      </Fragment>
    );
  };
  const handleSearch = () => {
    //sreach
  };
  return (
    <div className={classes.steps_section}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} className={classes.home_image_wrapper}>
          <img src={home} alt="home" className={classes.home_image} />
        </Grid>
        <Grid item sm={12} md={6}>
          {getTitleComponent()}
          <div className={classes.subtitle}>
            <span>Find a new home in just a few steps</span>
          </div>
          <Grid container spacing={3} className={classes.steps_grid}>
            <Grid item xs={6} sm={6} md={3} className={classes.step_item}>
              <div className={classes.step_item_image}>
                <img src={icon_home} alt="Request a stay." />
              </div>

              <div className={classes.step_item_title}>
                <span>
                  Request a <br /> stay.
                </span>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.step_item}>
              <div className={classes.step_item_image}>
                <img src={icon_chat} alt="Chat with the host." />
              </div>

              <div className={classes.step_item_title}>
                <span>
                  Chat with the <br /> host.
                </span>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.step_item}>
              <div className={classes.step_item_image}>
                <img src={icon_sheet} alt="Book your room." />
              </div>

              <div className={classes.step_item_title}>
                <span>
                  Book your <br /> room.
                </span>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.step_item}>
              <div className={classes.step_item_image}>
                <img src={icon_smile} alt="Move in and join our community" />
              </div>

              <div className={classes.step_item_title}>
                <span>
                  Move in and join <br /> our community
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.search_button}
        onClick={() => handleSearch()}
      >
        Search my new home
      </Button>
    </div>
  );
};

export default StepsSection;
