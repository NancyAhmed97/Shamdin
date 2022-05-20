import React from "react";
// MUI Component
import { Box, Container, Link, Typography, Grid, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RoomIcon from "@mui/icons-material/Room";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
const FeaturedProjects = (props) => {
  const { locale } = useRouter();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1250 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1249, min: 900 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 899, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group"
        style={{
          position: "absolute",
          top: "20px",
          right: locale === "ar" ? "82%" : "20px",
        }}
      >
        {" "}
        <div
          className="Featured_arrowRight"
          style={{ right: "20px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={(currentSlide === 0 ? "disable" : "", "Featured_arrow")}
            style={{ transform: " rotateZ( 360deg)" }}
            onClick={() => next()}
          />
        </div>
        <div
          className="Featured_arrowRight"
          style={{ right: "100px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className="Featured_arrow"
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => previous()}
          />
        </div>
      </div>
    );
  };
  return (
    <section className="Featured_project">
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <Box
          style={{
            paddingTop: "20px",
          }}
        >
          <Typography className="Featured_Header" variant="h4">
            Featured Projects
          </Typography>
          <p
            style={{
              marginInline: "0px",
              marginBlock: "10px",
              width: "80%",
              fontSize: "1.1rem",
            }}
          >
            See The Best Real Estate For Sale In Turkey At Cheap Prices And
            Suitable For Real Estate Investment In The Best Real Estate Projects
            And The Most Important Investment Areas
          </p>
        </Box>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={false}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1500}
          autoPlay={false}
          keyBoardControl={true}
          transitionDuration={0}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px project-slider"
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          className="Featured_Carousel"
          //renderButtonGroupOutside={true}
        >
          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/c189a0f65a306007461e3492f65850656.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/685a7c592f87f32277fe0ed09e82bc3613.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/d8a99a0dd9dc563c62314d220159958d8.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/bf457a081b6aa6e062398f6518dbbccbmZD595.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/c189a0f65a306007461e3492f65850656.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/685a7c592f87f32277fe0ed09e82bc3613.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="Featured_root">
            <CardActionArea className="Featured_root">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://www.imtilak.net/image/400/210/projects/d8a99a0dd9dc563c62314d220159958d8.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className="card-body">
                <Typography gutterBottom variant="h5" component="h2">
                  Belven Project IMT - 117
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  color="textSecondary"
                  component="p"
                >
                  <RoomIcon fontSize="small" />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem
                  </Typography>
                  <HomeIcon />
                  <Typography style={{ marginInline: "5px" }} color="primary">
                    lorem lorem lorem
                  </Typography>
                </Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Day After Day And Thanks To Our Competent And Friendly Staff,
                  The Testimonials Of Our Dear Clients Increase And Reflect The
                  Exceptional Services Provided By Our Company,
                </Typography>
                <Typography component="h4">Starting At</Typography>
                <Typography
                  style={{ marginBlock: "20px" }}
                  variant="h4"
                  color="primary"
                  component="h2"
                >
                  1999.99${" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Carousel>

        <Button variant="contained" className="Featured_btn" onClick="">
          View all featured projects
        </Button>
      </Container>
    </section>
  );
};
export default FeaturedProjects;
