import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import getData from '../../helpers/getData';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useTranslations } from 'next-intl';

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//     width: "70%",
//     left: "15% !important",
//     color: "#5f6670",
//     background: "#f2f2f2",
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ));

// const MenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: "transparent",
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         //color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

export default function CustomizedMenus({ title }) {
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const t = useTranslations('general');

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const { locale } = useRouter();
	const [ jobs, setJobs ] = useState([]);
	const [ services, setServices ] = useState([]);
	const [ pages, setPages ] = useState([]);
	const [ news, setNews ] = useState([]);
	const [ about, setAbout ] = useState({});
	const [ realestates, setRealestates ] = useState([]);
  const [types, setTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);


	useEffect(
		() => {
			var active = true;

			//setLoading(true);
			var filtersArr = {
				langCode: locale,
				offset: 0,
				limit: 5
			};

			function getJobs() {
				getData(process.env.apiUrl + 'jobs', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}

						setJobs(response.data.rows);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getJobs();

			function getServices() {
				getData(process.env.apiUrl + 'services', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}

						setServices(response.data.rows);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getServices();

			function getPages() {
				getData(process.env.apiUrl + 'pages', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}

						setPages(response.data.rows);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getPages();

			function getAbout() {
				getData(process.env.apiUrl + 'pages/14', { filtersArr })
					.then((response) => {
						if (!active) {
							return;
						}

						setAbout(response.data);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getAbout();

			function getNews() {
				getData(process.env.apiUrl + 'news', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}
						setNews(response.data.rows);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getNews();

			function getRealestates() {
				getData(process.env.apiUrl + 'realestates', filtersArr)
					.then((response) => {
						if (!active) {
							return;
						}
						setRealestates(response.data.rows);
					})
					.catch(function(error) {
						//setLoading(false);
					});
			}

			getRealestates();

      function getCities() {
        //setLoading(true);
  
        var filtersArr = {
          langCode: locale,
          sortBy: 'id',
          sortType: 'desc'
        };
        
        getData(process.env.apiUrl + 'cities', filtersArr)
          .then(res => {
  
            if (!active) {
              return;
            }
            if (res.data.rows.length > 0) {
              setCities(res.data.rows);
            }
            //setLoading(false);
          })
          .catch(function (error) {
            //setLoading(false);          
          })
  
      };
  
      getCities();
      function getTypes() {
        //setLoading(true);
  
        var filtersArr = {
          langCode: locale,
          sortBy: 'id',
          sortType: 'desc'
        };
        
        getData(process.env.apiUrl + 'realestates-types', filtersArr)
          .then(res => {
  
            if (!active) {
              return;
            }
            if (res.data.rows.length > 0) {
  setTypes(res.data.rows);
            }
            //setLoading(false);
          })
          .catch(function (error) {
            //setLoading(false);          
          })
  
      };
      getTypes()
	  function getCategories() {
        //setLoading(true);
  
        var filtersArr = {
          langCode: locale,
		  offset:0,
		  limit:5
         
        };
        
        getData(process.env.apiUrl + 'categories', filtersArr)
          .then((res) => {
  
            if (!active) {
              return;
            }
	if(res.data.rows.length>0){
		setCategories(res.data.rows);
	}
          })
          .catch(function (error) {
            //setLoading(false);          
          })
  
      };
      getCategories()
	  
  
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
		<div>
			<Box
				onClick={handleClick}
				justifyContent="center"
				flexDirection="row"
				display="flex"
				style={{
					cursor: 'pointer',
					padding: '5px',
					color: '#5f6670',
					display: 'flex'
				}}
				className={Boolean(anchorEl) === true ? 'active_bg py-3' : 'py-3'}
			>
				<h5 className="mx-2 nav_link">{title}</h5>
				<ArrowDropDownIcon />
			</Box>
			{title === t('aboutUs') && (
				<Menu
					id="customized-menu "
					anchorEl={anchorEl}
					keepMounted
					className="menuu"
					open={Boolean(anchorEl)}
					onClose={handleClose}
					style={{ display: 'block' }}
				>
					<MenuItem className="w-10 p-4">
						<Box className="w-100">
							<Grid container sp acing={2} className="Citizenship_links">
								<Grid item md={2}>
									<h4 className="project_Header">{t('aboutUs')}</h4>
									{pages.map((page, index) => {
										return (
											<div key={index}>
												<Box my={2} key={page.id}>
													<Link href={`/cpages/${page.id}`}>
														<label className="project_Header">{page.title}</label>
													</Link>
												</Box>
											</div>
										);
									})}
								</Grid>
								<Grid item md={3}>
									<h4 className="project_Header">{t('services')}</h4>
									{services.map((service, index) => {
										return (
											<Box my={2} key={service.id}>
												<Link href={`/Service/${service.id}`}>
													<label className="project_Header">{service.title}</label>
												</Link>
											</Box>
										);
									})}
								</Grid>
								<Grid item md={2}>
									<h4 className="project_Header">{t('humanResource')}</h4>

									<p className="d-flex justify-content-between mt-3">
										<Link href="/free-jobs">
											<label className="project_Header">Job Vacancies</label>
										</Link>
									</p>
									<p className="d-flex justify-content-between ">
										<Link href="/employment-application">
											<label className="project_Header">Application Form</label>
										</Link>
									</p>
									{/* <p  className="d-flex justify-content-between ">Our Vision For Employment</p> */}
								</Grid>
								
                <Grid item md={5} container columnSpacing={5}>
										{about.elment_trans ? (
											<Grid item md={8} className="">
												<Box mb={2} style={{ whiteSpace: 'pre-line'}}>
													<h3 className="project_Header">{about.elment_trans[0].title}</h3>
												</Box>

												<Box my={2} style={{ whiteSpace: 'pre-line'}}>
													<p
														className="project_Header"
														dangerouslySetInnerHTML={createMarkup(
															about.elment_trans[0].description
														)}
													/>
												</Box>

												{/* <ListItemText    /> */}
												<Box my={2}>
													<Button variant="contained" className="project_btn">
														<Link href="/Citizenship" passHref>
															{t('moreDetails')}
														</Link>
													</Button>
												</Box>
											</Grid>
										) : null}

										<Grid item md={4} >
											<img 
                      width={150}
                      src="/nav-banner-img (1).png" alt="navbrImg" 
                      />
                    </Grid>
								</Grid>
							</Grid>
						</Box>
					</MenuItem>
				</Menu>
			)}
			{title === t('turkishCitizenship') && (
				<Menu
					id="cityzien_customized-menu "
					anchorEl={anchorEl}
					keepMounted
					className="menuu  "
					open={Boolean(anchorEl)}
					onClose={handleClose}
					style={{ display: 'block' }}
				>
					<Box sx={{ flexGrow: 1 }} className="px-3">
						<Grid container spacing={2} className="Citizenship_links">
							<Grid item xs={3}>
								<p className="dropdown_nav_link"> Turkish Citizenship Articles </p>
							</Grid>
							<Grid item xs={3}>
								<p className="dropdown_nav_link"> Turkish Citizenship News </p>
							</Grid>
							<Grid item xs={3} className="dropdown_nav_link">
								<Link href="/faq-city" passHref>
									Turkish Citizenship Questions
								</Link>
							</Grid>
							<Grid item xs={3} className="dropdown_nav_link">
								<Link href="/Citizenship" passHref>
									Encyclopedia of Turkish citizenship
								</Link>
							</Grid>
							<Grid item xs={12}>
								<div className="lastBlog_block">
									<ListItemText
										color="primary"
										style={{
											color: '#ec94b4'
										}}
										primary={pages[0] && pages[0].title}
									/>
									<p dangerouslySetInnerHTML={createMarkup(pages[0] && pages[0].description)} />
									{/* <ListItemText    /> */}
									<div className="header-btn">
										<Link href={`/galaxy-tower/${pages[0] && pages[0].id}`}>For more details</Link>
									</div>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Menu>
			)}
			{title === t('turkeyProperties') && (
				<Menu
					id="cityzien_customized-menu "
					anchorEl={anchorEl}
					keepMounted
					className="menuu  "
					open={Boolean(anchorEl)}
					onClose={handleClose}
					style={{ display: 'block' }}
				>
					<Box sx={{ flexGrow: 1 }} className="px-3">
						<Grid container spacing={2} className="Citizenship_links">
					  {cities&&cities.map((city,index)=>{
    return(
<Grid item xs={3} key={index}>
<p className="mx-3 dropdown_nav_link" >{city.name}</p> 
{types&&types.map((type,index)=>{
  return(
    <Link key={index} href={`/for-resale-turkey/${city.id}/${type.id}`}>
<p>{type.title}</p>
</Link>
    )
})}
      </Grid>

    )
  })}
							<Grid item xs={12}>
								<div className="lastBlog_block">
									<ListItemText
										color="primary"
										style={{
											color: '#ec94b4'
										}}
										primary={pages[0] && pages[0].title}
									/>
									<p dangerouslySetInnerHTML={createMarkup(pages[0] && pages[0].description)} />
									{/* <ListItemText    /> */}
									<div className="header-btn">
										<Link href={`/galaxy-tower/${pages[0] && pages[0].id}`}>For more details</Link>
									</div>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Menu>
			)}
			{title === t('blogs') && (
				<Menu
					id="customized-menu "
					anchorEl={anchorEl}
					keepMounted
					className="menuu  "
					open={Boolean(anchorEl)}
					onClose={handleClose}
					style={{ display: 'block' }}
				>
					<MenuItem className="w-100">
						<Box className="w-100">
							<Grid
								container
								sp
								acing={2}
								className={locale === 'ar' ? 'Citizenship_links mx-5' : 'Citizenship_links'}
							>
								<Grid item xs={4}>
									<ListItemText
										color="primary"
										style={{ color: '#ec94b4', fontWeight: '700' }}
										primary={t('news')}
										className="dropdown_nav_link"
									/>
											{categories&&categories.map((category,index)=>{
										return(
											<>
<Link href={`/ownership-turkey/${category.id}`}><p className="ctegoury_nav_item">{category.title}</p>
</Link>
											</>
										)
									})}
								</Grid>
								<Grid item xs={4}>
									<ListItemText
										color="primary"
										style={{ color: '#ec94b4' }}
										primary={t('blogs')}
										className="dropdown_nav_link"
									/>
									{categories&&categories.map((category,index)=>{
										return(
											<div  key={index}>
<Link href={`/categoryOfarticales/${category.id}`} ><p className="ctegoury_nav_item">{category.title}</p>
</Link>
											</div>
										)
									})}
								</Grid>

								<Grid item xs={4}>
									<div className="d-flex h-100">
										<div className="about_Blog_block">
											<ListItemText
												color="primary"
												style={{
													color: '#ec94b4'
												}}
												primary={pages[0] && pages[0].title}
												className="dropdown_nav_link"
											/>
											<p
												dangerouslySetInnerHTML={createMarkup(pages[0] && pages[0].description)}
											/>
											{/* <ListItemText    /> */}
											<div className="header-btn">
												<Link href="/Citizenship" passHref>
													For more details
												</Link>
											</div>
										</div>
										<div className="aboutItim_img">
											<img src="/nav-banner-img (1).png" alt="navbrImg" />
										</div>
								
									</div>
								</Grid>
							</Grid>
						</Box>
					</MenuItem>
				</Menu>
			)}
		</div>
	);
}
