import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VisibilityIcon from '@mui/icons-material/Visibility';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router'; // import { getData } from "../../pages/api/data";
import { Col, Row, Container } from 'react-bootstrap';
import getData from '../../helpers/getData';
import { useTranslations } from 'next-intl';

const Index = () => {
	const isDesktop = useMediaQuery('(min-width:1125px)');
	const [ blogs, setBlogs ] = useState([]);
	const [ news, setNews ] = useState([]);
	const { locale } = useRouter();
	const t = useTranslations('general');

	useEffect(
		() => {
			let active = true;

			var filtersArr = {
				langCode: locale,
				sortBy: 'id',
				sortType: 'desc'
			};

			function getBlogs() {
				//setLoading(true);

				getData(process.env.apiUrl + 'blogs', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}

						setBlogs(response.data.rows);
						//setLoading(false);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getBlogs();

			function getNews() {
				//setLoading(true);

				getData(process.env.apiUrl + 'news', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}

						setNews(response.data.rows);
						//setLoading(false);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getNews();

			return () => {
				active = false;
			};
		},
		[ locale ]
	);

	function createMarkup(data) {
		return { __html: data };
	}

	return (
		<section className="blogs">
			<Container>
				<Box pt={2}>
					<h4 className="block_Header">{t('siteBlog')}</h4>
					<p>{t('siteBlogDescr')}</p>
				</Box>

				<hr />
				{isDesktop ? (
					<Container>
						<Grid item md={12} container spacing={3}>
							<Grid item md={5}>
								<Link passHref href={`/has_realState/news/${news && news[0] && news[0].id}`}>
									<Card variant="outlined" style={{ borderRadius: '10px', height: '98%' }}>
										<Box
											className="blog_boxImage"
											style={{
												backgroundImage: `url(${news && news[0] && news[0].mainImage})`,
												height: '591px'
											}}
										>
											<span className="blog_span">{t('news')}</span>
											<Typography
												className="blog_parag"
												variant="h2"
												dangerouslySetInnerHTML={createMarkup(news[0] && news[0].title)}
											/>
										</Box>
									</Card>
								</Link>
							</Grid>

							<Grid item md={3}>
								{news.slice(1, 3).map((newDes, index) => {
									return (
										<Link
											passHref
											href={`/has_realState/news/${newDes && newDes[0] && newDes[0].id}`}
											key={index}
										>
											<Card
												variant="outlined"
												style={{
													borderRadius: '10px',
													marginBottom: '.7rem'
												}}
											>
												<Box
													className="boxImagesmall"
													style={{
														backgroundImage: `url(${newDes.mainImage === null
															? '/logoo.svg'
															: newDes.mainImage})`
													}}
												>
													<span className="blog_span">{t('news')}</span>
													<h5 className="blogs_paragsmall">
														{newDes.category}
													</h5>
												</Box>
												<Box
													style={{
														backgroundColor: '#eee',
														height: '143.978px',
														padding: '12px'
													}}
												>
													<h6 className="project_Header" mt={2}>
														{' '}
														{newDes.title}{' '}
													</h6>

													<p
														dangerouslySetInnerHTML={createMarkup(
															newDes.description.length >= 60
																? newDes.description.slice(0, 60) + '.....'
																: newDes.description
														)}
													/>
													<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
														<Box>
															<EventAvailableIcon size="small" />
															<label className="dateFont">{newDes.created_at}</label>
														</Box>
														<Box>
															<VisibilityIcon size="small" />
															<label className="dateFont">{newDes.publish}</label>
														</Box>
													</Box>
												</Box>
											</Card>
										</Link>
									);
								})}
							</Grid>

							<Grid item md={4}>
								{blogs.slice(0, 4).map((blog, index) => {
									blog.mainImage;
									return (
										<Grid 
										item 
										md={12} 
										container 
										mb={2}>
											
											<Grid item md={5}>
												<Link passHref href={`/has_realState/articals/${blog.id}`} key={index}>
													<Box
														style={{
															backgroundImage: `url(${blog.mainImage === null
																? '/logoo.svg'
																: blog.mainImage})`,
															height: '132px',
															
														}}
													>
														<span className="blog_span">{t('blogs')}</span>
													</Box>
												</Link>
											</Grid>

											<Grid item md={7} p={1}
												style={{
													background: '#eee',
												}}
											>
												<div className="blog_card_container">
													<p className="blog_title">{blog.title}</p>
													<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
														<Box>
															<EventAvailableIcon size="small" />
															<label className="dateFont">{blog.created_at}</label>
														</Box>
														<Box>
															<VisibilityIcon size="small" />
															<label className="dateFont">{blog.publish}</label>
														</Box>
													</Box>
												</div>
											</Grid>

										</Grid>
									);
								})}
							</Grid>
						</Grid>
					</Container>
				) : (
					<Container>
						<Grid item md={12} container spacing={3}>
						<Grid item md={5}>
								<Link passHref href={`/has_realState/news/${news && news[0] && news[0].id}`}>
									<Card variant="outlined" style={{ borderRadius: '10px', height: '100%' }}>
										<Box
											className="blog_boxImage"
											style={{
												backgroundImage: `url(${news && news[0] && news[0].mainImage})`,
												height: '230px'
											}}
										>
											<span className="blog_span">{t('news')}</span>
											<Typography
												className="blog_parag"
												variant="h2"
												dangerouslySetInnerHTML={createMarkup(news[0] && news[0].title)}
											/>
										</Box>
									</Card>
								</Link>
							</Grid>

							<Grid item md={4}>
								{blogs.slice(0, 4).map((blog, index) => {
									return (
										<Row key={index}>
											<Col xs={5} style={{ paddingRight: '0' }}>
												<Link passHref href={`/has_realState/articals${blog.id}`}>
													<Box
														style={{
															backgroundImage: `url(${blog.mainImage === null
																? '/logoo.svg'
																: blog.mainImage})`,
															height: '132px',
															marginBottom: '12px',
															borderTopLeftRadius: '7px',
															borderBottomLeftRadius: '7px',
															marginTop: '10px'
														}}
													>
														<span className="blog_span">Articles</span>
													</Box>
												</Link>
											</Col>
											<Col
												xs={7}
												style={{
													background: '#eee',
													padding: '0',
													marginBottom: '12px',
													paddingRight: '10px',
													paddingBottom: '7px',
													borderTopRightRadius: '7px',
													marginTop: '10px',
													borderBottomRightRadius: '7px'
												}}
											>
												<div className="blog_card_container">
													<p className="blog_title">{blog.title}</p>
													<div className="d-flex justify-content-between">
														<Typography style={{ display: 'flex', fontSize: '14px' }}>
															<EventAvailableIcon size="small" />
															{blog.created_at.slice(0, 10)}
														</Typography>
														<Typography style={{ display: 'flex', fontSize: '14px' }}>
															<VisibilityIcon size="small" />
															{blog.publish}
														</Typography>
													</div>
												</div>
											</Col>
										</Row>
									);
								})}
							</Grid>
							<Grid item md={3}>
								{news.slice(1, 3).map((newDes, index) => {
									return (
										<Link passHref href={`/has_realState/news/${newDes.id}`} key={index}>
											<Card
												variant="outlined"
												style={{
													borderRadius: '10px',
													marginBottom: '.7rem'
												}}
											>
												<Box
													className="boxImagesmall"
													style={{
														backgroundImage: `url(${newDes.mainImage === null
															? '/logoo.svg'
															: newDes.mainImage})`
													}}
												>
													<span className="blog_span">{t('news')}</span>
													<Typography className="blogs_paragsmall" variant="h2">
														{newDes.category}
													</Typography>
												</Box>
												<Box
													style={{
														backgroundColor: '#eee',
														height: '183.978px',
														padding: '12px'
													}}
												>
													<Typography
														style={{
															width: '100%',
															fontSize: '.9rem',
															fontWeight: 'bold',
															padding: '5px'
														}}
														className="hover"
													>
														{newDes.title}
													</Typography>
													<Typography
														style={{
															margin: '10px 10px 20px 10px',
															fontSize: '.8rem',
															fontWeight: 'bold'
														}}
														dangerouslySetInnerHTML={createMarkup(
															newDes.description.length >= 100
																? newDes.description.slice(0, 100) + '.....'
																: newDes.description
														)}
													/>
													<Box
														style={{
															display: 'flex',
															justifyContent: 'space-between',
															padding: '5px'
														}}
													>
														<Typography
															style={{
																display: 'flex',
																fontSize: '14px'
															}}
														>
															<EventAvailableIcon size="small" />
															{newDes.created_at}
														</Typography>
														<Typography
															style={{
																display: 'flex',
																fontSize: '14px'
															}}
														>
															<VisibilityIcon size="small" />
															{newDes.publish}
														</Typography>
													</Box>
												</Box>
											</Card>
										</Link>
									);
								})}
							</Grid>
						</Grid>
					</Container>
				)}
			</Container>
		</section>
	);
};
export default Index;
