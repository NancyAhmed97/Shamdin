import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import PriceSlider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Dropdown from "./dropdown";
import Slider from "./Slider";
import DarkBtn from "../common/DarkBtn";
import { Alert, Form } from "react-bootstrap";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslations } from 'next-intl';
import getData from '../../helpers/getData';
import { AddBoxRounded } from "@mui/icons-material";

const Index = () => {
  const [valuePrice, setValuePrice] = React.useState([1000, 2095000]);
  const [valuePriceParh, setValuePriceParh] = React.useState([]);
  const [valueSpaceParh, setValueSpaceParh] = React.useState([]);
  const [valueSpace, setValueSpace] = React.useState([0, 500]);
  const [cities, setCities] = React.useState([]);
  const [cityId, setCityId] = React.useState(0);
  const [municipalityName, setMunicipalityName] = React.useState("");
  const [typeName, setTypeName] = React.useState("");
  const [additionals, setAdditionals] = React.useState("");
  const [types, setTypes] = React.useState([]);
  const [municipalities, setMunicipalities] = React.useState([]);
  const [features, setFeatures] = React.useState([]);
  const [alert, setAlert] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width:1000px)");
  const { locale } = useRouter();
  const t = useTranslations('general');
  
  const handlePriceChange = (event, newValue) => {
    setValuePrice(event.target.value);
    setValuePriceParh(event.target.value)
  };
  const handleSpaceChange = (event, newValue) => {
    setValueSpace(event.target.value);
    setValueSpaceParh(event.target.value)
  };
  const spaceMarks = [
    {
      value: 0,
      label: "0 m",
    },

    {
      value: 500,
      label: "500 m",
    },
  ];
  const priceMarks = [
    {
      value: 1000,
      label: "1000 $",
    },

    {
      value: 2095000,
      label: "2 095 000 $",
    },
  ];
  useEffect(() => {
    let active = true;

          //setLoading(true);
    var filtersArr = {
      langCode: locale,
      sortBy: 'id',
      sortType: 'desc'
    };

    function getCities() {
      
      getData(process.env.apiUrl + 'cities', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setCities(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getCities();  

    function getRealestatesTypes() {
      
      getData(process.env.apiUrl + 'realestates-types', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setTypes(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getRealestatesTypes(); 


    function getRealestatesFeatures() {
      
      getData(process.env.apiUrl + 'realestates-features', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setFeatures(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getRealestatesFeatures(); 
 
    function getMunicipalities() {
      
      getData(process.env.apiUrl + 'municipalities', {
        langCode: locale,
        cityId
      })
        .then(response => {

          if (!active) {
            return;
          }

          setMunicipalities(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    if(cityId != 0) {
      getMunicipalities();
    } 

    return () => {
      active = false;
    };

  }, [cityId, locale]);

  const alerttoparent=(value)=>{
    setAlert(value);
  }
  return (
    <div className="carosoul_root">
      {isDesktop ? (
       
          <Container fluid>
            <Row>
              <Col md={3} className="p-0">
                <Card className="carosoul_margin">
                  <Box
                    className="carosoul_padding"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="h5" className="title_dropdown">
                      {t('searchForApartment')}
                    </Typography>
                    {alert&&
                    <Alert variant="danger">Please choose all filed</Alert>
                    }



<Grid mb={2} container md={12} spacing={0} >
                
                <Grid item md={10}>
                <Form.Select onChange={(e)=>{
                  setCityId(e.target.value);                         
             
                }}>
                <option selected>{t('city')}</option>
                {                        cities &&
                    cities.map((city, index) => {
                      return(
                        <option value={city.id} key={index}>{city.name}</option> 
                      )
                    })
}
                  </Form.Select>
                </Grid>

                <Grid item md={1}>
                  <div className='bg_dropdown'><ArrowDropDownIcon /></div>
                </Grid>

            </Grid>

                    
               <Grid mb={2} container md={12} spacing={0} >
                
                    <Grid item md={10}>
                      <Form.Select onChange={(e)=>{
      
      setMunicipalityName(e.target.value);
    }} >
    <option selected>{t('municipality')} </option>
    {                        types &&
        municipalities.map((municipality, index) => {
          return(
            <option   key={index} value={municipality.id}>{municipality.name}</option> 
          )
        })
  }
                      </Form.Select>
                    </Grid>

                    <Grid item md={1}>
                      <div className='bg_dropdown'><ArrowDropDownIcon /></div>
                    </Grid>

                </Grid>

                   
                   
               <Grid mb={2} container md={12} spacing={0} >
                
                <Grid item md={10}>
                <Form.Select onChange={(e)=>{
                      setTypeName(e.target.value);
                    }} >
                    <option selected>{t('type')}</option>
                    {                        types &&
                        types.map((type, index) => {
                          return(
                            <option  key={index} value={type.id}>{type.title}</option> 
                          )
                        })
}
                      </Form.Select>
                </Grid>

                <Grid item md={1}>
                  <div className='bg_dropdown'><ArrowDropDownIcon /></div>
                </Grid>

            </Grid>
                   
                    
               <Grid mb={2} container md={12} spacing={0} >
                
                <Grid item md={10}>
               
                <Form.Select onChange={(e)=>{
                      setAdditionals(e.target.value);
                    }} >
                    <option selected>{t('realestatesFeatures')}</option>
                    {                        features &&
                        features.map((feature, index) => {
                          return(
                            <option  key={index} value={feature.id}>{feature.title}</option> 
                          )
                        })
}
                      </Form.Select>
                </Grid>

                <Grid item md={1}>
                  <div className='bg_dropdown'><ArrowDropDownIcon /></div>
                </Grid>

            </Grid>
                    
            <Box mt={1} mx={2}>
            <label>{t('area')}</label>
                      <PriceSlider
                        value={valueSpace}
                        onChange={handleSpaceChange}
                        valueLabelDisplay="on"
                        aria-labelledby="range-slider"
                        //getAriaValueText={valuetext}
                        // marks={spaceMarks}
                        min={40 }
                        max={500}
                      />
                    </Box>

                    <Box mx={2} mt={3}>
                    <label>{t('price')}</label>
                      <PriceSlider
                        value={valuePrice}
                        onChange={handlePriceChange}
                        valueLabelDisplay="on"
                        aria-labelledby="range-slider"
                        //getAriaValueText={valuetext}
                        // marks={priceMarks}
                        min={1000}
                        max={2095000}
                      />
                    </Box>

                    <Box mt={2}>

                    <DarkBtn
                      text={t('search')}
                      cityId={cityId}
                      municipalityName={municipalityName}
                      typeName={typeName}
                      additionals={additionals}
                      valuePrice={valuePriceParh}
                      valueSpace={valueSpaceParh}
                      alerttoparent={alerttoparent}
                    />
                    </Box>
                  </Box>
                </Card>
              </Col>
              <Col md={9}>
                <Slider />
                <Container className="p-0 m-0">
                  <Row>
                    <Col md={4}>
                      <div className="head-box section-border text-center d-flex flex-column p-3 h-100 mr-lg-2">
                        <div className="head font-weight-bold text-capitalize">
                        {t('siteBlog')}
                        </div>
                        <p className="title text-capitalize">
                          {t('siteBlogBrief')}
                        </p>
                        <Link href="ownership-turkey" passHref>
                          <span className="primary-btn text-capitalize mt-auto">
                          {t('siteBlog')}
                          </span>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="head-box section-border text-center d-flex flex-column p-3 h-100 mr-lg-2">
                        <div className="head font-weight-bold text-capitalize">
                        {t('faqs')}
                        </div>
                        <p className="title text-capitalize">                          
                          {t('faqsBrief')}
                        </p>
                        <Link href="faq-city" passHref>
                          <span className="primary-btn text-capitalize mt-auto">
                          {t('faqs')}
                          </span>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="head-box section-border text-center d-flex flex-column p-3 h-100 mr-lg-2">
                        <div className="head font-weight-bold text-capitalize">
                          {t('testimonials')}
                        </div>
                        <p className="title text-capitalize">                          
                          {t('testimonialsBrief')}
                        </p>
                        <Link href="testimonial" passHref>
                          <span className="primary-btn text-capitalize mt-auto">
                          {t('readMore')}
                          </span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
       
      ) : (
        <>
          <Grid item xs={12}>
            <Slider />

            {/* Down Blocks */}
            <Container className="p-0 ">
                  <Row>
                    <Col md={4} className="my-3">
                      <div className="head-box section-border text-center d-flex flex-column p-3 h-100 mr-lg-2 bg-white">
                        <div className="head font-weight-bold text-capitalize ">
                        {t('siteBlog')}
                        </div>
                        <p className="title text-capitalize">
                        {t('siteBlogBrief')}
                        </p>
                        <Link href="ownership-turkey" passHref>
                          <span className="primary-btn text-capitalize mt-auto">
                          {t('siteBlog')}
                          </span>
                        </Link>{" "}
                      </div>
                    </Col>
                    <Col md={4} className="my-3">
                      <div className="head-box section-border text-center d-flex flex-column p-3 h-100 mr-lg-2 bg-white">
                        <div className="head font-weight-bold text-capitalize">
                        {t('faqs')}
                        </div>
                        <p className="title text-capitalize">
                        {t('faqsBrief')}
                        </p>
                        <Link href="faq-city" passHref>
                          <span className="primary-btn text-capitalize mt-auto">
                          {t('faqs')}
                          </span>
                        </Link>{" "}
                      </div>
                    </Col>
                    <Col md={4} className="my-3">
                      <div className="head-box section-border text-center d-flex flex-column p-3 h-100 mr-lg-2 bg-white">
                        <div className="head font-weight-bold text-capitalize">
                        {t('testimonials')}
                        </div>
                        <p className="title text-capitalize">
                        {t('testimonialsBrief')}
                        </p>
                        <Link href="testimonial" passHref>
                          <span className="primary-btn text-capitalize mt-auto">
                          {t('testimonials')}
                          </span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
          </Grid>
        </>
      )}
    </div>
  );
};
export default Index;
