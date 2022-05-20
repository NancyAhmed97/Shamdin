
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NeedHelp from "../../component/common/NeedHelp";
import CitizenshipBlock from "../../component/common/CitizenshipBlock";
import PostLike from "../../component/SubTurkey/PostLike";
import Content from "../../component/SubTurkey/Content/index";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';
import CitizenshipInfoBox from "../../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../../component/ContactUs/ContactForm";
import postData from '../../helpers/postData';

const Index = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const { locale } = useRouter();
	const [ errMsg, setErrMsg ] = useState('');
  
	const [ values, setValues ] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  const t = useTranslations('general');
  
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
			if (values[key].trim() == '' || values[key] == undefined) {
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
    <div className="for_resale_turkey">
      {/* <FiltersList /> */}
      {isDesktop ? (
        <>
          <Container className="mt-4">
            <Row>
              <Col md={3}>
                <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
                <CitizenshipInfoBox />
              </Col>
              <Col md={9}>
                
                <PostLike />
                <Content />
              </Col>
            </Row>
          </Container>
          {/* <Grid
            item
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <NeedHelp />
              <CitizenshipBlock />
            </Grid>
            <Grid item xs={8}>
             <PostLike />
               <Content />
            </Grid>
          </Grid>  */}
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
};
export default Index;

export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}