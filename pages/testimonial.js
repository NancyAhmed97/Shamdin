import MainMobile from "../component/Header/Mobile/MainMobile";
import Footer from "../component/Footer";
import Header from "../component/Header";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import NeedHelp from "../component/common/NeedHelp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import getData from '../helpers/getData';
import { useRouter } from "next/router";
import axios from "axios";
import Video from "../component/Testimonial/Video"
const Index = () => {
  const isDesktop = useMediaQuery("(min-width:1150px)");
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const { locale } = useRouter();
  const [reviews, setReviews] = useState([]);
  function createMarkup(data) {
    return { __html: data };
  }

  useEffect(() => {
    let active = true;

    function getRows() {
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

  return (
    <div>
      {" "}
      {/* <Header /> */}
      <Container
        style={{
          position: "relative",
          paddingBottom: "25px",
          marginTop: "25px",
        }}
      >

        <Row>
          {isDesktop ? (
            <>
              <Col md={3}>
                <NeedHelp />

                <Card
                  className="testimonial_margin2"
                  style={{ position: "relative" }}
                >
                  <Box className="testimonial_padding">
                    <Typography
                      variant="h5"
                      style={{ fontSize: "1rem", fontWeight: "bold",color:"#ec94b4" }}
                    >
                      All you need to know about obtaining citizenship through
                      buying a property
                    </Typography>
                    <img
                      className="testimonial_image"
                      src="https://www.imtilak.net/assets/img/turkish-passport.png"
                      alt="img"
                    />
      <Link href="/Citizenship">
      <Button
                      variant="contained"
                      color="secondary"
                      className="testimonial_btn2"
                      style={{}}
                    >
For more details                    </Button>
      </Link>
                  </Box>
                </Card>
              </Col>
              <Col md={9}>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "30px",
                  }}
                  className="testimonial"
                >
                  <Typography className="testimonial_Header" variant="h4">
                    {" "}
                    Shamdin Testimonials
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                    }}
                  >
                    <Typography>
                      {" "}
                      Day after day, the testimonials of customers continue to
                      draw the true picture of the integrated services provided
                      by Shamdin Real Estate before and after the sale through
                      its experienced and trained staff. For us at Shamdin Real
                      Estate, we see them as a source of pride and honor, not
                      just testimonials… Have a look at what our customers are
                      saying about us
                    </Typography>
                  </Typography>
                </Box>
<Container>
{reviews.map((review,index)=>{
          return(
            <Row key={index} className="my-3 testimonial_container">
            <Col md={7} className=" p-0">
            <Card
                              variant="outlined"
                              style={{
                                borderRadius: "10px",
                                // margin: "10px",
                                backgroundColor: "white",
                              }}
                            >
                              {/* <Box className="testimonial_boxImage"></Box> */}

<Video review={review} />
                            </Card>
                            {/* <Box
                              style={{
                                padding: "20px",
                                paddingTop: "30px",
                                margin: "10px",
                              }}
                              className="testimonial"
                            >
                              <Typography className="testimonial_Header" variant="p">
                                {" "}
                                Mr. Arslan Berjawi
                              </Typography>
                              <Divider
                                style={{
                                  marginBlock: "10px",
                                }}
                              />
                              <Typography
                                style={{
                                  marginInline: "0px",
                                  marginBlock: "10px",
                                  width: "80%",
                                }}
                              >
                                <Typography
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    className="testimonial_avatar"
                                    src="https://www.imtilak.net/assets/img/Shamdin-logo-light.png"
                                    alt="img"
                                  />
                                  <Typography>Shamdin Real Estate </Typography>
        
                                  <Typography
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    <ThumbUpAltIcon
                                      style={{
                                        marginInline: "5px",
                                      }}
                                    />
                                    0
                                  </Typography>
                                  <Typography
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    <VisibilityIcon
                                      style={{
                                        marginInline: "5px",
                                      }}
                                    />
                                    0
                                  </Typography>
                                </Typography>
                              </Typography>
                            </Box> */}
                                </Col>
            <Col md={5}>
            <Box
                              style={{
                                padding: "20px",
                                paddingTop: "30px",
                                // margin: "10px",
                                minHeight: "100%",
                                height:"auto",
                                // overflowY: "scroll",
                              }}
                              className="testimonial scroll"
                            >
                              <Typography
                                style={{
                                  marginInline: "0px",
                                  marginBlock: "10px",
                                }}
                              >
                                <Typography
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    className="testimonial_avatar"
                                    src={review.files[0]?review.files[0].imgUrl:"/logoo.svg"}
                                    alt="img"
                                  />
                                  <Typography
                                    className="testimonial_Header"
                                    style={{ marginInline: "5px", fontSize: "12px" }}
                                  >
                                  {review.name}
                                   <br />
{review.nationality}                                  </Typography>
                                </Typography>
                                <hr />
                                {/* <Typography
                                  style={{ marginBlock: "15px", fontSize: "16px" }}
                                  variant="p"
                                >
                                  I came to Turkey as soon as the Coronavirus travel ban
                                  ended, and your welcome for us was the best welcome…
                                  you have assisted us a lot with the many departments
                                  of Shamdin.
                                </Typography> */}
                                    <Typography
                            style={{ marginTop: "0px", marginBottom: "100px" }}
                            variant="body2"
                            color=""
                            component="p"
                            dangerouslySetInnerHTML={createMarkup(
                              review.description
                            )}
                          ></Typography>
                              </Typography>
                            </Box>    </Col>
          </Row>
          )
        })}

</Container>

              </Col>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "30px",
                  }}
                  className="testimonial"
                >
                  <Typography className="testimonial_Header" variant="h4">
                    Shamdin Testimonials
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                    }}
                  >
                    {" "}
                    Day after day, the testimonials of customers continue to
                    draw the true picture of the integrated services provided by
                    Shamdin Real Estate before and after the sale through its
                    experienced and trained staff. For us at Shamdin Real
                    Estate, we see them as a source of pride and honor, not just
                    testimonials… Have a look at what our customers are saying
                    about us
                  </Typography>
                </Box>
                {reviews.map((review,index)=>{
                  return(
                    <div key={index} className="testimonial_container my-3">
                       <Card
                  variant="outlined"
                  style={{
                    borderRadius: "10px",
                    // margin: "10px 0",
                    backgroundColor: "white",
                    // margin: "20px 20px 0 20px",
                  }}
                >
                  {/* <Box className="testimonial_boxImage"></Box> */}
                  <Video review={review} isDesktop={true}/>
                </Card>
                <Grid
                  item
                  xs={12}
                  style={{ display: "block", margin: "20px 0" }}
                >
                  <Box
                    style={{
                      padding: "20px",
                      paddingTop: "30px",
                      // margin: "10px 0",
                      height: "auto",
                      // marginRight: "40px",
                    }}
                    className="testimonial scroll"
                  >
                    <div
                      style={{
                        marginInline: "0px",
                        marginBlock: "10px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="testimonial_avatar"
                        src={review.files[0]?review.files[0].imgUrl:"/logoo.svg"}
                        alt="img"
                      />
                      <Typography
                        className="testimonial_Header"
                        style={{ marginInline: "5px", fontSize: "12px" }}
                      >
                       {review.name} <br />
                       {review.nationality}                       </Typography>
                    </div>
                    <hr />
                    <Typography
                            style={{ marginTop: "0px" }}
                            variant="body2"
                            color=""
                            component="p"
                            dangerouslySetInnerHTML={createMarkup(
                              review.description
                            )}
                          ></Typography>
            
                  </Box>
                </Grid>
                    </div>
                  )
                })}
             
                {/* <Box
                  style={{
                    padding: "20px",
                    paddingTop: "30px",
                  }}
                  className="testimonial"
                >
                  <Typography className="testimonial_Header" variant="p">
                    {" "}
                    Mr. Arslan Berjawi
                  </Typography>
                  <Divider
                    style={{
                      marginBlock: "10px",
                    }}
                  />
                  <div
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="testimonial_avatar"
                      src="https://www.imtilak.net/assets/img/Shamdin-logo-light.png"
                      alt="img"
                    />
                    <Typography>Shamdin Real Estate </Typography>

                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <ThumbUpAltIcon
                        style={{
                          marginInline: "5px",
                        }}
                      />
                      0
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <VisibilityIcon
                        style={{
                          marginInline: "5px",
                        }}
                      />
                      0
                    </Typography>
                  </div>
                </Box> */}

            
                <NeedHelp />
              </Grid>
            </>
          )}
        </Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};
export default Index;
export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}
