import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import InfoCard from './InfoCard';
import { makeStyles } from '@mui/material/styles';
import 'react-multi-carousel/lib/styles.css';
import { Col, Row } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

const Contact = () => {
	const t = useTranslations('general');

	return (
		<div className="contact">
			<Container
				maxWidth="lg"
				style={{
					position: 'relative',
					paddingBottom: '25px'
				}}
			>
				<Box style={{ paddingTop: '30px' }}>
					<Typography className="contact_Header" variant="h4">
						{t('contactUs')}
					</Typography>
					<Typography
						style={{
							marginInline: '0px',
							marginBlock: '10px',
							width: '80%'
						}}
					>
						{t('plsVstOurBrnch')}
					</Typography>
					<Divider />
				</Box>

				<Typography variant="h6" className="contact__subtitle mt-3">
					{t('siteOffices')}
				</Typography>

				<Container style={{ margin: '0', padding: '0' }}>
					<Row>
						<Col md={6}>
							<InfoCard />
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
};
export default Contact;
