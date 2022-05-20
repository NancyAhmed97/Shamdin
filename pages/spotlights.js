import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import TimeLine from "../component/Timeline";
import NeedHelp from "../component/common/NeedHelp";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Col, Container, Row } from "react-bootstrap";
const Index = () => {
  const isDesktop = useMediaQuery("(min-width:1150px)");
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {/* <Header /> */}
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px",marginTop:"25px" }}
      >
        <Row>
          {isDesktop ? (
            <>
              <Col md={3}>
                <NeedHelp />
                <Card
                  className="spotlight_margin2"
                  style={{ position: "relative" }}
                >
                  <Box className="spotlight_padding">
                    <Typography
                      variant="h5"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                      color="primary"
                    >
                      All you need to know about obtaining citizenship through
                      buying a property
                    </Typography>
                    <img
                      className="spotlight_image"
                      src="https://www.imtilak.net/assets/img/turkish-passport.png"
                      alt="img"
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      className="spotlight_btn2"
                      style={{}}
                    >
                      Read More
                    </Button>
                  </Box>
                </Card>
              </Col>
              <Col md={9}>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "30px",
                  }}
                  className="spotlights"
                >
                  <Typography className="spotlight_header" variant="h4">
                    {" "}
                    Contact Us{" "}
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                    }}
                  >
                    {" "}
                    Here at Shamdin spotlight, you will find all the activities
                    and events of Shamdin Real Estate company which includes
                    press interviews, meetings, partnerships with a number of
                    municipalities and government agencies, annual celebrations
                    and events, train{" "}
                  </Typography>
                </Box>
                <div className="timeline-container">
                  <ul className="timeline">
                    <TimeLine />
                    <TimeLine />
                  </ul>
                </div>
              </Col>
            </>
          ) : (
            <Grid item xl={12}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="spotlights"
              >
                <Typography className="spotlight_header" variant="h4">
                  {" "}
                  Contact Us{" "}
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  {" "}
                  Here at Shamdin spotlight, you will find all the activities
                  and events of Shamdin Real Estate company which includes press
                  interviews, meetings, partnerships with a number of
                  municipalities and government agencies, annual celebrations
                  and events, train{" "}
                </Typography>
              </Box>
              <div className="timeline-container">
                <ul className="timeline">
                  <TimeLine />
                  <TimeLine />
                </ul>
              </div>
              <NeedHelp />
            </Grid>
          )}
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
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
