import React from "react";
import {
  Box,
  
  Grid,
  FormControl,
  MenuItem,
  Select,
  Alert,
} from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SubMobile from "../component/Header/Mobile/SubMobile";
import NeedHelp from "../component/common/NeedHelp";
import { Col, Row,Container } from "react-bootstrap";
import postData from "../helpers/postData";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import CitizenshipInfoBox from "../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../component/ContactUs/ContactForm";
const Index = () => {
  const [age, setAge] = React.useState("");
  const [currency, setCurrency] = React.useState("EUR");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [letter, setLetter] = React.useState("");
  const [successAlert, setSuccessAlert] = React.useState("");
  const [dangerAlert, setDangerAlert] = React.useState("");
  const [cv, setCv] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const t = useTranslations('general');

  const { locale } = useRouter();
  const handleInputChange = (event) => {
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
  const sendData=(event)=>{
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


  const isDesktop = useMediaQuery("(min-width:970px)");
  return (
    <div>
 {/* <Header /> */}
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px",marginTop:"25px" }}
      >
        <Row >
          {isDesktop ? (
            <>
              <Col  md={3}>
              <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
                <CitizenshipInfoBox/>
              </Col>

              <Col  md={9} className="employee_section">
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "20px",
                  }}
                  className="employment_backBlock"
                >
                  <p className="employment_Header" variant="h4">
{t('applicationForm')}
                  </p>
                  <p
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                    }}
                  >
                    <p> {t('applicationForm')}</p>
                  </p>
                </Box>

                <Grid
                  item
                  xl={12}
                  md={12}
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    margin: "15px 0px",
                    padding:"25px 0"
                  }}
                  className="employment_backBlock"

                >
                  <Grid item xl={6} md={6}>
                    <Card
                      className="employment_margin"
                      style={{ position: "relative", height: "auto" }}
                    >
                      <Box
                        className="employment_padding"
                        style={locale==="ar"?{ textAlign: "right"}:{ textAlign: "left"}}
                      >
                        <p className="employment_Header" variant="h6">
                          {t('applicationForm')}
                        </p>
                        <p variant="p" style={{marginBottom:"20px"}}>
                          {t('applyDesc')}
                        </p>
                        {successAlert&&<Alert className="alert_msg_container">{t('successAlert')}</Alert>}
                        {dangerAlert&&<Alert>{t('dangerAlert')}</Alert>}
                        <TextField
                          id="Name"
                          label={t('name')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleInputChange}
                        />
                        <TextField
                          id="phone"
                          label={t('phone')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleInputChange}

                        />
                        <TextField
                          id="Email"
                          label={t('email')}
                          className="employment_marginTop"
                          variant="outlined"
                          onChange={handleInputChange}

                        />

                       
                        <TextField
                          id="Cv"
                          className="employment_marginTop"
                          variant="outlined"
                          type="file"
                          style={{ width: "100%" }}
                          onChange={handleInputChange}

                        ></TextField>

                        <TextField
                          id="Letter"
                          label={t('letter')}
                          multiline
                          style={{ width: "90%", position: "relative" }}
                          rows={6}
                          variant="outlined"
                          onChange={handleInputChange}

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
                          }}
                          className="employee_btn2"
                          onClick={sendData}
                        >
{t('send')}                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xl={6}
                    md={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card
                      variant="outlined"
                      style={{
                        borderRadius: "10px",
                        margin: "10px",
                        backgroundColor: "white",
                        border: "unset",
                      }}
                    >
                      <Box className="employment_boxImage"></Box>
                    </Card>
                  </Grid>
                </Grid>
              </Col>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <Box
                  style={{
                    padding: "20px",
                    paddingTop: "20px",
                  }}
                  className="employment_backBlock"
                >
                  <p className="employment_Header" variant="h4">
                    {t('applicationForm')}
                  </p>
                  <p
                    style={{
                      marginInline: "0px",
                      marginBlock: "10px",
                      width: "80%",
                    }}
                    
                  >
                    {t('applicationForm')}
                  </p>
                </Box>

                <Grid
                  item
                  xl={12}
                  md={12}
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    margin: "15px 0px",
                    flexWrap: "wrap",
                  }}
                  

                >
                  <Grid item xl={5} md={5}>
                    <Card
                      className="employment_margin"
                      style={{ position: "relative", height: "auto" }}
                    >
                      <Box
                        className="employment_padding"
                        style={{ textAlign: "left" }}
                      >
                        <p className="employment_Header" variant="h6">
                          {t('applicationForm')}
                        </p>
                        <p variant="p" >
                          {t('applyDesc')}
                        </p>
                        <TextField
                          id="standard-basic"
                          label={t('name')}
                          className="employment_marginTop"
                          variant="outlined"
                          style={{marginTop:"20px"}}
                        />
                        <TextField
                          id="standard-basic"
                          label={t('phone')}
                          className="employment_marginTop"
                          variant="outlined"
                        />
                        <TextField
                          id="standard-basic"
                          label={t('email')}
                          className="employment_marginTop"
                          variant="outlined"
                        />

               
                        <TextField
                          id="standard-basic"
                          className="employment_marginTop"
                          variant="outlined"
                          type="file"
                          style={{ width: "100%" }}
                        ></TextField>

                        <TextField
                          id="outlined-multiline-static"
                          label={t('letter')}
                          multiline
                          rows={6}
                          defaultValue="Default Value"
                          variant="outlined"
                          style={{marginTop:"15px",width:"100%"}}
                        />
                        <Button
                          variant="contained"
                          color="secondary"
                          className="employment_btn"
                          style={{
                            position: "relative",
                            width: "100%",
                            padding: "5px",
                            left: "unset",
                            right: "unset",

                          }}
                        >
{t('send')}                        </Button>
                      </Box>
                    </Card>
                  </Grid>

                  <Grid
                    item
                    xl={5}
                    md={5}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                    }}
                  >
                    <Card
                      variant="outlined"
                      style={{
                        borderRadius: "10px",
                        margin: "10px",
                        backgroundColor: "white",
                        border: "unset",
                        display: "flex",
                        
                      }}
                      
                    >
                      <Box className="employment_boxImage"></Box>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Row>
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
