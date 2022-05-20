import React, { useEffect, useState } from "react";
import Playlists from "../../component/Channels/Playlists";
import Slider from "../../component/Channels/Slider";
import MainVideo from "../../component/Channels/MainVideo";
import NeedHelp from "../../component/common/NeedHelp";
import CitizenshipBlock from "../../component/common/CitizenshipBlock";
import "react-multi-carousel/lib/styles.css";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { Col, Row, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslations } from 'next-intl';
import CitizenshipInfoBox from "../../component/citizenship/CitizenshipInfoBox";
import ContactForm from "../../component/ContactUs/ContactForm";
import postData from '../../helpers/postData';
import getData from '../../helpers/getData';

const Index = (props) => {
  const isDesktop = useMediaQuery("(min-width:940px)");
  const { locale } = useRouter();
  const [channels, setChannels] = useState([]);
  const router = useRouter();
  const { params = [] } = router.query;
  const t = useTranslations('general');

	const [ errMsg, setErrMsg ] = useState('');  
	const [ values, setValues ] = useState({});

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
   
  useEffect(() => {
    let active = true;

    function getRows() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'channels', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setChannels(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getRows();

    return () => {
      active = false;
    };
    
  }, [locale]);

  
  if (params.length >0) {
    const id = channels.find((element) => element.id === parseInt(params[0]));
    const playlistVedio = [];
    playlistVedio.push(
      channels.filter((element) => element.id !== parseInt(params[0]))
    );
    (playlistVedio);
    
    return (
      
        <Container className="mt-4">
          {isDesktop ? (
            
              <Row>
                <Col xs={3}>
                <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
                <CitizenshipInfoBox />

                 {/*  <NeedHelp  /> */}
                  {/* <CitizenshipBlock /> */}
                </Col>
                <Col xs={9}>
                  {/* <Slider /> */}
                  <MainVideo channels={id} />
                  <Playlists channels={playlistVedio && playlistVedio} />
                </Col>
              </Row>
              
          ) : (
            <Grid item xs={12}>
            {/* <Slider /> */}
            <MainVideo channels={id} />
              <Playlists channels={playlistVedio && playlistVedio} />
              <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
          </Grid>
          )}
        </Container>
        
    );
  } else {
    return (
     
        <Container className="mt-4">
          {isDesktop ? (
           
           <Row>
           <Col xs={3} >
           <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
           <CitizenshipInfoBox />
             {/* <NeedHelp />
             <CitizenshipBlock /> */}
           </Col>
           <Col xs={9}>
             {/* <Slider /> */}
             <MainVideo channels={channels[0]} />
             <Playlists channels={channels} />
           </Col>
         </Row>
          ) : (
            
            <Grid item xs={12}>
            {/* <Slider /> */}
            <MainVideo channels={channels[0]} />
              <Playlists channels={channels} />
            <NeedHelp />
          </Grid>
          )}
        </Container>
    );
  }
};
export default Index;

export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}