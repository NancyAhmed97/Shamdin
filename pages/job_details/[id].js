/* eslint-disable @next/next/no-img-element */
import { Alert, Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { Card, Col, Container, Row } from "react-bootstrap";
import NeedHelp from "../../component/common/NeedHelp";
import Header from "../../component/Header/index"
import Link from 'next/link';
import { useEffect, useState } from "react";
import getData from "../../helpers/getData";
import { useTranslations } from "next-intl";
import postData from "../../helpers/postData";
import ContactForm from "../../component/ContactUs/ContactForm";
import CitizenshipInfoBox from "../../component/citizenship/CitizenshipInfoBox";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width:940px)");
	const locale = useRouter();
const [jopDes, setJopDes] = useState([])
const t = useTranslations('general');
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [letter, setLetter] = useState("");
const [successAlert, setSuccessAlert] = useState("");
const [dangerAlert, setDangerAlert] = useState("");
const [cv, setCv] = useState("");
const [phone, setPhone] = useState("");
console.log(locale.query.id);
  useEffect(() => {
  let active = true;
  let filtersArr = {
    langCode: locale.locale,
id:locale.query.params
  };
  
  getData(process.env.apiUrl + 'jobs',filtersArr)
  .then(response => {

    if (!active) {
      return;
    }
    console.log(response.data.rows);
   const result= response.data.rows.filter(({id})=>id===JSON.parse(locale.query.id))
   setJopDes(result);
   console.log(result);
    // setStories(response.data.rows);
    //setLoading(false);
  })
  .catch(function (error) {
    //setLoading(false);          
  })
}, [])
function createMarkup(data) {
  return { __html: data };
}
const handleChange = (event) => {
  if(event.target.id==="Name")
{
setName(event.target.value);

}else if(event.target.id==="Email"){
setEmail(event.target.value);
}
// else if(event.target.id==="Cv"){
//   setCv(event.target.value);
// }

else if(event.target.id==="Letter"){
setLetter(event.target.value);
}else if(event.target.id==="phone"){
setPhone(event.target.value);
}
};
const sendDataToApi=(event)=>{
  event.preventDefault();
  let filtersArr = {
    langCode: locale,
    name:name,
  email:email,
  phone:phone,
  letter:letter
  };
  
  postData(process.env.apiUrl + 'jobApplicants', filtersArr)
    .then(response => {

      if (!active) {
        return;
      }
setSuccessAlert(true)
    })
    .catch(function (error) {
      //setLoading(false); 
      setDangerAlert(true)         
    })
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
    <div className="jop_details">
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
                <Typography className="free_jop_Header" variant="h4">
                  {" "}
{jopDes[0]&&jopDes[0].title}
                </Typography>
         
              </Box>

              <div className="free_jop_hero">
              <div className="jop_info my-3">
                  <img src="/logoo.svg " alt="logo" />
                  <div className="job-card px-3">
                    <span className="duration text-capitalize my-2">{t('fullTime')}</span>
                    <div className="h5 job-name text-capitalize mb-3 mt-4 text-white">
                    {jopDes[0]&&jopDes[0].title}

</div>
                  </div>
                </div>
        


<p 												dangerouslySetInnerHTML={createMarkup(jopDes[0]&&jopDes[0].description)}
></p>
<hr />
<p className="jop_des_apply_now">          {t('applyNow')}
</p>
<p  style={{marginBottom:"20px"}}>
{t('applyDesc')}
                        </p>


                        <Grid container spacing={2}>
  <Grid item xs={6}>
  {successAlert&&<Alert className="alert_msg_container">{t('successAlert')}</Alert>}
                        {dangerAlert&&<Alert>{t('dangerAlert')}</Alert>}
                        <TextField
                          id="Name"
                          label={t('name')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <TextField
                          id="phone"
                          label={t('phone')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleChange}

                        />
                        <TextField
                          id="Email"
                          label={t('email')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleChange}

                        />

                       
                        <TextField
                          id="Cv"
                          className="employment_marginTop"
                          variant="outlined"
                          type="file"
                          style={{ width: "100%" }}
                          onChange={handleChange}

                        ></TextField>

                        <TextField
                          id="Letter"
                          label={t('letter')}
                          multiline
                          style={{ width: "90%", position: "relative" }}
                          rows={6}
                          variant="outlined"
                          onChange={handleChange}

                        />
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{
                            position: "relative",
                            width: "100%",
                            left: "unset",
                            right: "unset",
                            background: "#ec94b4",
                            color: "#fff",
                            marginTop: "25px",
                            padding: "0.35rem 2rem",
                          }}
                          className="employee_btn2"
                          onClick={sendDataToApi}
                        >
{t('send')}
                        </Button>  </Grid>
  <Grid item xs={6}>
  <Box className="employment_boxImage"></Box>
  </Grid>

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
                  {jopDes[0]&&jopDes[0].title}
                </Typography>
     
              </Box>

              <div className="free_jop_hero">
                <div className="jop_info my-3">
                  <img src="/logoo.svg " alt="logo" />
                  <div className="job-card px-3">
                  <span className="duration text-capitalize my-2">{t('fullTime')}</span>
                    <div className="h5 job-name text-capitalize mb-3 mt-4">
                    {jopDes[0]&&jopDes[0].title}

</div>
                  </div>
                </div>
              
<p 												dangerouslySetInnerHTML={createMarkup(jopDes[0]&&jopDes[0].description)}
></p>  
<hr />
<p className="jop_des_apply_now">          {t('applyNow')}
</p>
<p  style={{marginBottom:"20px"}}>
                          {t('applyDesc')}
                        </p>
                        <Grid container spacing={2}>
  <Grid item xs={12}>
  {successAlert&&<Alert className="alert_msg_container">{t('successAlert')}</Alert>}
                        {dangerAlert&&<Alert>{t('dangerAlert')}</Alert>}
                        <TextField
                          id="Name"
                          label={t(name)}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleChange}
                        />
                        <TextField
                          id="phone"
                          label={t('phone')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleChange}

                        />
                        <TextField
                          id="Email"
                          label={t('email')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleChange}

                        />

                       
                        <TextField
                          id="Cv"
                          className="employment_marginTop"
                          variant="outlined"
                          type="file"
                          style={{ width: "100%" }}
                          onChange={handleChange}

                        ></TextField>

                        <TextField
                          id="Letter"
                          label={t('letter')}
                          multiline
                          style={{ width: "100%", position: "relative" }}
                          rows={6}
                          variant="outlined"
                          onChange={handleChange}

                        />
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{
                            position: "relative",
                            width: "100%",
                            left: "unset",
                            right: "unset",
                            background: "#ec94b4",
                            color: "#fff",
                            marginTop: "25px",
                            padding: "0.35rem 2rem",
                          }}
                          className="employee_btn2"
                          onClick={sendDataToApi}
                        >
{t('send')}
                        </Button>  </Grid>
  <Grid item xs={12}>
  <Box className="employment_boxImage"></Box>
  </Grid>

</Grid>

              </div>
            </Col>
          </Row>    )}
      </Container>
      {/* <Footer /> */}
    </div>
  )
}

export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}