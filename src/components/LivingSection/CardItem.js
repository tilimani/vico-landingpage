import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    padding: "50px 40px",
    boxShadow: "0px 8px 27px rgba(0, 0, 0, 0.1)",
    borderRadius: 6,
    height: 320,
    cursor: "pointer"
  },
  description: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    marginTop: 40
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    lineHeight: 1.2
  },
  card_header: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    height: "50%"
  },
  card_header_image_wrapper: {
    marginRight: 20,
    position: "relative",
    width: "50%"
  },
  card_header_image: { float: "right", width: 200 },
  card_header_typo_wrapper: {
    position: "relative",
    width: "50%",
    marginBottom: 20
  },
  description_wrapper: {
    position: "relative",
    height: "50%"
  }
}));

const CardItem = props => {
  const classes = useStyles();
  const { item } = props;
  const { image, title, description } = item;
  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.card}>
        <div className={classes.card_header}>
          <div className={classes.card_header_image_wrapper}>
            <img
              src={image}
              alt={title}
              className={classes.card_header_image}
            />
          </div>
          <div className={classes.card_header_typo_wrapper}>
            <Typography component="span" className={classes.title}>
              {title}
            </Typography>
          </div>
        </div>
        <div className={classes.description_wrapper}>
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

export default CardItem;
