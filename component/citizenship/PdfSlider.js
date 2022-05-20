import React from "react";

import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Container, Link, Typography, Grid, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 170,
//   },
//   arrow: {
//     filter: "unset",
//     zIndex: 555,
//     backgroundColor: "white",
//     borderRadius: "50%",
//   },
//   arrowRight: {
//     borderRadius: "50%",
//     backgroundColor: "#ec94b4",
//     width: "50px",
//     height: "50px",
//     cursor: "pointer",
//     boxShadow:
//       "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
//     alignItems: "center",
//     display: "flex",
//     justifyContent: "center",
//   },
// });
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Slider() {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "20%",
        }}
      >
        {" "}
        <div
          className="pdf_slider_arrowRight"
          style={{ right: "20px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={
              (currentSlide === 0 ? "disable" : "", "pdf_slider_arrow")
            }
            style={{ transform: " rotateZ( 360deg)" }}
            onClick={() => next()}
          />
        </div>
        <div
          className="pdf_slider_arrowRight"
          style={{ right: "100px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className="pdf_slider_arrow"
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => previous()}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className="citezinship"
      style={{
        marginBlock: "50px",
      }}
    >
              <Typography
          variant="h4"
          align="center"
          style={{ marginBlock: "10px", paddingBottom: "10px" ,fontSize:"2rem",fontWeight:"700",color:"#ec94b4",marginBottom:"48px"}}
        >
          The Most Important Citizenship Laws In Turkey And Their Translation
        </Typography>
      <Box
        style={{
          padding: "20px",
          borderRadius: "5px",
          border: "1px solid gray",
          backgroundColor: "white",
        }}
      >

        <div dir="ltr">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="pdf_slider_carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            customButtonGroup={<ButtonGroup />}
            //renderButtonGroupOutside={true}
          >
            <div>
              <div
                className="item pt-4 py-lg-4"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid item container xs={12} md={12}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ display: `${isDesktop ? "block" : "none"}` }}
                  >
                    <div className="translation d-flex flex-column">
                      <div className="info inner-content pt-3">
                        <div dir="ltr">
                          <strong>
                            A DECISION TO AMEND THE APPLICATION OF THE TURKISH
                            CITIZENSHIP GRANTING LAW
                          </strong>
                        </div>
                        <div dir="ltr">
                          <strong>Article 1</strong>
                        </div>
                        <div dir="ltr">
                          The Law relating to the Turkish citizenship in force
                          has been amended in accordance with the Council of
                          Minister's decision dated 11/2/2010, No. 1/2010/2010.
                        </div>
                        <div dir="ltr">
                          By amending the term "as requested by the Council of
                          Ministers and the Minister" in Article 20 of the Law,
                          with the term "as requested by the President of the
                          Republic". &nbsp;
                        </div>
                        <div dir="ltr">
                          And amending the terms in item (a) of the same
                          paragraph, instead of the term "2,000,000 USD"
                          "Ministry of Economy" terms "500,000 USD or what
                          equals in Turkish Lira" "Ministry of Industry and
                          Technologies "... are put.
                        </div>
                        <div dir="ltr">
                          And amending the terms in item (b), Instead of the
                          term "1,000,000 USD" the term "250,000 USD or
                          equivalent in Turkish Lira".
                        </div>
                        <div dir="ltr">
                          And amending the terms in item (c) Instead of the term
                          "100" "Ministry of Labor and Social Security" the term
                          "50" is put in order "Ministry of Labor and Social
                          Security".
                        </div>
                        <div dir="ltr">
                          And amending the terms in item (ç) Instead of
                          "3,000,000 USD" "Treasury Advisory" terms "500,000 or
                          equivalent to Turkish Lira" "Ministry of Treasury and
                          Finance" are put.
                        </div>
                        <div dir="ltr">
                          And amending the term (d) in this way: "Foreign
                          currency of at least 500,000 USD or at least what
                          equals this amount of money, or a real estate
                          investment equivalent to that amount, or capital
                          investment provided that this investment is to be
                          maintained for at least three years, and verifying
                          that by the Capital Markets Authority."
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={6} style={{ display: "block" }}>
                    <div className="image">
                      <img
                        style={{ width: "100%" }}
                        src="https://www.imtilak.net/uploads/pages/custom/file-1604561107-4G3ANXQmkdvvxnualrdHpGPo25Jij4i1dCJCIOvE.jpeg"
                        alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div>
              <div
                className="item pt-4 py-lg-4"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  className="translation d-flex flex-column"
                  style={{ width: "50%" }}
                >
                  <div className="info inner-content pt-3">
                    <div dir="ltr">
                      <strong>
                        A DECISION TO AMEND THE APPLICATION OF THE TURKISH
                        CITIZENSHIP GRANTING LAW
                      </strong>
                    </div>
                    <div dir="ltr">
                      <strong>Article 1</strong>
                    </div>
                    <div dir="ltr">
                      The Law relating to the Turkish citizenship in force has
                      been amended in accordance with the Council of Minister's
                      decision dated 11/2/2010, No. 1/2010/2010.
                    </div>
                    <div dir="ltr">
                      By amending the term "as requested by the Council of
                      Ministers and the Minister" in Article 20 of the Law, with
                      the term "as requested by the President of the Republic".
                      &nbsp;
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (a) of the same paragraph,
                      instead of the term "2,000,000 USD" "Ministry of Economy"
                      terms "500,000 USD or what equals in Turkish Lira"
                      "Ministry of Industry and Technologies "... are put.
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (b), Instead of the term
                      "1,000,000 USD" the term "250,000 USD or equivalent in
                      Turkish Lira".
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (c) Instead of the term
                      "100" "Ministry of Labor and Social Security" the term
                      "50" is put in order "Ministry of Labor and Social
                      Security".
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (ç) Instead of "3,000,000
                      USD" "Treasury Advisory" terms "500,000 or equivalent to
                      Turkish Lira" "Ministry of Treasury and Finance" are put.
                    </div>
                    <div dir="ltr">
                      And amending the term (d) in this way: "Foreign currency
                      of at least 500,000 USD or at least what equals this
                      amount of money, or a real estate investment equivalent to
                      that amount, or capital investment provided that this
                      investment is to be maintained for at least three years,
                      and verifying that by the Capital Markets Authority."
                    </div>
                  </div>
                </div>
                <div className="image" style={{ width: "50%" }}>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/uploads/pages/custom/file-1604561107-4G3ANXQmkdvvxnualrdHpGPo25Jij4i1dCJCIOvE.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                className="item pt-4 py-lg-4"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  className="translation d-flex flex-column"
                  style={{ width: "50%" }}
                >
                  <div className="info inner-content pt-3">
                    <div dir="ltr">
                      <strong>
                        A DECISION TO AMEND THE APPLICATION OF THE TURKISH
                        CITIZENSHIP GRANTING LAW
                      </strong>
                    </div>
                    <div dir="ltr">
                      <strong>Article 1</strong>
                    </div>
                    <div dir="ltr">
                      The Law relating to the Turkish citizenship in force has
                      been amended in accordance with the Council of Minister's
                      decision dated 11/2/2010, No. 1/2010/2010.
                    </div>
                    <div dir="ltr">
                      By amending the term "as requested by the Council of
                      Ministers and the Minister" in Article 20 of the Law, with
                      the term "as requested by the President of the Republic".
                      &nbsp;
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (a) of the same paragraph,
                      instead of the term "2,000,000 USD" "Ministry of Economy"
                      terms "500,000 USD or what equals in Turkish Lira"
                      "Ministry of Industry and Technologies "... are put.
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (b), Instead of the term
                      "1,000,000 USD" the term "250,000 USD or equivalent in
                      Turkish Lira".
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (c) Instead of the term
                      "100" "Ministry of Labor and Social Security" the term
                      "50" is put in order "Ministry of Labor and Social
                      Security".
                    </div>
                    <div dir="ltr">
                      And amending the terms in item (ç) Instead of "3,000,000
                      USD" "Treasury Advisory" terms "500,000 or equivalent to
                      Turkish Lira" "Ministry of Treasury and Finance" are put.
                    </div>
                    <div dir="ltr">
                      And amending the term (d) in this way: "Foreign currency
                      of at least 500,000 USD or at least what equals this
                      amount of money, or a real estate investment equivalent to
                      that amount, or capital investment provided that this
                      investment is to be maintained for at least three years,
                      and verifying that by the Capital Markets Authority."
                    </div>
                  </div>
                </div>
                <div className="image" style={{ width: "50%" }}>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.imtilak.net/uploads/pages/custom/file-1604561107-4G3ANXQmkdvvxnualrdHpGPo25Jij4i1dCJCIOvE.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Box>
    </div>
  );
}

export default Slider;
