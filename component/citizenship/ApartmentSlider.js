import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTranslations } from "next-intl";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const t = useTranslations('general');
function Slider() {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group"
        style={{
          position: "absolute",
          top: "1%",
          left: "50%",
        }}
      >
        {" "}
        <div
          className="apartment_slider_arrowRight"
          style={{ right: "20px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={
              (currentSlide === 0 ? "disable" : "", "apartment_slider_arrow")
            }
            style={{ transform: " rotateZ( 360deg)" }}
            onClick={() => next()}
          />
        </div>
        <div
          className="apartment_slider_arrowRight"
          style={{ right: "100px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className="apartment_slider_arrow"
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => previous()}
          />
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        marginBlock: "50px",
      }}
      className="Apartment"
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
          style={{ marginBlock: "10px", paddingBottom: "10px",fontSize:"1.6rem",fontWeight:"700",color:"#ec94b4" }}
        >
          Apartments, Villas, And Shops Conform To Obtaining Turkish Citizenship
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
            containerclassName="apartment_carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            customButtonGroup={<ButtonGroup />}
          >
            <div className="turkish-card">
              <div className="card-img">
                <a href="https://www.imtilak.net/en/apartments/ispartakule-towers">
                  <img
                    src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    data-src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    alt="Ebruli Project IMT-83"
                    title="Government Guaranteed Apartments- Ebruli IspartaKule"
                    className="blur-up lazyloaded"
                  />
                </a>
              </div>
              <div className="card-body py-3 py-lg-4">
                <div className="number">IMT-83</div>
                <div className="card-title font-weight-bold">
                  Ebruli Project IMT-83
                </div>
                <div className="prop-location mb-2">
                  <div className="location-contain">
                    <div className="mb-2">
                      <LocationOnIcon
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      <a
                        className="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                      >
                        Istanbul
                      </a>
                      ,{" "}
                      <a
                        className="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul/basaksehir"
                      >
                        Basaksehir
                      </a>
                    </div>
                    <div>
                      <div className="d-inline-block">
                        <HomeIcon
                          style={{
                            fontSize: "15px",
                          }}
                        />

                        <a
                          className="info text-capitalize"
                          href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                        >
                          Apartments
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <i
                          className="fas fa-hand-holding-usd"
                          aria-hidden="true"
                        ></i>
                        <span className="info text-capitalize">
                          Installments
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price-contain">
                    <p className="text-muted mb-0">Starting at</p>
                    <p className="price font-weight-bold">
                      <span dir="ltr">
                        <span dir="ltr">355,000 $</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="card-link"
                href="https://www.imtilak.net/en/apartments/ispartakule-towers"
              >
                <i
                  className="fas fa-long-arrow-alt-left mr-3 d-none d-lg-inline-block"
                  aria-hidden="true"
                ></i>
                <span>click here</span>
              </a>
            </div>

            <div className="turkish-card">
              <div className="card-img">
                <a href="https://www.imtilak.net/en/apartments/ispartakule-towers">
                  <img
                    src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    data-src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    alt="Ebruli Project IMT-83"
                    title="Government Guaranteed Apartments- Ebruli IspartaKule"
                    className="blur-up lazyloaded"
                  />
                </a>
              </div>
              <div className="card-body py-3 py-lg-4">
                <div className="number">IMT-83</div>
                <div className="card-title font-weight-bold">
                  Ebruli Project IMT-83
                </div>
                <div className="prop-location mb-2">
                  <div className="location-contain">
                    <div className="mb-2">
                      <LocationOnIcon
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      <a
                        className="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                      >
                        Istanbul
                      </a>
                      ,{" "}
                      <a
                        className="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul/basaksehir"
                      >
                        Basaksehir
                      </a>
                    </div>
                    <div>
                      <div className="d-inline-block">
                        <HomeIcon
                          style={{
                            fontSize: "15px",
                          }}
                        />

                        <a
                          className="info text-capitalize"
                          href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                        >
                          Apartments
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <i
                          className="fas fa-hand-holding-usd"
                          aria-hidden="true"
                        ></i>
                        <span className="info text-capitalize">
                          Installments
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price-contain">
                    <p className="text-muted mb-0">Starting at</p>
                    <p className="price font-weight-bold">
                      <span dir="ltr">
                        <span dir="ltr">355,000 $</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="card-link"
                href="https://www.imtilak.net/en/apartments/ispartakule-towers"
              >
                <i
                  className="fas fa-long-arrow-alt-left mr-3 d-none d-lg-inline-block"
                  aria-hidden="true"
                ></i>
                <span>click here</span>
              </a>
            </div>

            <div className="turkish-card">
              <div className="card-img">
                <a href="https://www.imtilak.net/en/apartments/ispartakule-towers">
                  <img
                    src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    data-src="https://www.imtilak.net/crop/570/500/projects/bf7524a083eceaabc81cc8f61060b77515.jpg"
                    alt="Ebruli Project IMT-83"
                    title="Government Guaranteed Apartments- Ebruli IspartaKule"
                    className="blur-up lazyloaded"
                  />
                </a>
              </div>
              <div className="card-body py-3 py-lg-4">
                <div className="number">IMT-83</div>
                <div className="card-title font-weight-bold">
                  Ebruli Project IMT-83
                </div>
                <div className="prop-location mb-2">
                  <div className="location-contain">
                    <div className="mb-2">
                      <LocationOnIcon
                        style={{
                          fontSize: "15px",
                        }}
                      />
                      <a
                        className="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                      >
                        Istanbul
                      </a>
                      ,{" "}
                      <a
                        className="info text-capitalize"
                        href="https://www.imtilak.net/en/apartments/for-sale/istanbul/basaksehir"
                      >
                        Basaksehir
                      </a>
                    </div>
                    <div>
                      <div className="d-inline-block">
                        <HomeIcon
                          style={{
                            fontSize: "15px",
                          }}
                        />

                        <a
                          className="info text-capitalize"
                          href="https://www.imtilak.net/en/apartments/for-sale/istanbul"
                        >
                          Apartments
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <i
                          className="fas fa-hand-holding-usd"
                          aria-hidden="true"
                        ></i>
                        <span className="info text-capitalize">
                          Installments
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price-contain">
                    <p className="text-muted mb-0">Starting at</p>
                    <p className="price font-weight-bold">
                      <span dir="ltr">
                        <span dir="ltr">355,000 $</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="card-link"
                href="https://www.imtilak.net/en/apartments/ispartakule-towers"
              >
                <i
                  className="fas fa-long-arrow-alt-left mr-3 d-none d-lg-inline-block"
                  aria-hidden="true"
                ></i>
                <span>click here</span>
              </a>
              <div >
                <Link>{t('viewAllFeaturedProjects')}</Link>
              </div>
            </div>
          
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
