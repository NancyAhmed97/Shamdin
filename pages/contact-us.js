import MapLocation from "../component/ContactUs/MapLocation";
import ContactUs from "../component/ContactUs/Contact";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Col, Container, Row } from "react-bootstrap";
import CitizenshipInfoBox from "../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../component/ContactUs/ContactForm";
import React, { useEffect, useState } from "react";
import postData from '../helpers/postData';
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';

const Index = () => {

  const isDesktop = useMediaQuery("(min-width:940px)");
	const [ errMsg, setErrMsg ] = useState('');
	const [ values, setValues ] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
	const { locale } = useRouter();
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
      <Container className="mt-5">
        <Row>
          {isDesktop ? (
            <>
              <Col xs={3} className="p-0">
                <ContactForm sendData={sendData} handleInputChange={handleInputChange} />

                <CitizenshipInfoBox />
              </Col>
              <Col xs={9}>
                <ContactUs />
                <MapLocation />
              </Col>
            </>
          ) : (
            <>
              <Col xs={12}>
                <ContactUs />
                <MapLocation />
                <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
              </Col>
            </>
          )}
        </Row>
      </Container>
      
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
