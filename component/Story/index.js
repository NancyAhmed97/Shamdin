import React from 'react';
import { Box, Container, Link, Typography, Grid, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import 'react-multi-carousel/lib/styles.css';
import ModalCom from './Modal';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const Index = (props) => {
	const { locale } = useRouter();
	const t = useTranslations('general');

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1250 },
			items: 8,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1249, min: 900 },
			items: 8,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 899, min: 0 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

	const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
		const { carouselState: { currentSlide } } = rest;

		return (
			<div
				className="carousel-button-group mt-2"
				style={{
					position: 'absolute',
					top: '1%',
					right: locale === 'ar' ? '87.5%' : '2%'
				}}
			>
				<div className="arrowRight" style={{ right: '20px', position: 'absolute', top: '0' }}>
					<ArrowRightAltIcon
						className={(currentSlide === 0 ? 'disable' : '', 'arrow')}
						style={{ transform: ' rotateZ( 360deg)' }}
						onClick={() => previous()}
					/>
				</div>
				<div className="leftRight" style={{ right: '75px', position: 'absolute', top: '0' }}>
					<ArrowRightAltIcon
						className="arrow"
						style={{ transform: ' rotateZ( -180deg)' }}
						onClick={() => next()}
					/>
				</div>
			</div>
		);
	};

	return (
		<section className=" stories">
			<Container maxWidth="lg" style={{ position: 'relative', padding: '10px 0px' }}>
				<Box pt={2}>
					<h4 className="block_Header">{t('stories')}</h4>
				</Box>
				<div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={false}
						responsive={responsive}
						ssr={false} // means to render carousel on server-side.
						infinite={false}
						// autoPlay={props.deviceType !== "mobile" ? true : false}
						// autoPlaySpeed={1500}
						autoPlay={false}
						keyBoardControl={true}
						transitionDuration={0}
						containerClass="carousel-container"
						removeArrowOnDeviceType={[ 'tablet', 'mobile' ]}
						deviceType={props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px project-slider"
						arrows={false}
						renderButtonGroupOutside={true}
						customButtonGroup={<ButtonGroup />}
						//renderButtonGroupOutside={true}
					>
						<ModalCom />
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
export default Index;
