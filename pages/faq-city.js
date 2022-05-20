import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import Collapse from "../component/Collapsed/Colapse";
import "react-multi-carousel/lib/styles.css";

import useMediaQuery from "@mui/material/useMediaQuery";
import SubMobile from "../component/Header/Mobile/SubMobile";
import axios from "axios";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import { useTranslations } from 'next-intl';
import CitizenshipInfoBox from "../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../component/ContactUs/ContactForm";
import postData from '../helpers/postData';
import getData from '../helpers/getData';


const Index = () => {
  
  const isDesktop = useMediaQuery("(min-width:940px)");
  const [searchResult, setSearchResult] = useState([]);
  const [question, setQuestion] = useState([]);
  const [categories, setCategories] = useState([]);
  
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


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  useEffect(() => {

    axios({
      method: "get",
      url: `${process.env.apiUrl}faqs?langCode=${locale}`,
    }).then((res) => {
      setQuestion(res.data.rows);
    });

    axios({
      method: "get",
      url: `${process.env.apiUrl}faqs-categories?langCode=${locale}`,
    }).then((res) => {
      setCategories(res.data.rows);
    });

  }, []);

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

  function search(keyword) {

    getData(process.env.apiUrl + 'search', {
      title: keyword,
      modelName: 'News',
      langCode: locale

    })
      .then(res => {
        setSearchResult(res.data.rows);
      })
      .catch(err => {
        console.log(err);
      });
   
  }

  return (
    <div>

      <Container>
        <Grid xs={12} md={12} container columnSpacing={2} >
          {isDesktop ? (
            <Grid item xs={12} md={3}  mt={3}>
              
              <ContactForm sendData={sendData} handleInputChange={handleInputChange} />

              <CitizenshipInfoBox />

            </Grid>
          ) : (
            ""
          )}

          <Grid item xs={12} md={9}>
            <Box
              style={{
                padding: "20px",
                paddingTop: "30px",
              }}
              className="faq_city"
            >
              <Typography className="faq_Header" variant="h4">
              {t('faqs')}
              </Typography>

              <div
                style={{
                  marginInline: "0px",
                  marginBlock: "10px",
                  fontSize: ".9rem",
                  textAlign: ` left`,
                  color: "#5f6670",
                  lineHeight: "1.5",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                هنا هنحتاج نجيبها من api/cpages 
              </div>
              <hr />
              <Typography
                className="faq_Header"
                style={{
                  textAlign: "center",
                  margin: "24px 0px",
                }}
                variant="h4"
              >
                {t('howCnHlpU')}
              </Typography>
              <div className="search_box">
                <input
                  style={{
                    width: "80%",
                    background: "#eee",
                    padding: "1rem",
                    margin: "auto",
                    display: "block",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                  }}
                  onChange={(e) => {
                    search(e.target.value);
                   
                  }}
                />
                {searchResult.length > 0 ? (
                  <ul id="autoComplete_list">
                    {searchResult.map((item, index) => {
                      return (
                        <li
                          data-id="148"
                          className="autoComplete_result"
                          key={index}
                          onClick={()=>{
                            router.push({pathname:`/faq/${item.id}`})                          }}
                        >
                          {item.elment_trans[0]&&item.elment_trans[0].title}
                        </li>
                      );
                    })}
                  </ul>
                ): null}
              </div>
              <Typography
                style={{
                  textAlign: "center",
                  margin: "10px 0px",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                {t('brwsBlwTopic')}
              </Typography>
            </Box>
            <Box
              style={{
                padding: "20px",
                paddingTop: "30px",
              }}
              className="faq_city"
            >
              <Typography className="faq_Header" variant="h4">
                {t('faqs')}
                
              </Typography>
              <hr />
              <Container>
                <Row>
                {categories &&
                    categories.map((categoury, index) => {                  
                      return(
                        <Col md={6} key={index}>
                                  <Typography
                            style={{
                              color: '#9c344c',
                              margin: "33px 0px",
                              fontSize: "1.25rem",
                            }}
                            variant="h5"
                          >
                            {categoury.title}
                          </Typography>
                          {question &&
                            question.map((question, index) => {
                              return (
                                <>
                                  <Grid
                                    item
                                    key={index}
                                    xs={12}
                                    md={12}
                                    style={{
                                      display: "flex",
                                      color: "#ec94b4",
                                    }}
                                  >
                                    <Collapse
                                      label={question.question}
                                      text={question.answer}
                                    />
                                  </Grid>
                                </>
                              );
                            })}


                    </Col>
                      )
                  })}
                </Row>
              </Container>
              {/* <Typography
                className="faq_Header"
                style={{
                  textAlign: `left`,
                  margin: "10px 0px",
                  fontSize: "16px",
                }}
                variant="h5"
              >
                <Grid
                  xs={12}
                  md={6}
                  style={{ display: "flex", color: "#ec94b4" }}
                >
                  {categories &&
                    categories.map((categoury, index) => {
                      categoury.id;
                      return (
                        <Grid
                          item
                          xs={6}
                          md={6}
                          style={{ display: "" }}
                          key={index}
                        >
                          <Typography
                            style={{
                              textAlign: `left`,
                              margin: "33px 0px",
                              fontSize: "1.25rem",
                            }}
                            variant="h5"
                          >
                            {categoury.title}
                          </Typography>
                          {question &&
                            question.map((question, index) => {
                              return (
                                <>
                                  <Grid
                                    item
                                    key={index}
                                    xs={12}
                                    md={12}
                                    style={{
                                      display: "flex",
                                      color: "#ec94b4",
                                    }}
                                  >
                                    <Collapse
                                      label={question.question}
                                      text={question.answer}
                                    />
                                  </Grid>
                                </>
                              );
                            })}
                        </Grid>
                      );
                    })}
                </Grid>
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
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
