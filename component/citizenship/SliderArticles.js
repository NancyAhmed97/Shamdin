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
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VisibilityIcon from "@mui/icons-material/Visibility";
// Styles
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
            fontWeight: "700!important",
            fontSize: "1.6rem",
          }}
          color="primary"
        >
          Articles About Turkish Citizenship And Ways To Obtain It
        </Typography>
        <div dir="ltr">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carouselArticles"
          >
            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>

            <div>
              <Card
                variant="outlined"
                style={{ borderRadius: "10px", marginInline: "10px" }}
              >
                <Box className="slider_articles_boxImagesmall">
                  <span className="slider_articles_span">New</span>
                  <Typography
                    className="slider_articles_paragsmall"
                    variant="h2"
                  >
                    An increase of
                  </Typography>
                </Box>
                <Box style={{ backgroundColor: "#eee" }}>
                  <Typography
                    style={{
                      width: "100%",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                      padding: "10px 5px",
                      fontSize: "18px",
                    }}
                    className="slider_articles_hover"
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Typography
                    style={{
                      margin: "10px 10px 20px 10px",
                      fontSize: "16px",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Apartments For Sale In The Luxurious NISHANTASHI | Carlton
                    Project In Istanbul
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <EventAvailableIcon size="small" />
                      2022-02-22
                    </Typography>
                    <Typography style={{ display: "flex", fontSize: "14px" }}>
                      <VisibilityIcon size="small" />
                      548
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
