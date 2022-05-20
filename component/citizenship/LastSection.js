import React, { useState } from "react";

import {
  Box,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import Collapse from "../Collapsed/Colapse";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Container, Col, Row } from "react-bootstrap";
import { withStyles, makeStyles } from "@mui/material/styles";
import { useRouter } from "next/router";
function LastSection() {
  const [age, setAge] = React.useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const { locale } = useRouter();
  const saveData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "problem") {
      setProblem(e.target.value);
    }
  };
  return (
    <>
      <Box
        style={{
          padding: "20px",
          paddingTop: "30px",
        }}
        className="testimonial"
      >
        <Typography className="last_section_Header" variant="h4">
          {" "}
          Turkish Citizenship Questions
        </Typography>

        <Typography
          className="last_section_Header"
          style={{
            textAlign: "center",
            margin: "10px 0px",
            fontSize: "16px",
            maxWidth: "calc(100% - 250px)",
          }}
          variant="h5"
        >
          <Collapse
            label="How to get Turkish citizenship?"
            text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
          />{" "}
          <Collapse
            label="How to get Turkish citizenship?"
            text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
          />{" "}
          <Collapse
            label="How to get Turkish citizenship?"
            text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
          />
          {showMore && (
            <>
              <Collapse
                label="How to get Turkish citizenship?"
                text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
              />
              <Collapse
                label="How to get Turkish citizenship?"
                text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
              />
              <Collapse
                label="How to get Turkish citizenship?"
                text="Turkish citizenship can be obtained through real estate investment with more than $250 thousand in Turkey, along with a pledge not to sell the property for 3 years."
              />
            </>
          )}
        </Typography>
        {showMore === false && (
          <Typography
            className="last_section_button"
            onClick={() => {
              setShowMore(true);
            }}
          >
            Read More
          </Typography>
        )}
      </Box>
      <Grid item xs={12} md={12} style={{ marginTop: "30px" }}>
        <Container className="m-0">
          <Row className="p-0">
            <Col md={6} className="p-0">
              <Card
                className="last_section_margin pt-3"
                style={{ position: "relativeRight", margin: "0" }}
              >
                <Box className="last_section_padding">
                  <Typography variant="h5">
                    Let us contact you to help you
                  </Typography>
                  <Typography variant="p">
                    Choose the best real estate
                  </Typography>
                  <TextField
                    label="Name"
                    id="name"
                    onChange={saveData}
                    className="last_section_marginTop"
                  />
                  <TextField
                    id="phone"
                    onChange={saveData}
                    label="phone"
                    className="last_section_marginTop"
                  />

                  {/* <FormControl className="last_section_formControl">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{ width: "50px" }}
                  className="last_section_marginTop"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>egypt</MenuItem>
                  <MenuItem value={20}>egypt</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  className="last_section_marginTop"
                />
              </FormControl> */}

                  <TextField
                    id="email"
                    onChange={saveData}
                    className="last_section_marginTop"
                    label="E-mail"
                  />

                  <TextField
                    id="problem"
                    onChange={saveData}
                    className="last_section_marginTop"
                    label="the desired"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className="last_section_btn"
                    onClick={() => {
                      const body = {
                        name: name,
                        phone: phone,
                        email: email,
                        description: problem,
                      };
                      postData(
                        `contacts?langCode=${locale}`,
                        body
                      ).then((res) => {
                        if (res) {
                          setShow(!show);
                          setName("");
                          setPhone("");
                          setProblem("");
                          setEmail("");
                          setAlert(false);
                        }
                      });
                    }}
                  >
                    send{" "}
                  </Button>
                </Box>
              </Card>
            </Col>
            <Col md={6} className="p-0">
              <img
                src="https://www.imtilak.net/assets/img/turkish-citizenship/contact-bannar.png"
                alt=""
                className="last_img_container"
              />
            </Col>
          </Row>
        </Container>
      </Grid>
    </>
  );
}

export default LastSection;
