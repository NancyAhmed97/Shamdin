import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Slider from "../../component/common/Slider";
import { makeStyles, alpha } from "@mui/material/styles";
const PriceSpaceFilterItem = () => {
  const minPriceRangToParemt = (val) => {
    val;
  };
  return (
    <div className="price_testimonial">
      <Container maxWidth="lg" className="price_big__container">
        <Typography
          className="price_title"
          align="center"
          variant="h6"
          display="block"
        >
          Price And Space
        </Typography>

        <Slider title={"Space"} step={2} min={40} max={1500} unit={"m"} />
        <div className="price_margin" />
        <Slider
          title={"Price"}
          step={1000}
          min={40000}
          max={2000000}
          unit={" $"}
          minPriceRangToParemt={minPriceRangToParemt}
        />
      </Container>
    </div>
  );
};
export default PriceSpaceFilterItem;
