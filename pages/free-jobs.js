import React, { useEffect, useState } from "react";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import { withStyles, makeStyles } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Link from 'next/link';

import Footer from "../component/Footer";
import Header from "../component/Header";
import { Col, Container, Row } from "react-bootstrap";
import NeedHelp from "../component/common/NeedHelp";
import getData from "../helpers/getData";
import { useRouter } from "next/router";
import { JoinFullSharp } from "@mui/icons-material";
import ContactForm from "../component/ContactUs/ContactForm";
import CitizenshipInfoBox from "../component/citizenship/CitizenshipInfoBox";
import { useTranslations } from "next-intl";

const Index = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const { locale } = useRouter();
  const [jobs, setJobs] = useState([])
  const [result, setResult] = useState([])
const t=useTranslations()
useEffect(() => {
  let active = true;
  let filtersArr = {
    langCode: locale,
  };
  
  getData(process.env.apiUrl + 'jobs',filtersArr)
  .then(response => {

    if (!active) {
      return;
    }
    setJobs(response.data.rows);

    // setStories(response.data.rows);
    //setLoading(false);
  })
  .catch(function (error) {
    //setLoading(false);          
  })
  getData(process.env.apiUrl + 'pages',filtersArr)
  .then(response => {

    if (!active) {
      return;
    }
    console.log(response.data.rows);
    const result =response.data.rows.filter(({id})=>id===10)
    setResult(result);

  })
  .catch(function (error) {
    //setLoading(false);          
  })

}, [locale])
console.log(result);
  const rows = [
    createData(1, "Antalya", "78%", "178%"),
    createData(2, "Antalya", "78%", "178%"),
    createData(3, "Antalya", "78%", "178%"),
    createData(4, "Antalya", "78%", "178%"),
    createData(5, "Antalya", "78%", "178%"),
  ];
  const rows2 = [
    createData(1, "78%", "178%"),
    createData(2, "78%", "178%"),
    createData(3, "78%", "178%"),
    createData(4, "78%", "178%"),
    createData(5, "78%", "178%"),
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const isDesktop = useMediaQuery("(min-width:940px)");
  function createMarkup(data) {
    return { __html: data };
  }
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
  }
  return (
    <div>
      {/* <Header /> */}
      <Container style={{ position: "relative", paddingBottom: "25px",marginTop:"25px" }}>
        {isDesktop ? (
          <Row >
            <Col md={3}>
            <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
              <CitizenshipInfoBox />

            </Col>
            <Col md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                }}
                className="free_jop"
              >
                <p className="free_jop_Header" variant="h4">
                  {" "}
{result[0]&&result[0].title}                </p>
             
              </Box>

              <div className="free_jop_hero">
              <img
                    style={{width: "100%", borderRadius: "10px" }}
                    src={result[0]?result[0].files[0].imgUrl:"/logoo.svg"}
                    className="free_jop_img w-100"
                  />
              <p      dangerouslySetInnerHTML={createMarkup(
                      result[0] && result[0].description
                    )}
                    className="job_des"
                    ></p>                         <Grid container spacing={2}                 
                    >
                {jobs.map(((job,index)=>{
            
                  return(
               

                    <Grid
                      xs={4}
                      item
                      key={index}
                      className="jop_des"
                    >
                      <Box
                        style={{
                          height: "auto",
                          minHeight:"250px",
                          width: "100%",
                          backgroundColor: "#ec94b4",
                          textAlign: "center",
                          marginTop: "20px",

                          borderRadius: "10px",
                          display:" flex",
                          padding: "15px",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                       
                        <p
                          style={{
                            fontSize: "24px",
                            padding: ".3rem 1rem",
                            color: "white",
                            borderRadius: "5px",
                            border: "unset",
                            margin: "auto",
                            marginBlock: "10px",
                          }}
                        >
                          {job.title}
                        </p>
                        <p
                        className="jop_desc"
                    dangerouslySetInnerHTML={createMarkup(
                      job && job.description.length>70?job.description.slice(0,70)+"......":job.description
                    )}
                  ></p>

                        <hr
                          style={{
                            color: "white",
                            marginInline: "8px",
                            marginTop: "10px",
                          }}
                        />
                <div className="free_jop_view_jop_btn">
<Link href={`/job_details/${job.id}`}>{t('view')}</Link>
</div>
                      </Box>
                    </Grid>
                  )
                }))}
                          </Grid>

              </div>
            </Col>
          </Row>
        ) : (
          <Row >
            <Col md={3}>
              <NeedHelp />
         
            </Col>
            <Col md={9}>
              <Box
                style={{
                  padding: "20px",
                  paddingTop: "30px",
                  marginTop:"25px"
                }}
                className="free_jop"
              >
                <Typography className="free_jop_Header" variant="h4">
                  {" "}
                  <p className="free_jop_Header" variant="h4">
                  {" "}
{result[0]&&result[0].title}                </p>                </Typography>
                <Typography
                  style={{
                    marginInline: "0px",
                    marginBlock: "10px",
                    fontSize: "20px",
                    textAlign: `left`,
                  }}
                >
                  Job Vacancies At Shamdin Real Estate
                </Typography>
              </Box>

              <div className="free_jop_hero">
              {/* <img
                    style={{width: "100%", borderRadius: "10px" }}
                    src={job.files[0]?job.files[0].imgUrl:"/logoo.svg"}
                    className="w-100"
                  />
              <p      dangerouslySetInnerHTML={createMarkup(
                      job && job.description
                    )}
                    className="job_des"
                    ></p> */}
                    <img
                    style={{width: "100%", borderRadius: "10px" }}
                    src={result[0]&&result[0].files[0]?result[0].files[0].imgUrl:"/logoo.svg"}
                    className="w-100"
                  />
              <p      dangerouslySetInnerHTML={createMarkup(
                      result[0] && result[0].description
                    )}
                    className="job_des"
                    ></p> 
                         <Grid container spacing={2}                 
                    >
                {jobs.map(((job,index)=>{
                  console.log(job);
                  return(
               

                    <Grid
                      xs={12}
                      item
                      key={index}
                      className="jop_des"
                    >
                      <Box
                        style={{
                          height: "250px",
                          width: "100%",
                          backgroundColor: "#ec94b4",
                          textAlign: "center",
                          marginTop: "20px",

                          borderRadius: "10px",
                          display:" flex",
                          padding: "15px",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                       
                        <Typography
                          style={{
                            fontSize: "24px",
                            padding: ".3rem 1rem",
                            color: "white",
                            borderRadius: "5px",
                            border: "unset",
                            margin: "auto",
                            marginBlock: "10px",
                          }}
                        >
                          {job.title}
                        </Typography>
                        <p
                        className="jop_desc"
                    dangerouslySetInnerHTML={createMarkup(
                      job && job.description
                    )}
                  ></p>

                        <hr
                          style={{
                            color: "white",
                            marginInline: "8px",
                            marginTop: "10px",
                          }}
                        />
                   
                   <div className="free_jop_view_jop_btn">

<Link href={`/job_details/${job.id}`}>{t('view')}</Link>
</div>
                      </Box>
                    </Grid>
                  )
                }))}
                          </Grid>

              </div>
            </Col>
          </Row>    )}
      </Container>
      {/* <Footer /> */}
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
