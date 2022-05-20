import React, {useState } from "react";
// MUI component
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// Local component
import Header from "../../component/Header/index"
import PostLike from "../../component/SubTurkey/PostLike";
import Content from "../../component/SubTurkey/Content/index";

import CitizenshipInfoBox from "../../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../../component/ContactUs/ContactForm";
// Common component
// Style
// import "./fixFont.css";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslations } from 'next-intl';
import postData from '../../helpers/postData';

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const t = useTranslations('general');
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

  return (
    <div>
      {isDesktop ? (
        <>
        <Container>
          <Row>
            <Col md={3} className="mt-3">
              
            <ContactForm sendData={sendData} handleInputChange={handleInputChange} />

            <CitizenshipInfoBox />

            </Col>
            <Col md={9} className="mt-3">
              <PostLike />
              <Content />
            </Col>
          </Row>
        </Container>
          {/* <Grid
            item
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={2}
          >
            <Grid item xs={4}>
              <NeedHelp />
              <CitizenshipBlock />
            </Grid>

            <Grid item xs={8}>
              <PostLike />
              <Content />
            </Grid>
          </Grid> */}
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <PostLike />
            <Content />
            <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
          </Grid>
        </>
      )}
    </div>
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
