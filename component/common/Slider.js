import React, { useState } from "react";
import { makeStyles } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip arrow enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
export default function RangeSlider(props, { minPriceRangToParemt }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (title === "Price") {
      localStorage.setItem("minPrice", newValue[0]);
      minPriceRangToParemt(newValue[0]);
      localStorage.setItem("maxPrice", newValue[1]);
    } else if (title === "Space") {
      localStorage.setItem("minSpace", newValue[0]);
      localStorage.setItem("maxSpace", newValue[1]);
    }
  };
  const {
    title = "newSlider",
    step = 1,
    min = 0,
    max = 100,
    unit = "",
    handler = handleChange,
  } = props;

  function valuetext(value) {
    return `${value} ${unit}`;
  }
  function valueLabelFormat(value) {
    return `${value} ${unit}`;
  }

  // const classes = useStyles();
  const [value, setValue] = useState([min, max]);

  return (
    <div className="Slider_root">
      <Slider
        value={value}
        onChange={handler}
        ValueLabelComponent={ValueLabelComponent}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        step={step}
        min={min}
        max={max}
      />

      <Typography align="center" id="range-slider" gutterBottom>
        <Box
          sx={{
            fontWeight: "bold",
          }}
        >
          {title}
        </Box>
      </Typography>
    </div>
  );
}
