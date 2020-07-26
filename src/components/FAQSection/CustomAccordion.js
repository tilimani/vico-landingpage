import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  expand_icon: {
    color: theme.palette.secondary.light,
    fontSize: 20
  },
  accordion_wrapper: {
    position: "relative",
    height: "100%",
    boxShadow: "none",
    borderBottom: "1px solid  rgba(196, 196, 196, 0.38)"
  }
}));
const CustomAccordion = props => {
  const classes = useStyles();
  const { item } = props;
  return (
    <Accordion className={classes.accordion_wrapper}>
      <AccordionSummary
        expandIcon={
          <AddCircleOutlineOutlinedIcon className={classes.expand_icon} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.question}>{item.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.response}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
