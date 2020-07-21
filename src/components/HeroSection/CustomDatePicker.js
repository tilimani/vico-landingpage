import React, { useState } from "react";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import "./CustomDatePicker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };
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
        keyboardIcon={<DateRangeOutlinedIcon color="secondary" />}
      />
    </MuiPickersUtilsProvider>
  );
};

export default CustomDatePicker;
