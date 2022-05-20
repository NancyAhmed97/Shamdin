import { Box, Container, Link, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles, alpha } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';
import getData from '../../helpers/getData';

// import { getData } from "../../pages/api/data";
const Index = (props) => {
  const { locale } = useRouter();
  const [reviews, setReviews] = useState([]);
  const t = useTranslations('general');
  
  useEffect(() => {
    let active = true;

    async function getRows() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'reviews', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setReviews(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getRows();

    return () => {
      active = false;
    };

  }, [locale]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
          right: locale === "ar" ? "90.5%" : "2%"
        }}
      >
        
        <div
          className="arrowRight"
          style={{ right: "20px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={(currentSlide === 0 ? "disable" : "", "arrow")}
            style={{ transform: " rotateZ( 360deg)" }}
            onClick={() => previous()}
          />
        </div>
        <div
          className="leftRight"
          style={{ right: "75px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className="arrow"
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => next()}
          />
        </div>

      </div>
    );
  };
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <section className="Testimonials">
      <Container maxWidth="lg" style={{ position: "relative" }}>
      <Box pt={2}>
        <h4 className="block_Header">           
          {t('testimonials')}
        </h4>
        <p>
          {t('testimonialsDescr')}
        </p>
      </Box>
        <hr/>
        <div dir="ltr">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px testimonial-slider"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {reviews &&
              reviews.map((review, index) => {
                return (
                  <div key={index}>
                    <Card 
                    style={{
                      textAlign: locale == 'ar' ? 'right' : 'left',
                      
                        marginInline: "8px",
                    }}
                      className="testimonial_root"
                     
                    >
                      <CardActionArea
                        className="testimonial_root"
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <CardHeader
                        style={{
                          textAlign: locale == 'ar' ? 'right' : 'left',
                        }}
                          avatar={review.files.length>0?review.files.map((file) => {
                            return (
                              <Avatar aria-label="recipe" className="avatar">
                                  <img src={file.imgUrl} />
                                </Avatar>
                            );
                          }):
                          <Avatar aria-label="recipe" >
                          <img src="/logoo.svg" />
                        </Avatar>
                        }
                          title={review.name}
                          subheader={
                            <label className="subColor">
                              {review.nationality}
                            </label>
                          }
                        />

                        <CardContent
                          className="testimonial_content"
                          style={{ padding: "0px !important" }}
                        >
                          <Box
                          
                            component="p"
                            dangerouslySetInnerHTML={createMarkup(
                              review.description.length >= 196
                                ? review.description.slice(0, 196) + "."
                                : review.description
                            )}
                          ></Box>
                          <h5
                            className="testimonial_card"
                          >
                            {t('whatchVideo')}
                            
                          </h5>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};
export default Index;
