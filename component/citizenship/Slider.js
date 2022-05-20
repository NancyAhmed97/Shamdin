import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Slider() {
  return (
    <div
      style={{
        marginBlock: "50px",
      }}
    >
      <Box
        style={{
          padding: "20px",
          borderRadius: "5px",
          border: "1px solid gray",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{
            marginBlock: "10px",
            paddingBottom: "10px",
            fontWeight: "700px",
            fontSize: "1.6rem",
          }}
          color="primary"
        >
          Testimonial Of Shamdin Clients Who Have Obtained Turkish Citizenship
          By Purchasing A Property
        </Typography>
        <div dir="ltr">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            <div>
              <Card className="citizenship_slider_root">
                <CardActionArea>
                  <CardMedia
                    className="citizenship_slider_media"
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card className="citizenship_slider_root">
                <CardActionArea>
                  <CardMedia
                    className="citizenship_slider_media"
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card className="citizenship_slider_root">
                <CardActionArea>
                  <CardMedia
                    className="citizenship_slider_media"
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div>
              <Card className="citizenship_slider_root">
                <CardActionArea>
                  <CardMedia
                    className="citizenship_slider_media"
                    image="https://i.ytimg.com/vi/VwuNjAZX82s/hqdefault.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h6" color="black" component="h3">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species,
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
