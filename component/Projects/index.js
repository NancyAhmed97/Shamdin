import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RoomIcon from "@mui/icons-material/Room";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "react-multi-carousel/lib/styles.css";
// import "../OwnershipTurkey/projectIndex.css";
import Link from "next/link";
//import { process.env.apiUrl } from "../../pages/api/data";
import { useRouter } from "next/router";
import getData from '../../helpers/getData';

import { useTranslations } from 'next-intl';

const Index = (props) => {
  const [realStates, setRealStates] = useState([]);
  const { locale } = useRouter();
  const t = useTranslations('general');

  useEffect(() => {
    let active = true;

    function getRows() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'realestates', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setRealStates(response.data.rows);
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

  function createMarkup(data) {
    return { __html: data };
  }
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div
        className="carousel-button-group"
        style={{
          position: "absolute",
          top: "2%",
          right: locale === "ar" ? "88%" : "2%"
        }}
      >
        
        <div
          className="arrowRight"
          style={{ right: "20px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className={(currentSlide === 0 ? "disable" : "", "arrow")}
            style={{ transform: " rotateZ( 360deg)" }}
            onClick={() => previous()}
          />
        </div>
        <div
          className="leftRight"
          style={{ right: "75px", position: "absolute", top: "0" }}
        >
          <ArrowRightAltIcon
            className="arrow"
            style={{ transform: " rotateZ( -180deg)" }}
            onClick={() => next()}
          />
        </div>

      </div>
    );
  };


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <section className="Projects">
     
      <Box pt={2}>
        <h4 className="block_Header">           
          {t('featuredProjects')}
        </h4>
        <p>
          {t('featuredProjectsDescr')}
        </p>
      </Box>

      <hr/>
      
      <div dir="ltr">
      <Carousel responsive={responsive} 
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          className="my-4"

>
{realStates?realStates.map((realState,index)=>{
          return(
            <Link href={`/galaxy-tower/${realState.id}`} key={index} passHref>
                    <Card className="project_root mx-1" 
                    style={{textAlign: locale == 'ar' ? 'right' : 'left'}}>
                      <CardActionArea className="project_root ">
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="200"
                          style={{objectFit: 'fill'}}
                          image={
                            realState.files && realState.files.length > 0
                              ? realState && realState.files[0].imgUrl
                              : "/logoo.svg"
                          }                          
                          title="Contemplative Reptile"
                        />
                        <CardContent className="peoject_card-body"
                        /* style={{flexDirection: 'column', justifyContent: 'flex-end'}} */
                        
                        >
                        <Grid item md={12} mt={2}>
                        <h6 className='project_Header' mt={2}> {realState.title} </h6>
                        </Grid>
                          
                          <Grid 
                          item 
                          md={12} 
                          mt={2}
                          container
                          >
                            <Grid item md={6}>
                              <RoomIcon className='text_grey' />                            
                                <label className="project_specifications">{realState.municipality} , {realState.city}</label>
                            </Grid>
                            <Grid item md={6}>
                              <HomeIcon className='text_grey' />                            
                              <label className="project_specifications">{realState.type}</label>
                            </Grid>
                          </Grid>
                          
                        <Grid item md={12} mt={2}>
                        <Box
                          
                          component="p"
                          dangerouslySetInnerHTML={createMarkup(
                            realState.description.length >= 240
                              ? realState.description.slice(0, 240) + "....."
                              : realState.description
                          )}
                        ></Box>
                        </Grid>
                        
                        <Grid item mt={2} md={12}>
                            <p>
                            {t('startAt')}
                            </p>                          
                            <label className="project_specifications">
                            {localStorage.getItem("currencyRate")?localStorage.getItem("currencyRate")*realState.regularPrice:realState.regularPrice}
                            </label>

                            
                         
                        </Grid>
                            {/* {realState.features.map((feature) => {
                              return (
                                <>
                                  {feature.elment_trans.map((element) => {
                                    return <>{element.title} </>;
                                  })}
                                </>
                              );
                            })} */}  
                            
                        </CardContent>
                      </CardActionArea>
                    </Card>
            </Link>
          )
        })
      :
      <div />
      }

</Carousel>
      </div>
      <Link href="/for-resale-turkey" passHref>
        <Button variant="contained" className="project_btn">
          {t('viewAllFeaturedProjects')}
        </Button>
      </Link>
    </section>
  );
};
export default Index;
