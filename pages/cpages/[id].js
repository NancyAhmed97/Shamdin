import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import getData from '../../helpers/getData';
import { Col, Container, Row } from 'react-bootstrap';
import NeedHelp from '../../component/common/NeedHelp';
import Card from "@mui/material/Card";
import { Box } from '@mui/system';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import CitizenshipInfoBox from '../../component/citizenship/CitizenshipInfoBox';
import ContactForm from '../../component/ContactUs/ContactForm';

export default function Index() {

	const router  = useRouter();
	const {locale} = router;

    const t = useTranslations('general');
	
	const [row, setRow] = useState('')
	const isDesktop = useMediaQuery("(min-width:1125px)");
	
	useEffect(() => {
		let active = true;

		//setLoading(true);
  var filtersArr = {
	langCode: locale,

  };

  function getRow() {
	
	getData(process.env.apiUrl + 'pages/'+router.query.id, filtersArr)
	  .then(response => {
		if (!active) {
		  return;
		}

		setRow(response.data);

	  })
	  .catch(function (error) {
		//setLoading(false);          
	  })

  };

  getRow();
	}, [router.query.id])


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
	
	  {isDesktop  ? (
		<>
		<Grid item container md={12} columnSpacing={2} mt={1}>

			<Grid item md={3} mt={1}>
					<ContactForm sendData={sendData} handleInputChange={handleInputChange} />
					<CitizenshipInfoBox />
			</Grid>

		  	<Grid item md={9}>
		  
				<Box p={2} className="about_backBlock">
					<p className="about_Header" variant="h4">
						{/* {console.log('files', row ? row.files[0].imgUrl : 'no files' )} */}
						{row ? row.elment_trans[0].title : null}
					</p>
				
				</Box>


				<div className="about_hero"  >


				<Box>
					{row ? 
						<img
							style={{ width: "100%", borderRadius: "10px" }}
							src={row.files[0].imgUrl}
							alt="img"
							className='cpage_img'
						/>: 
						null
					}
					
						<Box mt={3}
							className="terms_parag"
							dangerouslySetInnerHTML={createMarkup(
								row ? row.elment_trans[0].description : ''
							)}>
							
			</Box>

				</Box>

	 		</div>

		  </Grid>
		</Grid>
		</>
	  ) : (
		<>
		  <Grid item xl={12}>
			<Box
			  style={{
				padding: "20px",
				paddingTop: "30px",
			  }}
			  className="about_backBlock"
			>
			  <Typography className="about_Header" variant="h4">
				
{row ? row.elment_trans[0].title : null}
			  </Typography>
			
			</Box>
			<div className="about_hero">

	<Box>
		{row ? 
	  <img
		style={{ width: "100%", borderRadius: "10px" }}
		src={row.files[0].imgUrl}
		alt="img"
	  />
	  : null }
		 
	  
	  <Typography
		className="terms_parag"
		variant="h2"
		dangerouslySetInnerHTML={createMarkup(
			row ? row.elment_trans[0].description : null
		)}
	  ></Typography>
	</Box>
			</div>
			<ContactForm sendData={sendData} handleInputChange={handleInputChange} />

		  </Grid>
		</>
	  )}</div>
  )
}
 

export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}
