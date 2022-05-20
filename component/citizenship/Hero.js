import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  TextField,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import { Col, Row, Container } from "react-bootstrap";

// const useStyles = makeStyles((theme) => ({
//   marginTop: {
//     margin: "10px 0px",
//   },
//   formControl: {
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "#ec94b4",
//     borderRadius: "8px",
//   },

//   Header: {
//     color: theme.palette.primary.main,
//   },
// }));
function Hero() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const classes = useStyles();

  return (
    <>
      <section className="page-banner section-border mt-4">
        <Container fluid>
          <Row>
            <Col md={5}>
              {" "}
              <div
                className=" d-flex flex-column justify-content-center h-100"
                style={{ position: "relative" }}
              >
                <h1 className="banner-head text-capitalize font-weight-bold mx-auto mb-3">
                  Turkish citizenship and how to obtain it
                </h1>
                <p className="info mb-0">
                  Real Estate, Investment, and Turkish Citizenship by Shamdin
                  Real Estate
                </p>
                {/* <img
                  className="banner-decor d-none d-lg-block"
                  src="https://www.imtilak.net/assets/img/turkish-citizenship/arrow-decor.svg"
                  alt=""
                /> */}
              </div>
            </Col>
            <Col md={7}>
              <div className="image" style={{ position: "relative" }}>
                <img
                  src="https://www.imtilak.net/assets/img/turkish-citizenship/turkish-citizenship-header-image.png"
                  alt="Turkish citizenship banner"
                />
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div className="row">
          <Grid item xs={12}>
            <Grid item xs={12} md={5} style={{ display: "flex" }}>
            </Grid>
            <Grid item xs={12} md={7}>
              <div
                className="col-12 col-lg-6 col-xl-7 image"
                style={{ position: "relative" }}
              >
                <img
                  src="https://www.imtilak.net/assets/img/turkish-citizenship/turkish-citizenship-header-image.png"
                  alt="Turkish citizenship banner"
                />
              </div>
            </Grid>
          </Grid>
        </div> */}
      </section>
      <div className="form-contain">
        <div
          className="contact-form text-center p-4 mb-3"
          id="contact-form-modal"
        >
          <div className="h5 head font-weight-light">
            Let us contact you to help you
          </div>
          <form
            action="https://www.imtilak.net/en/message"
            method="post"
            className="form-group mt-3 mb-0 contact-message-form"
          >
            <input
              type="text"
              name="name"
              className="custom-input"
              placeholder="Name*"
              aria-label="Name*"
            />
              {/* <FormControl className="hero_formControl">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>egypt</MenuItem>
                  <MenuItem value={20}>egypt</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField id="standard-basic" label="Tele" />
              </FormControl> */}
                    <input
              type="number"
              name="phone"
              className="custom-input"
              placeholder="Telephone number*"
              aria-label="Telephone number*"
            />
            <input
              type="email"
              name="email"
              className="custom-input"
              placeholder="E-mail"
              aria-label="E-mail"
            />
   
            <button type="button" className="form-btn mt-4 btn-send-message">
              <span className="send font-weight-bold">Send</span>
              <span className="sending d-none">
                <i
                  className="fa fa-spinner fa-spin fa-fw"
                  aria-hidden="true"
                ></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
