import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

import "./CustomSelect.css";

const useStyles = makeStyles({
  select: {
    "& ul": {
      backgroundColor: "#cccccc"
    },
    "& li": {
      fontSize: 12
    }
  }
});
const CustomSelect = () => {
  const classes = useStyles();
  return (
    <Select
      defaultValue={10}
      aria-controls="customized-menu"
      aria-haspopup="true"
      MenuProps={{ classes: { paper: classes.select } }}
    >
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </Select>
  );
};

export default CustomSelect;
