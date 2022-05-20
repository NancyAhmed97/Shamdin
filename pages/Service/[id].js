import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Button,
  TextField,
  Card,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  withStyles
} from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import CitizenshipInfoBox from "../../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../../component/ContactUs/ContactForm";

import { useTranslations } from 'next-intl';
import postData from '../../helpers/postData';

import axios from "axios";

import { Col, Row } from "react-bootstrap";
export default function Service() {
    const isDesktop = useMediaQuery("(min-width:1125px)");
    const router=useRouter();
    const  {locale}  = router
    const t = useTranslations('general');
    const [serviceObject, setServiceObject] = useState([])
    const [ errMsg, setErrMsg ] = useState('');
    const [ values, setValues ] = useState({
      name: '',
      phone: '',
      email: '',
      description: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      setValues({
        ...values,
        [name]: value
      });
    };
  
    const sendData = (e) => {
      
      Object.keys(values).forEach((key, index) => {
        //console.log(`${key}: ${values[key]}`);
        if (values[key].trim() == '') {
          //setSeverity('error');
          alert(t('isRequired', { colName: t(key) }))
          setErrMsg(t('isRequired', { colName: t(key) }));
          throw 'Break';
        }
      });
      
      postData(process.env.apiUrl + 'contacts', {
        ...values,
        langCode: locale
      }) //userInfo.accessToken
        .then(async (response) => {
          // O Eng Nancy, We need msg here.
            alert('sent')
          setValues({});  
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            console.log(error.response);
  
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    };
   
console.log(router);
    useEffect(() => {

    axios({
      method: "get",
      url: `${process.env.apiUrl}services?id=${router}/langCode=${locale}}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      console.log(res.data.rows);
 setServiceObject(res.data.rows);
    });
  }, [locale]);
  function createMarkup(data) {
    return { __html: data };
  } 
console.log();
  return (
<>

<Container
    maxWidth="lg"
    style={{ position: "relative", paddingBottom: "25px" }}
  >

    <Grid xs={12} md={12} style={{ display: "flex" }} className="mt-3">
      {isDesktop ? (
        <>
          <Grid container item xs={12} md={3} style={{ display: "block",margin:"0px 15px" }}>
          <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
          <CitizenshipInfoBox />
          </Grid>
          <Grid container item xs={12} md={9} style={{ display: "block" }}>
      
          <Box
			  style={{
				padding: "20px",
				paddingTop: "30px",
			  }}
			  className="about_backBlock mb-3"
			>
			  <p className="about_Header" variant="h4">
				{" "}
				{serviceObject[0]&&serviceObject[0].title}
			  </p>
		
			</Box>
            <div className="service_hero">
              <Box>
                 <img
                  style={{ width: "100%" }}
                  src={serviceObject[0]&&serviceObject[0].files[0]?serviceObject[0].files[0].imgUrl:"/logoo.svg"}
                  alt="Img"
                  className="Service_main-page"
                />    
                     <p
                  // className="service_Header"
                  // style={{
                  //   textAlign: `${locale == "ar" ? "right" : "left"}`,
                  // }}
                  dangerouslySetInnerHTML={createMarkup(
                    serviceObject[0]&&serviceObject[0].description
                    )}
                >
                </p>

           

    
              </Box>
            </div>
            {/* <Grid
              xs={12}
              md={12}
              style={{
                display: "flex",
                backgroundColor: "white",
                padding: "20px",
                marginTop:"10px"
              }}
    >
        
            </Grid> */}

          </Grid>


        </>
      ) : (
        <>
      <Container>
        <Row>
          {/* <Col xs={12}></Col> */}
          <Col xs={12}>
            
          <div className="service_hero my-3">
            
              <Box>
                  {serviceObject&&serviceObject.map((serviceObjectImg)=>{
                      return(
            <>
                        <img
                  style={{ width: "100%" }}
                  src={serviceObjectImg.files.length>0?serviceObjectImg.files[0].imgUrl:"/logoo.svg"}
                  alt="Img"
                  className="Service_main-page"
                />    
                     <p
                  className="service_Header"
                  style={{
                    textAlign: `${locale == "ar" ? "right" : "left"}`,
                  }}
                  dangerouslySetInnerHTML={createMarkup(
                    serviceObjectImg.description
                    )}
                >
                </p>
                
            </>
                      )
                  })}
       

           

    
              </Box>
            </div>
          </Col>
          <Col xs={12}>
          <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
          </Col>
        </Row>
      </Container>
        </>
      )}
    </Grid>
  </Container>
</>
  )
}

export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}