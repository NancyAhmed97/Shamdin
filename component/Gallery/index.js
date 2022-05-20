import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import getData from '../../helpers/getData';
import { useTranslations } from 'next-intl';

const Index = () => {
  const isDesktop = useMediaQuery("(min-width:940px)");
  const [cities, setCities] = useState([]);
  const [citiesName, setCitiesName] = useState([]);
  const { locale } = useRouter();
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
      
      getData(process.env.apiUrl + 'cities', filtersArr)
        .then(res => {

          if (!active) {
            return;
          }
          if (res.data.rows.length > 0) {
            setCities(res.data.rows.slice(0, 1));
            setCitiesName(res.data.rows.slice(1));
          }
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
  
  return (
    <section className="gallery">
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >

        <Box p={3}>
					<h4 className="block_Header">{t('turkeyProperties')}</h4>
					
          <hr/>
				</Box>
        
        {isDesktop ? (
          <>
            <Container>
              <Grid item container md={12} spacing={1}>
                {cities.map((city,index) => {
                  return (
                    <Grid item md={4} key={index}>
                      <Link href={`/SubTurkey/${city.id}`}>
                        <Card
                          variant="outlined"
                          style={{ borderRadius: "10px" }}
                        >
                          <Box
                            className="boxImage"
                            style={{
                              backgroundImage: `url(${
                                city.files[0]
                                  ? city.files[0].imgUrl
                                  : "/logoo.svg"
                              })`,
                            }}
                          >
                            <Typography className="gallery_parag" variant="h2">
                              <Typography
                                style={{
                                  margin: "auto",
                                  fontSize: "1.5rem",
                                  fontWeight: "bold",
                                }}
                              >
                                {city && city.name}
                              </Typography>
                            </Typography>
                          </Box>
                        </Card>
                      </Link>
                    </Grid>
                  );
                })}
                <Grid item md={8}>
                  <Container>
                  <Grid item container md={12} spacing={2}>
                      {citiesName.map((city, index) => {
                        return (
                          <Grid item md={4} key={index}>
                      <Link href={`/SubTurkey/${city.id}`}>
                              <Box
                                style={{ width: "100%", position: "relative" }}
                                className="galeery_img"
                              >
                                <img
                                  style={{
                                    width: "100%",
                                    height: "170px",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                  }}
                                  src={city.files[0]
                                    ? city.files[0].imgUrl
                                    : "/logoo.svg" }
                                  alt="img"
                                />
                                  <h5 className="gallery_paragsmall">
                                    {city.name}
                                  </h5>
                              </Box>
                            </Link>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </Container>
          </>
        ) : (
          <>
          <div className="my-2">     {cities.map((city,index) => {
                  return (
                    <Col md={12} className="px-0" key={index}>
                      <Link href={`/SubTurkey/${city.id}`}>
                        <Card
                          variant="outlined"
                          style={{ borderRadius: "10px" }}
                        >
                          <Box
                            className="boxImage"
                            style={{
                              backgroundImage: `url(${
                                city.files[0]
                                  ? city.files[0].imgUrl
                                  : "/logoo.svg"
                              })`,
                            }}
                          >
                            <Typography className="gallery_parag" variant="h2">
                              <Typography
                                style={{
                                  margin: "auto",
                                  fontSize: "1.5rem",
                                  fontWeight: "bold",
                                }}
                              >
                                {city && city.name}
                              </Typography>
                            </Typography>
                          </Box>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}</div>
          <div>
            <Container>
              <Row>
              {citiesName.map((city, index) => {
                        return (
                          <Col xs={6} key={index} className="px-0">
                      <Link href={`/SubTurkey/${city.id}`}>
                              <Box
                                style={{ width: "100%", position: "relative" }}
                                className="galeery_img"
                              >
                                <img
                                  style={{
                                    width: "100%",
                                    height: "170px",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                  }}
                                  src={city.files[0]
                                    ? city.files[0].imgUrl
                                    : "/logoo.svg"}
                                  alt="img"
                                />
                                <Typography className="gallery_paragsmall" variant="h2">
                                  <Typography
                                    style={{
                                      margin: "auto",
                                      fontSize: "1.2rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {city.name}
                                  </Typography>
                                </Typography>
                              </Box>
                            </Link>
                          </Col>
                        );
                      })}
              </Row>
            </Container>
          </div>
          </>
        )}
      </Container>
    </section>
  );
};
export default Index;
