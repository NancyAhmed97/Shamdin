import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import "react-multi-carousel/lib/styles.css";
import Header from "../../component/Header/index"
import Card from "@mui/material/Card";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NeedHelp from "../../component/common/NeedHelp"
import CitizenshipBlock from "../../component/common/CitizenshipBlock"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     display: "flex",
//     boxSizing: "border-box",
//   },
//   padding: {
//     padding: "10px 20px",
//     textAlign: "center",
//   },
//   btn2: {
//     paddingBlock: "10px",
//     backgroundColor: "#9c344c",
//     color: "white",
//     textAlign: "center",
//     position: "absolute",
//     width: "100%",
//     left: "0px",
//     fontSize: "1.5rem",
//     bottom: "0px",
//     right: "0px",
//     "&:hover": {
//       backgroundColor: "#9c344c",
//       color: "white",
//     },
//   },
//   margin: {
//     margin: "10px 10px",
//     height: "450px",
//     //border: "1px solid gray",
//     boxShadow:
//       "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
//   },
//   margin2: {
//     margin: "10px 10px",
//     height: "400px",
//     //border: "1px solid gray",
//     boxShadow:
//       "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
//   },
//   marginTop: {
//     margin: "10px 0px",
//   },
//   formControl: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   image: {
//     maxWidth: "100%",
//     width: "95%",
//     height: "50%",
//     marginTop: "25px",
//   },
//   hero: {
//     padding: "20px",
//     background: "white",
//     borderRadius: "10px",
//     margin: "20px 0px",
//     border: "1px solid #c5c5c5",
//   },
//   btn: {
//     backgroundColor: theme.palette.primary.main,
//     padding: "10px 25px",
//     color: "white",
//     fontSize: "16px",
//     position: "absolute",
//     marginTop: "25px",
//     right: "10%",
//     /* width: 100%; */
//     left: "25%",
//     bottom: "5%",
//     "&:hover": {
//       color: theme.palette.primary.main,
//       backgroundColor: "white",
//       border: "1px solid white",
//       transition: "all 1s ease",
//     },
//   },
//   Header: {
//     color: theme.palette.primary.main,
//     textAlign: "center",
//     fontSize: "20px",
//     fontWeight: "bold",
//   },
//   /*=================================================*/
//   boxImage: {
//     backgroundImage:
//       "url('https://www.Imtilak.net/uploads/news/9b9f0a8e5a104ee56dc2fce080136220EKG295.png')",
//     backgroundSize: "cover",
//     height: "100%",
//     backgroundPosition: "center",
//     borderRadius: "10px",
//     position: "relative",
//   },
//   boxImagesmall: {
//     backgroundImage:
//       "url('https://www.Imtilak.net/image/400/200/news/213794285b9f04df91193102ee9379b8uej102.jpg')",
//     backgroundSize: "cover",
//     height: "230px",
//     backgroundPosition: "right",
//     borderRadius: "10px",
//     position: "relative",
//   },
//   parag: {
//     position: "absolute",
//     bottom: "41px",
//     lineHeight: "40px",
//     left: "10%",
//     color: "white",
//     width: "80%",
//   },
//   paragsmall: {
//     position: "absolute",
//     bottom: "0px",
//     color: "white",

//     width: "100%",
//     height: "fit-content",
//     fontSize: "1rem",
//     padding: ".5rem",
//     background: "#000",
//     opacity: ".5",
//     textAlign: "center",
//     margin: "0px",
//   },
//   span: {
//     background: "#9c344c",
//     padding: "8px",
//     color: "white",
//     display: "inline-block",
//   },
//   testimonial: {
//     height: "97.5%",
//   },
//   backBlock: {
//     borderRadius: "8px",
//     border: "1px solid #c5c5c5",
//     background: "#fff",
//     marginTop: "10px",
//   },
// }));
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#ddd",
//     },
//   },
// }))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Antalya", "78%", "178%"),
  createData(2, "Antalya", "78%", "178%"),
  createData(3, "Antalya", "78%", "178%"),
  createData(4, "Antalya", "78%", "178%"),
  createData(5, "Antalya", "78%", "178%"),
];
// const rows2 = [
//   createData(1, "78%", "178%"),
//   createData(2, "78%", "178%"),
//   createData(3, "78%", "178%"),
//   createData(4, "78%", "178%"),
//   createData(5, "78%", "178%"),
// ];
function Index(props) {

  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:1125px)");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const locale  = useRouter();
  const { params = [] } = locale.query;
  const [newDes, setNewDes] = useState([])
  const [newArr, setNewArr] = useState([])
  const [blogs, setBlogs] = useState([])
  const [blogsArr, setBlogsArr] = useState([])
  useEffect(() => {
if(params[0]=="news"){
  axios({
    method: "get",
    url: `${process.env.apiUrl}news?langCode=${locale.locale}
  
    `,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    res;
 const result=  res.data.rows.filter(({id})=>id==params[1])
setNewDes(result);
setNewArr(res.data.rows)
});
}else if(params[0]=="articals"){
  axios({
    method: "get",
    url: `${process.env.apiUrl}blogs?langCode=${locale.locale}`,

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    const blogResult=  res.data.rows.filter(({id})=>id==params[1])
    setBlogs(blogResult);
    setBlogsArr(res.data.rows);
  });

}
  }, [locale])
  function createMarkup(data) {
    return { __html: data };
  }
  return (
  <>
    <Container
      maxWidth="lg"
      style={{ position: "relative", paddingBottom: "25px" }}
    >
      <Grid xs={12} md={12} style={{ display: "flex" }}>
        {isDesktop ? (
          <>
          <Container>
            <Row>
              <Col md={3} className="mt-4">
                <NeedHelp />
                <CitizenshipBlock />
              </Col>
              <Col md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="has_real_state_backBlock"
              >
                <Typography className="has_real_state_Header" variant="h4">
            {newDes[0]?newDes[0]&&newDes[0].title:blogs[0]&&blogs[0].title}
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
            {/* <Typography
                className="terms_parag"
                variant="p"
                dangerouslySetInnerHTML={createMarkup(
                  newDes[0]&& newDes[0].description
                )}
              ></Typography> */}
                </Typography>
              </Box>

              <div className="has_real_state_hero">
                <Box>
                  {newDes[0]?
                  <img
                    style={{ width: "100%" }}
                    src={newDes[0]&&newDes[0].mainImage===null?"/logoo.svg":newDes[0]&&newDes[0].mainImage}
                    alt="Img"
                  />
                  :
                  <img
                  style={{ width: "100%" }}
                  src={blogs[0]&&blogs[0].mainImage===null?"/logoo.svg":blogs[0]&&blogs[0].mainImage}
                  alt="Img"
                />
                  }
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px 0px",
                    }}
                  >
                    {/* <div
                      className="eye-count d-flex ml-0 mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <VisibilityIcon style={{ marginInline: "5px" }} />
                      <span className="ml-2 number">714</span>
                    </div> */}
                    <div
                      className="date d-flex mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#5f6670", marginInline: "10px" }}>
                        {newDes[0]? newDes[0].created_at.slice(0,10):blogs[0]&&blogs[0].created_at.slice(0,10)}
                      </span>
                      Last update
                      <span
                        style={{ color: "#5f6670", marginInline: "10px" }}
                        className="ml-3 font-weight-light"
                      >
{newDes[0]? newDes[0].updated_at.slice(0,10):blogs[0]&&blogs[0].updated_at.slice(0,10)}
                      </span>
                    </div>

                    <Box>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div className="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                  </Box>
             
        
        
                  <Box
                    style={{
                      marginBlock: "35px",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      Edited by{" "}
                      <Typography
                        style={{
                          fontWeight: "bold",
                          marginInline: "10px",
                        }}
                      >
                        Shamdin Real Estate©
                        <br />
                      </Typography>
                    </Typography>
           
                    <Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBlock: "20px",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div className="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                    {/* <Typography
                      className="has_real_state_Header"
                      style={{
                        textAlign: `${
                          locale.locale == "ar" ? "right" : "left"
                        }`,
                        margin: "30px 0px",
                        fontSize: "23px",
                      }}
                      variant="h3"
                    >
                      Tags{" "}
                    </Typography>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>{" "}
                      <Typography
                        style={{
                          padding: "15px 10px",
                          backgroundColor: "#efefef",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginInline: "10px",
                        }}
                      >
                        lorem lorem
                      </Typography>
                    </Box> */}
                  </Box>
 <Typography
                className="terms_parag"
                variant="p"
                dangerouslySetInnerHTML={createMarkup(
                  newDes[0]? newDes[0].description:blogs[0]&&blogs[0].description
                )}
              ></Typography>             </Box>
              </div>
              <div className="has_real_state_backBlock px-3">
                 <Typography style={{ fontSize: "1.25rem",fontWeight:"700",color:"#ec94b4",marginBottom:"20px" }}>
                        More From Shamdin
                        </Typography>
                        <Container>
                          <Row>
            {newDes[0]?               
            <>
             <Col md={6} className="p-0">
                            <Link passHref href={`/has_realState/news/${newArr&&newArr[0]&&newArr[0].id}`}>
                    <Card
                      variant="outlined"
                      style={{ borderRadius: "10px", height: "98%" }}
                    >
                              <Box
                        className="blog_boxImage"
                        style={{
                          backgroundImage: `url(${
                            newArr[0]&&newArr[0].mainImage === null
                              ? "/logoo.svg"
                              : newArr[0]&&newArr[0].mainImage
                          })`,
                          height:"591px"
                        }}
                      >
                        <Typography
                          className="blog_parag"
                          variant="h2"
                          dangerouslySetInnerHTML={createMarkup(
                            newArr[0] && newArr[0].title
                          )}
                        ></Typography>
                        
                      </Box>
                      </Card>
                      </Link>
                            </Col>
                            <Col md={6}>
                            {newArr.slice(1,3).map((newDes,index)=>{
  return(
<Link passHref href={`/has_realState/news/${newDes.id}`} key={index}>
    <Card
      variant="outlined"
      style={{
        borderRadius: "10px",
        marginBottom: ".7rem",
      }}
    >
      <Box
        className="boxImagesmall"
        style={{
          backgroundImage: `url(${
            newDes.mainImage === null
              ? "/logoo.svg"
              : newDes.mainImage
          })`,
        }}
      >
        <Typography
          className="blogs_paragsmall"
          variant="h2"
        >
{newDes.category}
        </Typography>
      </Box>
      <Box style={{ backgroundColor: "#eee",height:"143.978px",padding:"12px" }}>
        <Typography
          style={{
            width: "100%",
            fontSize: ".9rem",
            fontWeight: "bold",
            padding: "5px",
          }}
          className="hover"
        >
          {newDes.title}
        </Typography>
        <Typography
          style={{
            margin: "10px 10px 20px 10px",
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
          dangerouslySetInnerHTML={createMarkup(
            newDes.description.length >= 100
              ? newDes.description.slice(0, 100) + "....."
              : newDes.description
          )}
        ></Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <EventAvailableIcon size="small" />
            {newDes.created_at.slice(0,10)}
          </Typography>
          {/* <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <VisibilityIcon size="small" />
{newDes.publish}
          </Typography> */}
        </Box>
      </Box>
    </Card>
  </Link>

  )
})}
                            </Col>
            </>
                            :
                            <>
                         {blogsArr.slice(0,3).map((blogDes,index)=>{
                           return(
<Link key={index}  href={`/has_realState/articals/${blogDes&&blogDes.id}`} >
<Col md={4} >
                            <Card
      variant="outlined"
      style={{
        borderRadius: "10px",
        marginBottom: ".7rem",
      }}
    >
      <Box
        className="boxImagesmall"
        style={{
          backgroundImage: `url(${
            blogDes.mainImage === null
              ? "/logoo.svg"
              : blogDes.mainImage
          })`,
        }}
      >
        {/* <span className="blog_span">New</span> */}
        <Typography
          className="blogs_paragsmall"
          variant="h2"
        >
{blogDes.category}
        </Typography>
      </Box>
      <Box style={{ backgroundColor: "#eee",height:"186.978px",padding:"12px" }}>
        <Typography
          style={{
            width: "100%",
            fontSize: ".9rem",
            fontWeight: "bold",
            padding: "5px",
          }}
          className="hover"
        >
          {blogDes.title}
        </Typography>
        <Typography
          style={{
            margin: "10px 10px 20px 10px",
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
          dangerouslySetInnerHTML={createMarkup(
            blogDes.description.length >= 100
              ? blogDes.description.slice(0, 90) + "....."
              : blogDes.description
          )}
        ></Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <EventAvailableIcon size="small" />
            {blogDes.created_at.slice(0,10)}
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <VisibilityIcon size="small" />
{blogDes.publish}
          </Typography>
        </Box>
      </Box>
    </Card>
                            </Col>
</Link>

                           )
                         })}    
                         
                            </>}
                          </Row>
                        </Container>
              </div>
              {/* <Grid
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  padding: "20px",
                }}
              >
                
                <Grid item xs={6} md={6}>
               
                  <Card
                    variant="outlined"
                    style={{ borderRadius: "10px", height: "97.5%" }}
                  >
                    <Box className="has_real_state_boxImage">
                      <span className="has_real_state_span">New</span>
                      <Typography className="has_real_state_parag" variant="h5">
                        <Typography style={{ fontSize: "16px" }}>
                        More From Shamdin
                        </Typography>
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <Grid item xs={12} md={12} style={{ margin: "0px 0px" }}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ margin: "0px 10px 20px 10px" }}
                    >
                      <Card variant="outlined" style={{ borderRadius: "10px" }}>
                        <Box className="has_real_state_boxImagesmall">
                          <span className="has_real_state_span">New</span>
                          <Typography
                            className="has_real_state_paragsmall"
                            variant="h2"
                          >
                            An increase of
                          </Typography>
                        </Box>
                        <Box style={{ backgroundColor: "#eee" }}>
                          <Typography
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className="has_real_state_hover"
                          >
                            Ankara real estate records an unprecedented increase
                            in foreign sales in 2021
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: "1rem",
                              fontWeight: "",
                              color: "#37404d",
                            }}
                          >
                            Apartment sales to foreigners in Ankara increased by
                            50.3% compared to real estate sales for the past
                            year 2021.
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <EventAvailableIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <VisibilityIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ margin: "0px 10px 20px 10px" }}
                    >
                      <Card variant="outlined" style={{ borderRadius: "10px" }}>
                        <Box className="has_real_state_boxImagesmall">
                          <span className="has_real_state_span">New</span>
                          <Typography
                            className="has_real_state_paragsmall"
                            variant="h2"
                          >
                            An increase of
                          </Typography>
                        </Box>
                        <Box style={{ backgroundColor: "#eee" }}>
                          <Typography
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className="has_real_state_hover"
                          >
                            Ankara real estate records an unprecedented increase
                            in foreign sales in 2021
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: "1rem",
                              fontWeight: "",
                              color: "#37404d",
                            }}
                          >
                            Apartment sales to foreigners in Ankara increased by
                            50.3% compared to real estate sales for the past
                            year 2021.
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <EventAvailableIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <VisibilityIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
              </Col>
            </Row>
          </Container>

     
          </>
        ) : (
          <>
          <Container>
            <Row>
          
              <Col md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="has_real_state_backBlock"
              >
                <Typography className="has_real_state_Header" variant="h4">
            {newDes[0]?newDes[0]&&newDes[0].title:blogs[0]&&blogs[0].title}
                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
            {/* <Typography
                className="terms_parag"
                variant="p"
                dangerouslySetInnerHTML={createMarkup(
                  newDes[0]&& newDes[0].description
                )}
              ></Typography> */}
                </Typography>
              </Box>

              <div className="has_real_state_hero">
              {newDes[0]?
                  <img
                    style={{ width: "100%" }}
                    src={newDes[0]&&newDes[0].mainImage===null?"/logoo.svg":newDes[0]&&newDes[0].mainImage}
                    alt="Img"
                  />
                  :
                  <img
                  style={{ width: "100%" }}
                  src={blogs[0]&&blogs[0].mainImage===null?"/logoo.svg":blogs[0]&&blogs[0].mainImage}
                  alt="Img"
                />
                
                  }
                             <span style={{ color: "#5f6670", marginInline: "10px" }}>
                        {newDes[0]? newDes[0].created_at.slice(0,10):blogs[0]&&blogs[0].created_at.slice(0,10)}
                      </span>
                      Last update
                      <span
                        style={{ color: "#5f6670", marginInline: "10px" }}
                        className="ml-3 font-weight-light"
                      >
{newDes[0]? newDes[0].updated_at.slice(0,10):blogs[0]&&blogs[0].updated_at.slice(0,10)}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop:"25px",
                          marginBottom:"25px"
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div className="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                      <Typography
                className="terms_parag"
                variant="p"
                dangerouslySetInnerHTML={createMarkup(
                  newDes[0]? newDes[0].description:blogs[0]&&blogs[0].description
                )}
              ></Typography> 
                {/* <Box>
                  {newDes[0]?
                  <img
                    style={{ width: "100%" }}
                    src={newDes[0]&&newDes[0].mainImage===null?"/logoo.svg":newDes[0]&&newDes[0].mainImage}
                    alt="Img"
                  />
                  :
                  <img
                  style={{ width: "100%" }}
                  src={blogs[0]&&blogs[0].mainImage===null?"/logoo.svg":blogs[0]&&blogs[0].mainImage}
                  alt="Img"
                />
                  }
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "15px 0px",
                    }}
                  >
        
                    <div
                      className="date d-flex mr-auto"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#5f6670", marginInline: "10px" }}>
                        {newDes[0]? newDes[0].created_at.slice(0,10):blogs[0]&&blogs[0].created_at.slice(0,10)}
                      </span>
                      Last update
                      <span
                        style={{ color: "#5f6670", marginInline: "10px" }}
                        className="ml-3 font-weight-light"
                      >
{newDes[0]? newDes[0].updated_at.slice(0,10):blogs[0]&&blogs[0].updated_at.slice(0,10)}
                      </span>
                    </div>

                    <Box>
                      <div
                        style={{
                          display: "flex",
                          flexDirection:"column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div className="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                  </Box>
             
        
        
                  <Box
                    style={{
                      marginBlock: "35px",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      Edited by{" "}
                      <Typography
                        style={{
                          fontWeight: "bold",
                          marginInline: "10px",
                        }}
                      >
                        Shamdin Real Estate©
                        <br />
                      </Typography>
                    </Typography>
           
                    <Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBlock: "20px",
                        }}
                      >
                        <ShareIcon style={{ marginInline: "10px" }} />
                        <div className="mb-0">Share</div>
                        <FacebookIcon
                          style={{ color: "#0056b8", marginInline: "10px" }}
                        />
                        <TwitterIcon
                          style={{ color: "#00cbff", marginInline: "10px" }}
                        />
                        <WhatsAppIcon
                          style={{ color: "green", marginInline: "10px" }}
                        />
                      </div>
                    </Box>
                  </Box>
 <Typography
                className="terms_parag"
                variant="p"
                dangerouslySetInnerHTML={createMarkup(
                  newDes[0]? newDes[0].description:blogs[0]&&blogs[0].description
                )}
              ></Typography> 
                          </Box> */}
              </div>
              <div className="has_real_state_backBlock px-3">
                 <Typography style={{ fontSize: "1.25rem",fontWeight:"700",color:"#ec94b4",marginBottom:"20px" }}>
                        More From Shamdin
                        </Typography>
                        <Container>
                          <Row>
            {newDes[0]?               
            <>
             <Col md={6} className="p-0">
                            <Link passHref href={`/has_realState/news/${newArr&&newArr[0]&&newArr[0].id}`}>
                    <Card
                      variant="outlined"
                      style={{ borderRadius: "10px", height: "98%" }}
                    >
                              <Box
                        className="blog_boxImage"
                        style={{
                          backgroundImage: `url(${
                            newArr[0]&&newArr[0].mainImage === null
                              ? "/logoo.svg"
                              : newArr[0]&&newArr[0].mainImage
                          })`,
                          height:"591px"
                        }}
                      >
                        <Typography
                          className="blog_parag"
                          variant="h2"
                          dangerouslySetInnerHTML={createMarkup(
                            newArr[0] && newArr[0].title
                          )}
                        ></Typography>
                        
                      </Box>
                      </Card>
                      </Link>
                            </Col>
                            <Col md={6}>
                            {newArr.slice(1,3).map((newDes,index)=>{
  return(
<Link passHref href={`/has_realState/news/${newDes.id}`} key={index}>
    <Card
      variant="outlined"
      style={{
        borderRadius: "10px",
        marginBottom: ".7rem",
      }}
    >
      <Box
        className="boxImagesmall"
        style={{
          backgroundImage: `url(${
            newDes.mainImage === null
              ? "/logoo.svg"
              : newDes.mainImage
          })`,
        }}
      >
        <Typography
          className="blogs_paragsmall"
          variant="h2"
        >
{newDes.category}
        </Typography>
      </Box>
      <Box style={{ backgroundColor: "#eee",height:"143.978px",padding:"12px" }}>
        <Typography
          style={{
            width: "100%",
            fontSize: ".9rem",
            fontWeight: "bold",
            padding: "5px",
          }}
          className="hover"
        >
          {newDes.title}
        </Typography>
        <Typography
          style={{
            margin: "10px 10px 20px 10px",
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
          dangerouslySetInnerHTML={createMarkup(
            newDes.description.length >= 100
              ? newDes.description.slice(0, 100) + "....."
              : newDes.description
          )}
        ></Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <EventAvailableIcon size="small" />
            {newDes.created_at.slice(0,10)}
          </Typography>
          {/* <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <VisibilityIcon size="small" />
{newDes.publish}
          </Typography> */}
        </Box>
      </Box>
    </Card>
  </Link>

  )
})}
                            </Col>
            </>
                            :
                            <>
                         {blogsArr.slice(0,3).map((blogDes,index)=>{
                           return(
<Link key={index}  href={`/has_realState/articals/${blogDes&&blogDes.id}`} >
<Col md={4} >
                            <Card
      variant="outlined"
      style={{
        borderRadius: "10px",
        marginBottom: ".7rem",
      }}
    >
      <Box
        className="boxImagesmall"
        style={{
          backgroundImage: `url(${
            blogDes.mainImage === null
              ? "/logoo.svg"
              : blogDes.mainImage
          })`,
        }}
      >
        {/* <span className="blog_span">New</span> */}
        <Typography
          className="blogs_paragsmall"
          variant="h2"
        >
{blogDes.category}
        </Typography>
      </Box>
      <Box style={{ backgroundColor: "#eee",height:"186.978px",padding:"12px" }}>
        <Typography
          style={{
            width: "100%",
            fontSize: ".9rem",
            fontWeight: "bold",
            padding: "5px",
          }}
          className="hover"
        >
          {blogDes.title}
        </Typography>
        <Typography
          style={{
            margin: "10px 10px 20px 10px",
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
          dangerouslySetInnerHTML={createMarkup(
            blogDes.description.length >= 100
              ? blogDes.description.slice(0, 90) + "....."
              : blogDes.description
          )}
        ></Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <EventAvailableIcon size="small" />
            {blogDes.created_at.slice(0,10)}
          </Typography>
          <Typography
            style={{
              display: "flex",
              fontSize: "14px",
            }}
          >
            <VisibilityIcon size="small" />
{blogDes.publish}
          </Typography>
        </Box>
      </Box>
    </Card>
                            </Col>
</Link>

                           )
                         })}    
                         
                            </>}
                          </Row>
                        </Container>
              </div>
              {/* <Grid
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  padding: "20px",
                }}
              >
                
                <Grid item xs={6} md={6}>
               
                  <Card
                    variant="outlined"
                    style={{ borderRadius: "10px", height: "97.5%" }}
                  >
                    <Box className="has_real_state_boxImage">
                      <span className="has_real_state_span">New</span>
                      <Typography className="has_real_state_parag" variant="h5">
                        <Typography style={{ fontSize: "16px" }}>
                        More From Shamdin
                        </Typography>
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <Grid item xs={12} md={12} style={{ margin: "0px 0px" }}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ margin: "0px 10px 20px 10px" }}
                    >
                      <Card variant="outlined" style={{ borderRadius: "10px" }}>
                        <Box className="has_real_state_boxImagesmall">
                          <span className="has_real_state_span">New</span>
                          <Typography
                            className="has_real_state_paragsmall"
                            variant="h2"
                          >
                            An increase of
                          </Typography>
                        </Box>
                        <Box style={{ backgroundColor: "#eee" }}>
                          <Typography
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className="has_real_state_hover"
                          >
                            Ankara real estate records an unprecedented increase
                            in foreign sales in 2021
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: "1rem",
                              fontWeight: "",
                              color: "#37404d",
                            }}
                          >
                            Apartment sales to foreigners in Ankara increased by
                            50.3% compared to real estate sales for the past
                            year 2021.
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <EventAvailableIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <VisibilityIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{ margin: "0px 10px 20px 10px" }}
                    >
                      <Card variant="outlined" style={{ borderRadius: "10px" }}>
                        <Box className="has_real_state_boxImagesmall">
                          <span className="has_real_state_span">New</span>
                          <Typography
                            className="has_real_state_paragsmall"
                            variant="h2"
                          >
                            An increase of
                          </Typography>
                        </Box>
                        <Box style={{ backgroundColor: "#eee" }}>
                          <Typography
                            style={{
                              fontSize: "1rem",
                              fontWeight: "bold",
                              padding: "5px",
                            }}
                            className="has_real_state_hover"
                          >
                            Ankara real estate records an unprecedented increase
                            in foreign sales in 2021
                          </Typography>
                          <Typography
                            style={{
                              margin: "10px 10px 20px 10px",
                              fontSize: "1rem",
                              fontWeight: "",
                              color: "#37404d",
                            }}
                          >
                            Apartment sales to foreigners in Ankara increased by
                            50.3% compared to real estate sales for the past
                            year 2021.
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "15px",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <EventAvailableIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              2022-02-22
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "14px",
                                color: "#5f6670",
                                alignItems: "center",
                              }}
                            >
                              <VisibilityIcon
                                size="small"
                                style={{
                                  display: "flex",
                                  fontSize: "14px",
                                  color: "#5f6670",
                                  marginInline: "5px",
                                }}
                              />
                              548
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
              </Col>
              <Col md={3} className="mt-4">
                <NeedHelp />
              </Col>
            </Row>
          </Container>

     
          </>
        )}
      </Grid>
    </Container>
  </>
  );
}

export default Index;
export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}
