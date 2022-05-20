import React, { useEffect, useState } from "react";
import {
  Box,
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
import Slider from "../../component/VillaForSaleBodrum/PhotoSlider";
import Table from "../../component/galaxy-tower/Table";
import Plans from "../../component/galaxy-tower/Plans";
import useMediaQuery from "@mui/material/useMediaQuery";
 import PropCard from '../../component/SubTurkey/Content/PropCard';

import MainMobile from "../../component/Header/Mobile/MainMobile";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { Col, Container, Row,Modal } from "react-bootstrap";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
import NeedHelp from "../../component/common/NeedHelp";
import CitizenshipBlock from "../../component/common/CitizenshipBlock";

import axios from "axios";
import LikeReact from "../../component/common/LikeReact";
import ShareBtns from "../../component/common/ShareBtns";
import { useTranslations } from "next-intl";
import getData from "../../helpers/getData";
const Index = () => {
  const isDesktop = useMediaQuery("(min-width:1125px)");
  const [age, setAge] = React.useState("");
  const [result, setResult] = React.useState('');
  const  locale  = useRouter();
  // const { searchArray } = useSelector((state) => state.searchArray);
  const [currentBlog, setCurrentBlog] = useState();
  const router = useRouter();
  const { params = [] } = router.query;
  const [cityName, setCityName] = useState("")
  const [municipalityName, setMunicipalityName] = useState("")
  const [typeName, settypeName] = useState("")
  const [realEstates, setRealEstates] = useState([])

  const t=useTranslations('general')
  useEffect(() => {
    let active = true;

    axios
    .get(`${process.env.apiUrl}realestates/${params[0]}?langCode=${locale.locale}`, {
    })
    .then((res) => {
      setResult(res.data);

    });
    function getCiityName() {
      //setLoading(true);

      var filtersArr = {
        langCode: locale.locale,
 
      };
      
      getData(process.env.apiUrl + `cities/${result&&result.cityId}`, filtersArr)
        .then(res => {

          if (!active) {
            return;
          }
       setCityName(res.data.elment_trans[0].name);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };
	getCiityName();
    function getMunicipalityName() {
      //setLoading(true);

      var filtersArr = {
        langCode: locale.locale,
 
      };
      
      getData(process.env.apiUrl + `municipalities/${result&&result.municipalityId}`, filtersArr)
        .then(res => {

          if (!active) {
            return;
          }
          setMunicipalityName(res.data.elment_trans[0].name);

        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };
    getMunicipalityName();
    function gettypeName() {
      //setLoading(true);

      var filtersArr = {
        langCode: locale.locale,
 
      };
      
      getData(process.env.apiUrl + `realestates-types/${result&&result.typeId}`, filtersArr)
        .then(res => {

          if (!active) {
            return;
          }
          settypeName(res.data.elment_trans[0].title);
      //  setCityName(res.data.elment_trans[0].name);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };
    gettypeName();
    function getRealestate() {
      var filtersArr = {
        langCode: locale.locale,
        sortBy:"id",
        sortType:"desc",
        offset:0,
        limit:2,

 
      };
      
      getData(process.env.apiUrl + `realestates`, filtersArr)
        .then(res => {

          if (!active) {
            return;
          }
          setRealEstates(res.data.rows);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };
    getRealestate();
  return () => {
    active = false;
  };
  }, [locale]);
  console.log(result);
  function createMarkup(data) {
    return { __html: data };
  }
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      //  top: `${top}%`,
      // left: `${left}%`,
      // transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openedVedio, setOpenedVedio] = React.useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const body = (
  //   <div style={modalStyle} className="papper">
  //     <iframe
  //       width="100%"
  //       height="100%"
  //       src={result&&result.files[0] && result[0].files[0].video}
  //     ></iframe>
  //   </div>
  // );
  console.log( result &&result.elment_trans[0]&&result.elment_trans[0]);
  return (
    <div>
      {" "}
      <Container>
        {isDesktop ? (
          <Row className="mt-4">
            <Col md={3}>
              <NeedHelp />
              <CitizenshipBlock />

            </Col>
            <Col md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="galaxy_backBlock"
              >
                <p
                  className="galaxy_Header"
                
                >{result&&result.elment_trans[0]&&result.elment_trans[0].title}</p>
                <p
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      result &&result.elment_trans[0]&&result.elment_trans[0].description
                    )}
                  ></p>
          <LikeReact react={'Like'} margin={'15px 0px'} />
        <ShareBtns react={"Share"} margin={"15px 0px"} />                </p>
              </Box>
{/* 
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="galaxy_page"
              >
                <Slider files={result[0]&&result[0].files}/>
              </Box> */}

              <Box
                style={{
                  padding: "20px",
                  paddingTop: "0px",
                }}
                className="galaxy_page"
              >
                <Typography
                  className="galaxy_Header"
                  style={{ marginBlock: "10px", paddingInline: "10px" }}
                  variant="h4"
                >
                  {" "}
{t('startingAt')}
                </Typography>

                <Typography style={{ paddingInline: "10px" }} className="galaxy_title" variant="h4">
                  {" "}
                  {/* {result[0]&&result[0].regularPrice*localStorage.getItem("currencyRate")}  */}
                  {result&&result.salePrice}
                </Typography>
                {/* <Box>
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
                        className="galaxy_Header"
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
                        className="galaxy_Header"
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
                        className="galaxy_Header"
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
                        className="galaxy_Header"
                        style={{ marginBlock: "10px" }}
                        variant="h6"
                      >
                        Smart Homes
                      </Typography>
                    </div>
                  </div>
                </Box> */}
              </Box>

              <Box
                style={{
                  padding: "20px",
                  paddingTop: "0px",
                }}
                className="galaxy_page"
              >
                <Typography
                  className="galaxy_Header"
                  style={{ marginBlock: "10px", paddingInline: "10px" }}
                  variant="h4"
                >
                  {" "}
                {t('projectOverview')}
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
                          style={{ marginBlock: "6px", color: "#ec94b4" }}
                        />
                        <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "18px",
                            display: "inline-block",
                          }}
                        >
                          {t('city')}
                        </span>
                        <br />
                        { cityName&&cityName}
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
                            display: "inline-block",
                          }}
                        >
{t('region')}
                     </span>
                        <br />
{municipalityName&&municipalityName}
                      </Box>
                    </Grid>
                    <Grid
                      xs={2.4}
                      item
                      md={2.4}
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
                            display: "inline-block",
                          }}
                        >

{t('propertyType')}                       </span>
                        <br />
{typeName&&typeName}
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

{t('deliveryDate')}
                     </span>
                        <br />
{result&&result.deliverDate}
                      </Box>
                    </Grid>
                    <Grid
                      xs={2.4}
                      item
                      md={2.4}
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
                          <div className="font-weight-bold text-capitalize mb-1">
{t('constructionyear')}
</div>
                        </span>
                        <br />
{result[0]&&result[0].created_at.slice(6)}
                      </Box>
                    </Grid>
                  </Grid>
                  <Typography
                    className="galaxy_Header"
                    style={{ marginBlock: "10px" }}
                    variant="h4"
                  >
                    {t('whyThisProperty')}
                  </Typography>
                  <Box>
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      result &&result.elment_trans[0]&&result.elment_trans[0].description2
                    )}
                  ></p> 
                  </Box>
                  <Typography
                    className="galaxy_Header"
                    style={{ marginBlock: "10px" }}
                    variant="h5"
                  >
                    {locale.locale=="ar"?<>{t('paymentType')} و {t('price')}</>:<>{t('paymentType')} && {t('price')} </> =="ar"?<>{t('paymentType')} و {t('price')}</>:<>{t('paymentType')} && {t('price')} </> }
                    
                  </Typography>
                  <Typography style={{ marginBlock: "10px" }}>
               
               {result&&result.elment_trans[0]&&result.elment_trans[0].paymentType}
                  </Typography>
                  <Table
                  area={result&&result.area}
                  room={result&&result.room} bathroom={result&&result.bathroom} regularPrice=
                  {result&&result.regularPrice}/>
                </Box>

                <Box>
                  <Typography
                    className="galaxy_Header"
                    style={{ marginBlock: "30px" }}
                    variant="h4"
                  >
                    {t('apartmentPlans')} 
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
                    xs={12}
                    md={12}
                    item
                    style={{ display: "flex", marginBlock: "10px" }}
                  >
                    <Plans />
                    <Plans />
                  </Grid>
                </Box> 
                   <Typography
                    className="galaxy_Header_details"
                    style={{ marginBlock: "10px" }}
                    variant="h4"
                  >
{t('detailedInformation')} 
        </Typography>
                  <Box>
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      result &&result.elment_trans[0]&&result.elment_trans[0].description3
                    )}
                  ></p> 
                  </Box>
              </Box>
              
              <Box
                style={{
                  padding: "20px",
                  
                }}
                className="galaxy_page"
              >
  <p
                  className="galaxy_Header"
                
                >{t('relatedProjects')}</p>
                <Grid container spacing={2}>
                  {realEstates&&realEstates.map((realEstate,index)=>{
                    console.log(realEstate);
                    return(
                      <Grid item xs={6} key={index}>
		<PropCard
										id={realEstate.id}
										title={realEstate.title}
										location={realEstate.city}
										municipality={realEstate.municipality}
										type={realEstate.type}
										description={realEstate.description}
										date={realEstate.updated_at}
										img={realEstate.files}
										payment={realEstate.paymentType}
										price={realEstate.salePrice}
										// price={"57,000"}
									/>                    </Grid>
                    )
                  })}



</Grid>
             </Box>
            </Col>
          </Row>
        ) : (
          <Row className="mt-4">
    
          <Col md={9}>
        
          <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="galaxy_backBlock"
              >
                           <p
                  className="galaxy_Header"
                
                >{result&&result.elment_trans[0]&&result.elment_trans[0].title}</p>

                <div
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    width: "80%",
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      result &&result.elment_trans[0]&&result.elment_trans[0].description
                    )}
                  ></p>
                        <LikeReact react={'Like'} margin={'15px 0px'} />
        <ShareBtns react={"Share"} margin={"15px 0px"} />
                </div>
              </Box>
            {/* <Box
              style={{
                padding: "20px",
                paddingTop: "30px",
              }}
              className="galaxy_page"
            >
              <Slider />
            </Box> */}

            <Box
              style={{
                padding: "20px",
                paddingTop: "0px",
              }}
              className="galaxy_page"
            >
              <Typography
                className="galaxy_Header"
                style={{ marginBlock: "10px", paddingInline: "10px" }}
                variant="h4"
              >
                {" "}
                {t('startingAt')}
              </Typography>

              <Typography style={{ paddingInline: "10px" }} className="galaxy_title" variant="h4">
              {result&&result.salePrice}

              </Typography>
              {/* <Box>
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
                      className="galaxy_Header"
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
                      className="galaxy_Header"
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
                      className="galaxy_Header"
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
                      className="galaxy_Header"
                      style={{ marginBlock: "10px" }}
                      variant="h6"
                    >
                      Smart Homes
                    </Typography>
                  </div>
                </div>
              </Box> */}
            </Box>

            <Box
              style={{
                padding: "20px",
                paddingTop: "0px",
              }}
              className="galaxy_page"
            >
              <Typography
                className="galaxy_Header"
                style={{ marginBlock: "10px", paddingInline: "10px" }}
                variant="h4"
              >
                {" "}
                {t('projectOverview')}{" "}
              </Typography>
              <Box>
                <Container>
                  <Row>
                    <Col xs={6} style={{paddingRight:"0",marginTop:"10px",textAlign:"center"}}>
                    <Box
                      style={{
                        backgroundColor: "#eee",
                        color: "black",
                        height: "100px",
                        borderRadius: "5px",
                      }}
                    >
                      <RoomIcon
                        style={{ marginBlock: "6px", color: "#ec94b4" }}
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
  {t('city')}                      </span>
                      <br />
{result[0]&&result[0].city}
                    </Box>
                    </Col>
                    <Col xs={6} style={{paddingRight:"0",marginTop:"10px",textAlign:"center"}}>
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
{t('region')}                       </span>
                      <br />
{municipalityName&&municipalityName}
                    </Box>

                    </Col>
                    <Col xs={6} style={{paddingRight:"0",marginTop:"10px",textAlign:"center"}}>
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

Property type                        </span>
                      <br />
{result[0]&&result[0].type}
                    </Box>


</Col>
<Col xs={6} style={{paddingRight:"0",marginTop:"10px",textAlign:"center"}}>
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

Delivery date                        </span>
                      <br />
{result[0]&&result[0].deliverDate}
                    </Box>

</Col>
<Col xs={12} style={{paddingRight:"0",marginTop:"10px",textAlign:"center"}}>
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
                        <div className="font-weight-bold text-capitalize mb-1">
Construction year
</div>
                      </span>
                      <br />
{result[0]&&result[0].created_at.slice(6)}
                    </Box>

</Col>
                  </Row>
                </Container>
                {/* <Grid
                  md={12}
                  style={{
                    padding: "10px",
                  }}
                >
                  <Grid
                    xs={6}
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
                        style={{ marginBlock: "6px", color: "#ec94b4" }}
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
{result[0]&&result[0].city}
                    </Box>
                  </Grid>
                  <Grid
                    xs={6}
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
Region                        </span>
                      <br />
{result[0]&&result[0].municipality}
                    </Box>
                  </Grid>
                  <Grid
                    xs={6}
                    item
                    md={2.4}
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

Property type                        </span>
                      <br />
{result[0]&&result[0].type}
                    </Box>
                  </Grid>
                  <Grid
                    xs={6}
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

Delivery date                        </span>
                      <br />
{result[0]&&result[0].deliverDate}
                    </Box>
                  </Grid>
                  <Grid
                    xs={6}
                    item
                    md={2.4}
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
                        <div className="font-weight-bold text-capitalize mb-1">
Construction year
</div>
                      </span>
                      <br />
{result[0]&&result[0].created_at.slice(6)}
                    </Box>
                  </Grid>
                </Grid> */}
                <Typography
                  className="galaxy_Header"
                  style={{ marginBlock: "10px" }}
                  variant="h4"
                >
                  {t('whyThisProperty')}
                </Typography>
                <Box>
                <p
                    dangerouslySetInnerHTML={createMarkup(
                      result &&result.elment_trans[0]&&result.elment_trans[0].description2
                    )}
                  ></p> 
                </Box>
                {result[0]&&result[0].files[0]&&result[0].files[0].video&&
       <>
                  <Typography
                  className="galaxy_Header"
                  style={{ marginBlock: "10px" }}
                  variant="h4"
                >
                  Project Video{" "}
                </Typography>
                <Box>
                <div onClick={handleOpen}>
      <Box style={{ width: "100%" }}>
        <img
          alt="img"
          style={{
            width: "100%",
            height: "110px",
            borderRadius: "10px",
          }}
          src={
            result[0] && result[0].files.length > 0
              ? result[0].files[0].imgUrl
              : "/logoo.svg"
          }
          // id={channelId && channelId}
          className="video_backBlock"
        />
      </Box>
    </div>
    {/* <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="h-10 w-75"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100% !important",
      }}
    >
      {body}
    </Modal> */}
                </Box>
       </>
             }
                {/* <Typography
                  className="galaxy_Header"
                  style={{ marginBlock: "10px" }}
                  variant="h5"
                >
                  {t('paymentType')} &&{t('price')} 
                </Typography>
                <Typography style={{ marginBlock: "10px" }}>
                  Payment Method: %35 Down Payment And The Rest By
                  Installments Over 24 Months.
                </Typography>
                <Table /> */}
              </Box>

              {/* <Box>
                <Typography
                  className="galaxy_Header"
                  style={{ marginBlock: "30px" }}
                  variant="h4"
                >
                  {t('apartmentPlans')} 
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
                  xs={12}
                  md={12}
                  item
                  style={{ display: "flex", marginBlock: "10px" }}
                >
                  <Plans />
                  <Plans />
                </Grid>
              </Box> */}
                           <Typography
                    className="galaxy_Header_details"
                    style={{ marginBlock: "10px" }}
                    variant="h4"
                  >
{t('detailedInformation')} 
        </Typography>
                  <Box>
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      result &&result.elment_trans[0]&&result.elment_trans[0].description3
                    )}
                  ></p> 
                  </Box>
            </Box>
          </Col>
                <Col md={3} className="mt-4">
            <NeedHelp />
          </Col>
        </Row>        )}
      </Container>
    </div>
  );
};
export default Index;
export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}
