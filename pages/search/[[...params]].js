import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";
import NeedHelp from "../../component/common/NeedHelp";
import CitizenshipBlock from "../../component/common/CitizenshipBlock";
import SearchBox from "../../component/Search/SearchBox";
import ResultBox from "../../component/Search/ResultBox";
// import { useDispatch } from "react-redux";

import CitizenshipInfoBox from "../../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../../component/ContactUs/ContactForm";
import { useRouter } from "next/router";

import postData from '../../helpers/postData';
import getData from '../../helpers/getData';
import { useState } from "react";
import { useTranslations } from 'next-intl';

const Index = () => {
  const isDesktop = useMediaQuery("(min-width:1000px)");
  
  const [ errMsg, setErrMsg ] = useState('');  
	const [ values, setValues ] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });

  const router = useRouter();
  const { locale } = router;
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
			if (values[key] == '') {
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
          alert('sent')
          // O Eng Nancy, We need msg here.
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
        <Container className="mt-4">
          <Row className="p-0">
            <Col md={3} className=" p-0">
            <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
            <CitizenshipInfoBox />

            </Col>
            <Col md={9}>
              <Row className="mt-3">
                <Col md={12}>
                  <SearchBox />
                </Col>
                <Col md={12}>
                  <ResultBox />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <> <Container className="mt-4">
        <Row className="p-0">
      
          <Col md={9}>
            <Row className="mt-3">
              <Col md={12}>
                <SearchBox />
              </Col>
              <Col md={12}>
                <ResultBox />
              </Col>
              <Col md={3} className=" p-0">
              <ContactForm sendData={sendData} handleInputChange={handleInputChange} />

          </Col>
            </Row>
          </Col>
        </Row>
      </Container></>
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
