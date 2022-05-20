import Header from "../component/Header";
import Footer from "../component/Footer";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
// import { withStyles, makeStyles } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "../component/citizenship/paper";
import Hero from "../component/citizenship/Hero";
import Plan from "../component/citizenship/Plan";
import Slider from "../component/citizenship/Slider";
import PdfSlider from "../component/citizenship/PdfSlider";
// import ApartmentSlider from "../component/citizenship/ApartmentSlider";
import SliderArticles from "../component/citizenship/SliderArticles";
import Service from "../component/citizenship/Service";
import LastSection from "../component/citizenship/LastSection";
import Svgs from "../component/citizenship/Svgs";
import { Container, Col, Row } from "react-bootstrap";
const Index = () => {
  return (
    <div>
      {" "}
      <Container>
       <Hero />
       </Container>

         <Plan />
    <Svgs />
           {/*   <PdfSlider />
         <ApartmentSlider />
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
        <Slider />
        <SliderArticles />
        <Service />
        <LastSection /> */}
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
