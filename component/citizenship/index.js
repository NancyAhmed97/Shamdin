import React from "react";
import "./style.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import "./style.css";

import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

import { withStyles, makeStyles } from "@mui/material/styles";

import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

import Paper from "./paper";
import Hero from "./Hero";
import Plan from "./Plan";
import Slider from "./Slider";
import PdfSlider from "./PdfSlider";
import ApartmentSlider from "./ApartmentSlider";
import SliderArticles from "./SliderArticles";
import Service from "./Service";
import LastSection from "./LastSection";
import Svgs from "./Svgs";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    boxSizing: "border-box",
  },
  padding: {
    padding: "10px 20px",
    textAlign: "center",
  },
  btn2: {
    paddingBlock: "10px",
    backgroundColor: "#ec94b4",
    color: "white",
    textAlign: "center",
    position: "absolute",
    width: "100%",
    left: "0px",
    fontSize: "1.5rem",
    bottom: "0px",
    right: "0px",
    "&:hover": {
      backgroundColor: "#ec94b4",
      color: "white",
    },
  },
  margin: {
    margin: "10px 10px",
    height: "450px",
    //border: "1px solid gray",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  margin2: {
    margin: "10px 10px",
    height: "250px",
    backgroundColor: "#ec94b4",
    color: "white",
    //border: "1px solid gray",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  marginTop: {
    margin: "10px 0px",
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    maxWidth: "100%",
    width: "95%",
    height: "50%",
    marginTop: "25px",
  },
  hero: {
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    margin: "20px 0px",
    border: "1px solid #c5c5c5",
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px 25px",
    color: "white",
    fontSize: "16px",
    position: "absolute",
    marginTop: "25px",
    right: "10%",
    /* width: 100%; */
    left: "25%",
    bottom: "5%",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "white",
      border: "1px solid white",
      transition: "all 1s ease",
    },
  },
  Header: {
    color: theme.palette.primary.main,
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
  },
  /*=================================================*/
  boxImage: {
    backgroundImage:
      "url('https://www.imtilak.net/uploads/news/9b9f0a8e5a104ee56dc2fce080136220EKG295.png')",
    backgroundSize: "cover",
    height: "100%",
    backgroundPosition: "center",
    borderRadius: "10px",
    position: "relative",
  },
  boxImagesmall: {
    backgroundImage:
      "url('https://www.imtilak.net/image/400/200/news/213794285b9f04df91193102ee9379b8uej102.jpg')",
    backgroundSize: "cover",
    height: "230px",
    backgroundPosition: "right",
    borderRadius: "10px",
    position: "relative",
  },
  parag: {
    position: "absolute",
    bottom: "41px",
    lineHeight: "40px",
    left: "10%",
    color: "white",
    width: "80%",
  },
  paragsmall: {
    position: "absolute",
    bottom: "0px",
    color: "white",

    width: "100%",
    height: "fit-content",
    fontSize: "1rem",
    padding: ".5rem",
    background: "#000",
    opacity: ".5",
    textAlign: "center",
    margin: "0px",
  },
  span: {
    background: "#ec94b4",
    padding: "8px",
    color: "white",
    display: "inline-block",
  },
  testimonial: {
    height: "97.5%",
  },
}));

function Index() {
  const classes = useStyles();

  return (
    <div maxWidth="lg" style={{ position: "relative", paddingBottom: "25px" }}>
      <Grid item xs={12} md={12}>
        <Hero />
        <Plan />
        <section className="steps-section section-border pb-5 mb-5">
          <h4 className="h3 color-primary text-capitalize font-weight-bold text-lg-center mb-5 text-center">
            Stages of citizenship in Turkey
          </h4>
          <div className="contain">
            <div className="steps d-flex flex-column align-items-center">
              <div className="decor"></div>
              <div className="circle-decor top">
                <span></span>
              </div>
              <div className="circle-decor bottom">
                <span></span>
              </div>
              <div className="step">
                <div className="numbering">
                  <div className="mb-0">
                    <div className="background-decor"></div>
                    <span>1</span>
                  </div>
                </div>
                <div className="details">
                  <div className="mb-0">
                    <div className="background-decor"></div>
                    <span>Registration and approval of the application</span>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="numbering">
                  <div className="mb-0">
                    <div className="background-decor"></div>
                    <span>2</span>
                  </div>
                </div>
                <div className="details">
                  <div className="mb-0">
                    <div className="background-decor"></div>
                    <span>
                      Sending the file to the competent General Directorate to
                      study the file
                    </span>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="numbering">
                  <div className="mb-0">
                    <div className="background-decor"></div>
                    <span>3</span>
                  </div>
                </div>
                <div className="details">
                  <div className="mb-0">
                    <div className="background-decor"></div>
                    <span>Preliminary audit of the file</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Paper />
      </Grid>
      <Svgs />
      <PdfSlider />
      <ApartmentSlider />
      <Slider />
      <SliderArticles />
      <Service />
      <LastSection />
    </div>
  );
}

export default Index;
