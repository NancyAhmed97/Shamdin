import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles, alpha } from "@mui/material/styles";

import "react-multi-carousel/lib/styles.css";
import RoomIcon from "@mui/icons-material/Room";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Slider from "../VillaForSaleBodrum/PhotoSlider";
import Table from "./Table";
import Plans from "./Plans";

// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LikeReact from "../common/LikeReact";
import ShareBtns from "../common/ShareBtns";

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
    height: "400px",
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
  },
  backBlock: {
    borderRadius: "8px",
    border: "1px solid #c5c5c5",
    background: "#fff",
    marginTop: "10px",
  },
}));
function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1125px)");
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      style={{ position: "relative", paddingBottom: "25px" }}
    >
      <Grid xs={12} md={12} style={{ display: "flex" }}>
        {isDesktop ? (
          <>
            <Grid container xs={12} md={3} style={{ display: "block" }}>
              <Card className={classes.margin} style={{ position: "relative" }}>
                <Box className={classes.padding}>
                  <Typography variant="h5">
                    Search for your apartment
                  </Typography>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    className={classes.marginTop}
                  />

                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      className={classes.marginTop}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>egypt</MenuItem>
                      <MenuItem value={20}>egypt</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField
                      id="standard-basic"
                      label="Standard"
                      className={classes.marginTop}
                    />
                  </FormControl>

                  <TextField
                    className={classes.marginTop}
                    id="standard-basic"
                    label="E-mail"
                  />

                  <TextField id="standard-basic" label="the desired" />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                    style={{}}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
              <Card
                className={classes.margin2}
                style={{ position: "relative" }}
              >
                <Box className={classes.padding}>
                  <Typography
                    variant="h5"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                    color="primary"
                  >
                    All you need to know about obtaining citizenship through
                    buying a property
                  </Typography>
                  <img
                    className={classes.image}
                    src="https://www.imtilak.net/assets/img/turkish-passport.png"
                    alt="img"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn2}
                    style={{}}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xl={9} md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className={classes.backBlock}
              >
                <Typography className={classes.Header} variant="h4">
                  {" "}
                  Galaxy Tower Project IMT-160
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  <Typography>
                    Apartments for sale on Basin Express within Galaxy tower
                    project, luxury designs and installments for over 24 months
                    by Shamdin. Call us for more details.
                  </Typography>
                  <div className="heart-num d-flex align-items-center">
                  <LikeReact react={'Like'} margin={'15px 0px'} />
        <ShareBtns react={"Share"} margin={"15px 0px"} />

                  </div>
                </Typography>
              </Box>

              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="testimonial"
              >
                <Slider />
              </Box>

              <Box
                style={{
                  padding: "20px",
                  paddingTop: "0px",
                }}
                className="testimonial"
              >
                <Typography
                  className={classes.Header}
                  style={{ marginBlock: "10px", paddingInline: "10px" }}
                  variant="h4"
                >
                  {" "}
                  Starting At
                </Typography>

                <Typography style={{ paddingInline: "10px" }} variant="h4">
                  {" "}
                  293,000 $
                </Typography>
                <Box>
                  <div
                    style={{
                      display: "flex",
                      padding: "10px",
                      flexWrap: "wrap",
                      columnGap: "15px",
                    }}
                  >
                    <div xs={3} md={3} style={{ textAlign: "center" }}>
                      <img
                        src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                        alt="img"
                      />
                      <Typography
                        className={classes.Header}
                        style={{ marginBlock: "10px" }}
                        variant="h6"
                      >
                        Smart Homes
                      </Typography>
                    </div>
                    <div xs={3} md={3} style={{ textAlign: "center" }}>
                      <img
                        src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                        alt="img"
                      />
                      <Typography
                        className={classes.Header}
                        style={{ marginBlock: "10px" }}
                        variant="h6"
                      >
                        Smart Homes
                      </Typography>
                    </div>{" "}
                    <div xs={3} md={3} style={{ textAlign: "center" }}>
                      <img
                        src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                        alt="img"
                      />
                      <Typography
                        className={classes.Header}
                        style={{ marginBlock: "10px" }}
                        variant="h6"
                      >
                        Smart Homes
                      </Typography>
                    </div>{" "}
                    <div xs={3} md={3} style={{ textAlign: "center" }}>
                      <img
                        src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                        alt="img"
                      />
                      <Typography
                        className={classes.Header}
                        style={{ marginBlock: "10px" }}
                        variant="h6"
                      >
                        Smart Homes
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Box>

              <Box
                style={{
                  padding: "20px",
                  paddingTop: "0px",
                }}
                className="testimonial"
              >
                <Typography
                  className={classes.Header}
                  style={{ marginBlock: "10px", paddingInline: "10px" }}
                  variant="h4"
                >
                  {" "}
                  PROJECT OVERVIEW{" "}
                </Typography>

                <Box>
                  <Grid
                    xs={12}
                    md={12}
                    item
                    style={{
                      display: "flex",
                      padding: "10px",
                      justifyContent: "space-around",
                    }}
                  >
                    <Grid
                      xs={2.4}
                      md={2.4}
                      item
                      style={{ textAlign: "center", width: "18%" }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#eee",
                          color: "black",
                          height: "100px",
                          borderRadius: "5px",
                        }}
                      >
                        <RoomIcon
                          color="primary"
                          style={{ marginBlock: "6px" }}
                        />
                        <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          City
                        </span>
                        <br />
                        Istanbul
                      </Box>
                    </Grid>
                    <Grid
                      xs={2.4}
                      md={2.4}
                      item
                      style={{ textAlign: "center", width: "18%" }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#eee",
                          color: "black",
                          height: "100px",
                          borderRadius: "5px",
                        }}
                      >
                        <RoomIcon
                          color="primary"
                          style={{ marginBlock: "6px" }}
                        />
                        <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          City
                        </span>
                        <br />
                        Istanbul
                      </Box>
                    </Grid>
                    <Grid
                      xs={2.4}
                      md={2.4}
                      item
                      style={{ textAlign: "center", width: "18%" }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#eee",
                          color: "black",
                          height: "100px",
                          borderRadius: "5px",
                        }}
                      >
                        <RoomIcon
                          color="primary"
                          style={{ marginBlock: "6px" }}
                        />
                        <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          City
                        </span>
                        <br />
                        Istanbul
                      </Box>
                    </Grid>
                    <Grid
                      xs={2.4}
                      md={2.4}
                      item
                      style={{ textAlign: "center", width: "18%" }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#eee",
                          color: "black",
                          height: "100px",
                          borderRadius: "5px",
                        }}
                      >
                        <RoomIcon
                          color="primary"
                          style={{ marginBlock: "6px" }}
                        />
                        <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          City
                        </span>
                        <br />
                        Istanbul
                      </Box>
                    </Grid>
                    <Grid
                      xs={2.4}
                      md={2.4}
                      item
                      style={{ textAlign: "center", width: "18%" }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#eee",
                          color: "black",
                          height: "100px",
                          borderRadius: "5px",
                        }}
                      >
                        <RoomIcon
                          color="primary"
                          style={{ marginBlock: "6px" }}
                        />
                        <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          City
                        </span>
                        <br />
                        Istanbul
                      </Box>
                    </Grid>
                  </Grid>
                  <Typography
                    className={classes.Header}
                    style={{ marginBlock: "10px" }}
                    variant="h4"
                  >
                    Why This Property?
                  </Typography>
                  <Box>
                    <ul style={{ fontSize: "16px" }}>
                      <li style={{ marginBlock: "10px" }}>
                        Distinctive location on the Basin Express road which
                        connects the strategic highways TEM with E5 which form
                        the two main arteries of Istanbul.
                      </li>
                      <li style={{ marginBlock: "10px" }}>
                        Distinctive location on the Basin Express road which
                        connects the strategic highways TEM with E5 which form
                        the two main arteries of Istanbul.
                      </li>{" "}
                      <li style={{ marginBlock: "10px" }}>
                        Distinctive location on the Basin Express road which
                        connects the strategic highways TEM with E5 which form
                        the two main arteries of Istanbul.
                      </li>{" "}
                      <li style={{ marginBlock: "10px" }}>
                        Distinctive location on the Basin Express road which
                        connects the strategic highways TEM with E5 which form
                        the two main arteries of Istanbul.
                      </li>
                    </ul>
                  </Box>
                  <Typography
                    className={classes.Header}
                    style={{ marginBlock: "10px" }}
                    variant="h4"
                  >
                    Project Video{" "}
                  </Typography>
                  <Box>
                    <img
                      style={{ width: "100%" }}
                      src="https://www.imtilak.net/image/826/430/projects/9e746d238ef4d7fcf435a68ae9a9f11cqjQ645.jpg"
                      alt="img"
                    />
                  </Box>
                  <Typography
                    className={classes.Header}
                    style={{ marginBlock: "10px" }}
                    variant="h5"
                  >
                    Payment Method & Prices
                  </Typography>
                  <Typography style={{ marginBlock: "10px" }}>
                    Payment Method: %35 Down Payment And The Rest By
                    Installments Over 24 Months.
                  </Typography>
                  <Table />
                </Box>
                <Box>
                  <Typography
                    className={classes.Header}
                    style={{ marginBlock: "30px" }}
                    variant="h4"
                  >
                    Apartment Plans
                  </Typography>
                  <Grid
                    xs={12}
                    md={12}
                    item
                    style={{ display: "flex", marginBlock: "10px" }}
                  >
                    <Plans />
                    <Plans />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{ display: "flex", marginBlock: "10px" }}
                  >
                    <Plans />
                    <Plans />
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Grid item xl={12}>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "30px",
                  }}
                  className={classes.backBlock}
                >
                  <Typography className={classes.Header} variant="h4">
                    {" "}
                    Galaxy Tower Project IMT-160
                  </Typography>
                  <Typography
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                    }}
                  >
                    <Typography>
                      Apartments for sale on Basin Express within Galaxy tower
                      project, luxury designs and installments for over 24
                      months by Shamdin. Call us for more details.
                    </Typography>
                    <LikeReact react={'Like'} margin={'15px 0px'} />
        <ShareBtns react={"Share"} margin={"15px 0px"} />
                  </Typography>
                </Box>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "30px",
                  }}
                  className="testimonial"
                >
                  <Slider />
                </Box>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "0px",
                  }}
                  className="testimonial"
                >
                  <Typography
                    className={classes.Header}
                    style={{ marginBlock: "10px", paddingInline: "10px" }}
                    variant="h4"
                  >
                    {" "}
                    Starting At
                  </Typography>
                  <Typography style={{ paddingInline: "10px" }} variant="h4">
                    {" "}
                    293,000 $
                  </Typography>

                  <Box>
                    <div
                      style={{
                        display: "flex",
                        padding: "10px",
                        flexWrap: "wrap",
                        columnGap: "15px",
                      }}
                    >
                      <div xs={3} md={3} style={{ textAlign: "center" }}>
                        <img
                          src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                          alt="img"
                        />
                        <Typography
                          className={classes.Header}
                          style={{ marginBlock: "10px" }}
                          variant="h6"
                        >
                          Smart Homes
                        </Typography>
                      </div>
                      <div xs={3} md={3} style={{ textAlign: "center" }}>
                        <img
                          src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                          alt="img"
                        />
                        <Typography
                          className={classes.Header}
                          style={{ marginBlock: "10px" }}
                          variant="h6"
                        >
                          Smart Homes
                        </Typography>
                      </div>{" "}
                      <div xs={3} md={3} style={{ textAlign: "center" }}>
                        <img
                          src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                          alt="img"
                        />
                        <Typography
                          className={classes.Header}
                          style={{ marginBlock: "10px" }}
                          variant="h6"
                        >
                          Smart Homes
                        </Typography>
                      </div>{" "}
                      <div xs={3} md={3} style={{ textAlign: "center" }}>
                        <img
                          src="https://www.imtilak.net/assets/img/smarthomes.png?v=1580110031"
                          alt="img"
                        />
                        <Typography
                          className={classes.Header}
                          style={{ marginBlock: "10px" }}
                          variant="h6"
                        >
                          Smart Homes
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </Box>

                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "0px",
                  }}
                  className="testimonial"
                >
                  <Typography
                    className={classes.Header}
                    style={{ marginBlock: "10px", paddingInline: "10px" }}
                    variant="h4"
                  >
                    {" "}
                    PROJECT OVERVIEW{" "}
                  </Typography>

                  <Box>
                    <div
                      style={{
                        display: "flex",
                        padding: "10px",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: "10px 10px",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "100px",
                          textAlign: "center",
                          width: "18%",
                        }}
                      >
                        <Box
                          style={{
                            backgroundColor: "#eee",
                            color: "black",
                            height: "100px",
                            borderRadius: "5px",
                          }}
                        >
                          <RoomIcon
                            color="primary"
                            style={{ marginBlock: "6px" }}
                          />
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginBottom: "10px",
                              display: "inline-block",
                            }}
                          >
                            City
                          </span>
                          <br />
                          Istanbul
                        </Box>
                      </div>
                      <div
                        style={{
                          minWidth: "100px",
                          textAlign: "center",
                          width: "18%",
                        }}
                      >
                        <Box
                          style={{
                            backgroundColor: "#eee",
                            color: "black",
                            height: "100px",
                            borderRadius: "5px",
                          }}
                        >
                          <RoomIcon
                            color="primary"
                            style={{ marginBlock: "6px" }}
                          />
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginBottom: "10px",
                              display: "inline-block",
                            }}
                          >
                            City
                          </span>
                          <br />
                          Istanbul
                        </Box>
                      </div>
                      <div
                        style={{
                          minWidth: "100px",
                          textAlign: "center",
                          width: "18%",
                        }}
                      >
                        <Box
                          style={{
                            backgroundColor: "#eee",
                            color: "black",
                            height: "100px",
                            borderRadius: "5px",
                          }}
                        >
                          <RoomIcon
                            color="primary"
                            style={{ marginBlock: "6px" }}
                          />
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginBottom: "10px",
                              display: "inline-block",
                            }}
                          >
                            City
                          </span>
                          <br />
                          Istanbul
                        </Box>
                      </div>
                      <div
                        style={{
                          minWidth: "100px",
                          textAlign: "center",
                          width: "18%",
                        }}
                      >
                        <Box
                          style={{
                            backgroundColor: "#eee",
                            color: "black",
                            height: "100px",
                            borderRadius: "5px",
                          }}
                        >
                          <RoomIcon
                            color="primary"
                            style={{ marginBlock: "6px" }}
                          />
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginBottom: "10px",
                              display: "inline-block",
                            }}
                          >
                            City
                          </span>
                          <br />
                          Istanbul
                        </Box>
                      </div>
                      <div
                        style={{
                          minWidth: "100px",
                          textAlign: "center",
                          width: "18%",
                        }}
                      >
                        <Box
                          style={{
                            backgroundColor: "#eee",
                            color: "black",
                            height: "100px",
                            borderRadius: "5px",
                          }}
                        >
                          <RoomIcon
                            color="primary"
                            style={{ marginBlock: "6px" }}
                          />
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontSize: "18px",
                              marginBottom: "10px",
                              display: "inline-block",
                            }}
                          >
                            City
                          </span>
                          <br />
                          Istanbul
                        </Box>
                      </div>
                    </div>
                    <Typography
                      className={classes.Header}
                      style={{ marginBlock: "10px" }}
                      variant="h4"
                    >
                      Why This Property?
                    </Typography>
                    <Box>
                      <ul style={{ fontSize: "16px" }}>
                        <li style={{ marginBlock: "10px" }}>
                          Distinctive location on the Basin Express road which
                          connects the strategic highways TEM with E5 which form
                          the two main arteries of Istanbul.
                        </li>
                        <li style={{ marginBlock: "10px" }}>
                          Distinctive location on the Basin Express road which
                          connects the strategic highways TEM with E5 which form
                          the two main arteries of Istanbul.
                        </li>{" "}
                        <li style={{ marginBlock: "10px" }}>
                          Distinctive location on the Basin Express road which
                          connects the strategic highways TEM with E5 which form
                          the two main arteries of Istanbul.
                        </li>{" "}
                        <li style={{ marginBlock: "10px" }}>
                          Distinctive location on the Basin Express road which
                          connects the strategic highways TEM with E5 which form
                          the two main arteries of Istanbul.
                        </li>
                      </ul>
                    </Box>
                    <Typography
                      className={classes.Header}
                      style={{ marginBlock: "10px" }}
                      variant="h4"
                    >
                      Project Video{" "}
                    </Typography>
                    <Box>
                      <img
                        style={{ width: "100%" }}
                        src="https://www.imtilak.net/image/826/430/projects/9e746d238ef4d7fcf435a68ae9a9f11cqjQ645.jpg"
                        alt="img"
                      />
                    </Box>
                    <Typography
                      className={classes.Header}
                      style={{ marginBlock: "10px" }}
                      variant="h5"
                    >
                      Payment Method & Prices
                    </Typography>
                    <Typography style={{ marginBlock: "10px" }}>
                      Payment Method: %35 Down Payment And The Rest By
                      Installments Over 24 Months.
                    </Typography>
                    <Table />
                  </Box>
                  <Box>
                    <Typography
                      className={classes.Header}
                      style={{ marginBlock: "30px" }}
                      variant="h4"
                    >
                      Apartment Plans
                    </Typography>
                    <Grid
                      xs={12}
                      md={12}
                      item
                      style={{ display: "flex", marginBlock: "10px" }}
                    >
                      <Plans />
                      <Plans />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ display: "flex", marginBlock: "10px" }}
                    >
                      <Plans />
                      <Plans />
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
