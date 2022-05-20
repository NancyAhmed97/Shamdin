import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import FavReact from "../../component/VillaForSaleBodrum/FavReact";
import PhotoSlider from "../../component/VillaForSaleBodrum//PhotoSlider";
import { makeStyles } from "@mui/material/styles";
const Galary = () => {
  return (
    <div className="gallery_backBlock">
      <Container maxWidth="lg" className="gallery_big__container">
        <div className="gallery_adRow">
          <Typography align="left" className="gallery_title" variant="h5">
            Mugla Bodrum Villa for resale
          </Typography>

          <FavReact react="Add To Favorites" />
        </div>

        <PhotoSlider />
      </Container>
    </div>
  );
};
export default Galary;
