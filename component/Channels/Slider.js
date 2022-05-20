import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@mui/material/styles";
import Container from "@mui/material/Container";
import "swiper/css";
import ClickableChip from "../common/ClickableChip";
const Slider = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <div className="slider_backBlock">
      <Container maxWidth="lg" className="slider_big__container">
        {/*<Swiper
      slidesPerView={20}
      // centeredSlides={true}
      spaceBetween={90}
      grabCursor={true}
      pagination={false}
      className="mySwiper"
    >


      {[
        "Let's Discover!",
        'Turkish Citizenship',
        'Ankara Real Estate',
        'Istanbul Real Estate',
        'Shamdin services',
        'Apartments in Istanbul',
        'Villas in Istanbul',
        'Villas in Turkey',
        'Antalya Projects'
      ].map(el => <SwiperSlide><ClickableChip
        key={el}
        handleFunc={handleClick}
        chipName={el}
      /></SwiperSlide>)}
    </Swiper>*/}
      </Container>
    </div>
  );
};
export default Slider;
