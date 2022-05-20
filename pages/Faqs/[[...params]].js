import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,

} from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

export default function Faqs() {
    const isDesktop = useMediaQuery("(min-width:940px)");
    const [age, setAge] = React.useState("");
    const [searchResult, setSearchResult] = React.useState("");
    const [question, setQuestion] = React.useState([]);
    const [alert, setAlert] = React.useState(false);
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [problem, setProblem] = React.useState("");
    const [categouries, setCategouries] = React.useState("");
    const [searchWord, setSearchWord] = React.useState("");
    const locale  = useRouter();
    useEffect(() => {
        axios({
          method: "get",
          url: `${process.env.apiUrl}faqs?langCode=${locale.locale}`,
        }).then((res) => {
          setQuestion(res.data.rows);
        });
        axios({
          method: "get",
          url: `${process.env.apiUrl}faqs-categories?langCode=${locale.locale}`,
        }).then((res) => {
          setCategouries(res.data.rows);
        });
      }, []);
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
      const sendData = (e) => {
        e.preventDefault();
        if (!name || !phone || !problem || !email) {
          setAlert(true);
        } else {
          axios({
            method: "post",
            url: `${process.env.apiUrl}contacts?langCode=${locale.locale}`,
    
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: {
              name: name,
              phone: phone,
              email: email,
              description: problem,
            },
          }).then((res) => {
            setName("");
            setPhone("");
            setProblem("");
            setEmail("");
          });
        }
      };
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }  
  return (
    <div>      <Header />
      <Container>
        <Grid xs={12} md={12} style={{ display: "flex", color: "#ec94b4" }}>
          {isDesktop ? (
            <Grid item xs={12} md={3} style={{ display: "block" }}>
              <Card className="faq_margin" style={{ position: "relative" }}>
                <Box className="faq_padding">
                  <Typography variant="h5">
                    Let us contact you to help you{" "}
                  </Typography>
                  <form
                    className="help_root"
                    noValidate
                    autoComplete="off"
                    onSubmit={sendData}
                  >
                    <Input
                      required
                      placeholder="Name"
                      id="name"
                      onChange={saveData}
                      inputProps={{ "aria-label": "description" }}
                      style={{ width: "100%", marginTop: "15px" }}
                    />
                    <Input
                      required
                      placeholder="Phone Number"
                      id="phone"
                      onChange={saveData}
                      inputProps={{ "aria-label": "description" }}
                      style={{ width: "100%", marginTop: "15px" }}
                    />
                    {/* <PhoneInput
                  name="phoneNumber"

                  country={'tr'}
                  inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                  }}
                  value="90425652"
                  onChange={phone => ({ phone })}
                /> */}
                    <Input
                      placeholder="E-mail"
                      id="email"
                      onChange={saveData}
                      inputProps={{ "aria-label": "description" }}
                      style={{ width: "100%", marginTop: "15px" }}
                    />
                    <Input
                      placeholder="Your problem..."
                      id="problem"
                      onChange={saveData}
                      inputProps={{ "aria-label": "description" }}
                      style={{ width: "100%", marginTop: "15px" }}
                    />
                    <Button
                      variant="contained"
                      className="help_btn"
                      style={{ marginTop: "15px" }}
                      type="Submit"
                    >
                      Send
                    </Button>
                  </form>
                </Box>
              </Card>
              <Card className="faq_margin2" style={{ position: "relative" }}>
                <Box className="faq_padding">
                  <Typography
                    variant="h5"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                    color="primary"
                  >
                    All you need to know about obtaining citizenship through
                    buying a property
                  </Typography>
                  <img
                    className="faq_image"
                    src="https://www.imtilak.net/assets/img/turkish-passport.png"
                    alt="img"
                  />
                  <Link href="/Citizenship" passHref>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="faq_btn2"
                    >
                      For more details{" "}
                    </Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ) : (
            ""
          )}

          <Grid item xs={12} md={9}>
            <Box
              style={{
                padding: "20px",
                paddingTop: "30px",
              }}
              className="faq_city"
            >
              <Typography className="faq_Header" variant="h4">
                {" "}
                Frequently Asked Questions
              </Typography>

              <div
                style={{
                  marginInline: "0px",
                  marginBlock: "10px",
                  fontSize: ".9rem",
                  textAlign: ` left`,
                  color: "#5f6670",
                  lineHeight: "1.5",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                The most important questions we receive regarding obtaining
                citizenship through buying real estate in Turkey, and how to
                obtain Turkish citizenship, and the accurate answers based on
                Turkish laws from their sources, and our practical experience
                for the best practices in the Turkish real estate
              </div>
              <hr />
              <Typography
                className="faq_Header"
                style={{
                  textAlign: "center",
                  margin: "24px 0px",
                }}
                variant="h4"
              >
                {" "}
                How can we help you?
              </Typography>
              <div className="search_box">
                <input
                  style={{
                    width: "80%",
                    background: "#eee",
                    padding: "1rem",
                    margin: "auto",
                    display: "block",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                  }}
                  onChange={(e) => {
                    setSearchWord(e.target.value);
                    axios({
                      method: "get",
                      url: `${process.env.apiUrl}search?langCode=${locale.locale}&title=${e.target.value}&modelName=News`,

                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                    }).then((res) => {
                      setSearchResult(res.data.rows);
                    });
                  }}
                />
                {searchResult.length > 0 && searchWord && (
                  <ul id="autoComplete_list">
                    {searchResult.map((searchResultWord, index) => {
                      return (
                        <li
                          data-id="148"
                          className="autoComplete_result"
                          key={index}
                          onClick={()=>{
                            locale.push({pathname:`/faq/${searchResultWord.id}`})                          }}
                        >
                          {searchResultWord.elment_trans[0]&&searchResultWord.elment_trans[0].title}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <Typography
                style={{
                  textAlign: "center",
                  margin: "10px 0px",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                {" "}
                You can browse below to find the topic you are looking for
              </Typography>
            </Box>
            <Box
              style={{
                padding: "20px",
                paddingTop: "30px",
              }}
              className="faq_city"
            >

            </Box>
          </Grid>
      </Grid>
      </Container>
      <Footer />    </div>
  )
}
export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}
