import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import "./CustomDatePicker.css";

const useStyles = makeStyles(theme => ({
  calendar: {
    color: theme.palette.secondary.light
  }
}));

const CustomDatePicker = ({ date, setDate }) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const handleDateChange = date => {
    setSelectedDate(date);
    setDate(date);
  };

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        disableToolbar
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        keyboardIcon={<DateRangeOutlinedIcon className={classes.calendar} />}
      />
    </MuiPickersUtilsProvider>
  );
};

export default CustomDatePicker;
