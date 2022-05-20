/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from "@emotion/styled";

const Styleda = styled.a`
margin: 16px 5px;
  text-decoration: none;
  background-color: transparent;
  color: #37404d;
  background: #ecedee;
  border-radius: 8px;
  padding: 0 0.8rem;
  font-weight: 700;
  font-size: '1rem'
  transition: 0.2s all;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    border-color: #ec94b4;
    background: #fff;
  }
`;

const Item = ({ name }) => {
  return (
    <div>
      <Styleda href="#">{name}</Styleda>
    </div>
  );
};

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    dots: false,
  };
  return (
    <>
      hhhhhhhhhhhhhhhh
      <Slider {...settings}>
        <Item name="firstItem" />
        <Item name="firstItem" />
        <Item name="firstIefetem" />
        <Item name="firstItem" />
        <Item name="firskijunhbvctItem" />
        <Item name="firItem" />
        <Item name="firstItem" />
        <Item name="first.o,imjItem" />
        <Item name="fItem" />
        <Item name="firstItem" />
        <Item name="ftItem" />
        <Item name="fitItem" />
        <Item name="firstItem" />
        <Item name="fItem" />
      </Slider>
    </>
  );
}
