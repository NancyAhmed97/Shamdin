import { Box, Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import "react-multi-carousel/lib/styles.css";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
// MUI Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
// import { getData } from "../../pages/api/data";
import { useRouter } from "next/router";
import Link from "next/link";
import getData from '../../helpers/getData';
import { useTranslations } from 'next-intl';

const Index = (props) => {
  const isDesktop = useMediaQuery("(min-width:1210px)");
  const { locale } = useRouter();
  const [services, setServices] = useState([]);
  const t = useTranslations('general');

  useEffect(() => {
    let active = true;

    function getRows() {
      //setLoading(true);

      var filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'services', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }
          setServices(response.data.rows);

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
  return (
    <section className="services">
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >

        <Box pt={2}>
					<h4 className="block_Header">{t('realestateServices')}</h4>
					<p>{t('realestateServicesDescr')}</p>
				</Box>

        <hr />
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
          }}
        >
          {isDesktop ? (
            <>
              <Container className="m-0 p-0">
              <Grid container item md={12} spacing={2}>
                  <Grid item md={5} xs={5}>
                    
                    <Card
                          className="service_parag"
                      variant="outlined"
                      style={{ borderRadius: "10px", height: "100%" }}
                    >
                      {services && services[0] ?
                      <Box >
                          <Box my={3}>
                          <h5>
                            {services[0].title}
                          </h5>
                          </Box>

                          <Box                          
                          component="p"
                          dangerouslySetInnerHTML={createMarkup(
                            services[0].description.length >= 240
                              ? services[0].description.slice(0, 240) + "....."
                              : services[0].description
                          )}
                        >
                          
                        </Box>
                          
                          <Box style={{position: 'absolute', bottom: 0}}>
                          <Link href="/AboutUs" passHref>
                            <Button
                              variant="contained"
                              color="secondary"
                              className="service_btn"                              
                            >
                              {t('readMore')}
                            </Button>
                          </Link>
                          </Box>

                      </Box>
                      : null
                    }
                    </Card>
                  </Grid>
                  <Grid item md={7} xs={7}>
                    <Grid container item md={12} spacing={2}>
                      {services &&
                        services.slice(1).map((service, index) => {
                          return (
                            <Grid key={index} item md={4} >
                            
                            <Link href={`/Service/${service.id}`}>

                              <Grid className='service_root' p={2}>
                                <Grid>
                                <div className="circledDiv">
                                <img 
                                  style={{width: 30, height: 30}}
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                                </div>
                                </Grid>

                                <Grid>
                                <p
                                        style={{
                                          marginTop: "0px",
                                          marginBottom: "10px",
                                          fontWeight: "bold",
                                          fontSize: "1em",
                                          color: '#9c344c'
                                        }}
                                      >
                                        {service.title}
                                      </p>
                                </Grid>

                                <Grid>
                                <Box                          
                                component="p"
                                dangerouslySetInnerHTML={createMarkup(
                                  service.description.length >= 100
                                    ? service.description.slice(0, 100) + "..."
                                    : service.description
                                )}
                              ></Box>
                                
                                </Grid>
                              </Grid>
                           
                            </Link>
                            </Grid>
                          );
                        })}
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
             
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <Grid item xs={12}>
                  <Card
                    variant="outlined"
                    style={{ borderRadius: "10px", height: "230px" }}
                  >
                    <Box style={{ height: "100%" }}>
                      <Typography className="service_parag" variant="h2">
                        <p
                          style={{
                            margin: "15px 0px",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                        >
                          Shamdin Real Estate
                        </p>
                        <p
                          style={{
                            margin: "auto",
                            fontSize: ".9rem",
                            fontWeight: "bold",
                          }}
                        >
                          A big Turkish company, ranked in the forefront of real
                          estate companies in Turkey, headquartered in Istanbul,
                          has an office in Trabzon, has dealings in other cities
                          within Turkey, and has agents in several Arab cities.
                          In the course of its long care...
                        </p>
                        <Button
                          variant="contained"
                          color="secondary"
                          className="service_btn"
                          style={{
                            position: "absolute",
                            bottom: "10%",
                            left: "6%",
                          }}
                        >
                          Read More
                        </Button>
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px 5px",
                    }}
                  >
                    <Box
                      style={{
                        width: "33%",
                        flexGrow: 1,
                        minWidth: "200px",
                        position: "relative",
                      }}
                    >
                      <Card
                        className="service_root"
                        style={{
                          padding: "0px !important",
                          marginInline: "8px",
                        }}
                      >
                        <CardActionArea
                          className="service_root"
                          style={{ padding: "0px !important" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className="service_avtar"
                              >
                                <img
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                              </Avatar>
                            }
                          />
                          <CardContent
                            className=""
                            style={{ padding: "0px !important" }}
                          >
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                              variant="p"
                              color="primary"
                              component="p"
                            >
                              Shamdin Real Estate Is Honored
                            </p>
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontSize: "13px",
                              }}
                              variant="body2"
                              color=""
                              component="p"
                            >
                              Day After Day And Thanks To Our Competent And
                              Friendly Staff, The Testimonials Of Our Dear
                              Clients Increase And Reflect The Exceptional
                              Services Provided By Our Company,
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>

                    <Box
                      style={{
                        width: "33%",
                        flexGrow: 1,
                        minWidth: "200px",
                        position: "relative",
                      }}
                    >
                      <Card
                        className="service_root"
                        style={{
                          padding: "0px !important",
                          marginInline: "8px",
                        }}
                      >
                        <CardActionArea
                          className="service_root"
                          style={{ padding: "0px !important" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className="service_avatar"
                              >
                                <img
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                              </Avatar>
                            }
                          />
                          <CardContent
                            className=""
                            style={{ padding: "0px !important" }}
                          >
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                              variant="p"
                              color="primary"
                              component="p"
                            >
                              Shamdin Real Estate Is Honored
                            </p>
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontSize: "13px",
                              }}
                              variant="body2"
                              color=""
                              component="p"
                            >
                              Day After Day And Thanks To Our Competent And
                              Friendly Staff, The Testimonials Of Our Dear
                              Clients Increase And Reflect The Exceptional
                              Services Provided By Our Company,
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>

                    <Box
                      style={{
                        width: "33%",
                        flexGrow: 1,
                        minWidth: "200px",
                        position: "relative",
                      }}
                    >
                      <Card
                        className="service_root"
                        style={{
                          padding: "0px !important",
                          marginInline: "8px",
                        }}
                      >
                        <CardActionArea
                          className="service_root"
                          style={{ padding: "0px !important" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className="service_avatar"
                              >
                                <img
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                              </Avatar>
                            }
                          />
                          <CardContent
                            className=""
                            style={{ padding: "0px !important" }}
                          >
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                              variant="p"
                              color="primary"
                              component="p"
                            >
                              Shamdin Real Estate Is Honored
                            </p>
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontSize: "13px",
                              }}
                              variant="body2"
                              color=""
                              component="p"
                            >
                              Day After Day And Thanks To Our Competent And
                              Friendly Staff, The Testimonials Of Our Dear
                              Clients Increase And Reflect The Exceptional
                              Services Provided By Our Company,
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>

                    <Box
                      style={{
                        width: "33%",
                        flexGrow: 1,
                        minWidth: "200px",
                        position: "relative",
                      }}
                    >
                      <Card
                        className="service_root"
                        style={{
                          padding: "0px !important",
                          marginInline: "8px",
                        }}
                      >
                        <CardActionArea
                          className="service_root"
                          style={{ padding: "0px !important" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className="service_avatar"
                              >
                                <img
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                              </Avatar>
                            }
                          />
                          <CardContent
                            className=""
                            style={{ padding: "0px !important" }}
                          >
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                              variant="p"
                              color="primary"
                              component="p"
                            >
                              Shamdin Real Estate Is Honored
                            </p>
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontSize: "13px",
                              }}
                              variant="body2"
                              color=""
                              component="p"
                            >
                              Day After Day And Thanks To Our Competent And
                              Friendly Staff, The Testimonials Of Our Dear
                              Clients Increase And Reflect The Exceptional
                              Services Provided By Our Company,
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>

                    <Box
                      style={{
                        width: "33%",
                        flexGrow: 1,
                        minWidth: "200px",
                        position: "relative",
                      }}
                    >
                      <Card
                        className="service_root"
                        style={{
                          padding: "0px !important",
                          marginInline: "8px",
                        }}
                      >
                        <CardActionArea
                          className="service_root"
                          style={{ padding: "0px !important" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className="service_avatar"
                              >
                                <img
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                              </Avatar>
                            }
                          />
                          <CardContent
                            className=""
                            style={{ padding: "0px !important" }}
                          >
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                              variant="p"
                              color="primary"
                              component="p"
                            >
                              Shamdin Real Estate Is Honored
                            </p>
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontSize: "13px",
                              }}
                              variant="body2"
                              color=""
                              component="p"
                            >
                              Day After Day And Thanks To Our Competent And
                              Friendly Staff, The Testimonials Of Our Dear
                              Clients Increase And Reflect The Exceptional
                              Services Provided By Our Company,
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>

                    <Box
                      style={{
                        width: "33%",
                        flexGrow: 1,
                        minWidth: "200px",
                        position: "relative",
                      }}
                    >
                      <Card
                        className="service_root"
                        style={{
                          padding: "0px !important",
                          marginInline: "8px",
                        }}
                      >
                        <CardActionArea
                          className="service_root"
                          style={{ padding: "0px !important" }}
                        >
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className="service_avatar"
                              >
                                <img
                                  src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
                                  alt="img"
                                />
                              </Avatar>
                            }
                          />
                          <CardContent
                            className=""
                            style={{ padding: "0px !important" }}
                          >
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                              variant="p"
                              color="primary"
                              component="p"
                            >
                              Shamdin Real Estate Is Honored
                            </p>
                            <p
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontSize: "13px",
                              }}
                              variant="body2"
                              color=""
                              component="p"
                            >
                              Day After Day And Thanks To Our Competent And
                              Friendly Staff, The Testimonials Of Our Dear
                              Clients Increase And Reflect The Exceptional
                              Services Provided By Our Company,
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </section>
  );
};
export default Index;
