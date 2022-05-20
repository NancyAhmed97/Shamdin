import React, { useEffect, useState } from "react";
import {
  Box,
  
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import NeedHelp from "../component/common/NeedHelp";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubMobile from "../component/Header/Mobile/SubMobile";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
export default function Terms() {
    const isDesktop = useMediaQuery("(min-width:1125px)");
    const [age, setAge] = React.useState("");
    const locale  = useRouter();
    const [pages, setPages] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.apiUrl}pages?langCode=${locale.locale}`,
      
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }).then((res) => {
         const result=res.data.rows.filter(({title})=>title===locale.pathname.slice(1))
         setPages(result);
          });
    }, [])
    function createMarkup(data) {
        return { __html: data };
      }
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
    {/* <Header /> */}
          <Container
            style={{ position: "relative", paddingBottom: "25px",marginTop:"25px" }}
          >
              {isDesktop ? (
                <>
                <Row>
                  <Col md={3}>
                  <NeedHelp/>
                  <Card
                      className="about_margin2"
                      style={{ position: "relative" }}
                    >
                      <Box className="about_padding">
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "white",
                          }}
                          color="primary"
                        >
                          Buy Now, Pay Later
                          <br />
                          <br />
                          Flexible installment Apartments for sale in Turkey
                        </Typography>
                        <img
                          className="about_image"
                          src="https://www.imtilak.net/uploads/banners/d252c0552d0b4f400daaf9a35b9e2717vYI228.png"
                          alt="img"
                        />
                      </Box>
                    </Card>
                  </Col>
                  <Col md={9}>
                  <Box
                      style={{
                        padding: "20px",
                        paddingTop: "30px",
                      }}
                      className="about_backBlock"
                    >
                      <Typography className="about_Header" variant="h4">
                        {" "}
                        Terms of Use
                      </Typography>
                      <Typography
                        style={{
                          marginInline: "0px",
                          marginBlock: "10px",
                          fontSize: "20px",
                          textAlign: "left",
                        }}
                      >
                        Learn more about Shamdin real estate terms of use, and how
                        we use and save your personal data that you provide.{" "}
                      </Typography>
                    </Box>
                    <div className="about_hero"  >

    {pages.map((page,index)=>{
        return(
            <Box key={index}>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://www.imtilak.net/image/440/255/pages/c0652e9ea8b21ebc0c779839c9bc261413.jpg"
                alt="img"
              />
              <br />

              <br />
              <Typography
                className="terms_parag"
                variant="h2"
                dangerouslySetInnerHTML={createMarkup(
                    page&& page.description
                )}
              ></Typography>
            </Box>
)
    })}
              </div>

                  </Col>
                </Row>
                </>
              ) : (
                <>
                  <Grid item xl={12}>
                    <Box
                      style={{
                        padding: "20px",
                        paddingTop: "30px",
                      }}
                      className="about_backBlock"
                    >
                      <Typography className="about_Header" variant="h4">
                        {" "}
                        Terms of Use
                      </Typography>
                    
                    </Box>
                    <div className="about_hero">
                    {pages.map((page,index)=>{
        return(
            <Box key={index}>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://www.imtilak.net/image/440/255/pages/c0652e9ea8b21ebc0c779839c9bc261413.jpg"
                alt="img"
              />
              <br />

              <br />
              <Typography
                className="terms_parag"
                variant="h2"
                dangerouslySetInnerHTML={createMarkup(
                    page&& page.description
                )}
              ></Typography>
            </Box>
)
    })}
                    </div>
                    <NeedHelp />
                  </Grid>
                </>
              )}
          </Container>
          {/* <Footer /> */}
        </div>
    
  )
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}
