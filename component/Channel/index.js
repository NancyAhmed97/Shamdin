import { Box, Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import ModalCom from "./Modal";
// import { getData } from "../../pages/api/data";
import { Col, Row } from "react-bootstrap";
import getData from '../../helpers/getData';
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';

const Index = () => {
  const isDesktop = useMediaQuery("(min-width:725px)");
  const [channels, setChannels] = useState([]);
  const { locale } = useRouter();
  const t = useTranslations('general');
  useEffect(() => {
    let active = true;

    async function getRows() {
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

  return (
    <section className="Channel">
      <Container maxWidth="lg" style={{ position: "relative" }}>
      <Box pt={2}>
        <h4 className="block_Header">           
          {t('channel')}
        </h4>
        <p>
          {t('channelDescr')}
        </p>
      </Box>        
      <hr/>
        <Grid
          xs={12}
          md={12}
          item
          style={{
            display: "flex",
          }}
        >
          {isDesktop ? (
            <Container>
              <Grid item md={12} container columnSpacing={2}>
                <Grid item xs={6} md={6} >
                  {channels && channels[0] ? 
                  <Card
                    variant="outlined"
                    style={{ borderRadius: "10px"}}
                  >
                    <ModalCom
                    mainVideo={true}
                      channelVedio={ channels[0].video }
                      channels={channels}
                      channelImage={channels[0].files[0] ? channels[0].files[0].imgUrl: ''}
                      channelId={channels[0].id}
                    />
                  </Card>
                  : null }
                </Grid>
                <Grid item xs={6} md={6}>
                  <Row className="mt-1">
                    {channels &&
                      channels.slice(1).map((channel, index) => {
                        return (
                          <Col md={6} key={index} className="mb-3">                           
                            <ModalCom
                    mainVideo={false}
                              channelVedio={channel.video}
                              channelTitle={channel.title}
                              channels={channels}
                              channelId={channel.id}
                              channelImage={channel.files[0] ? channel.files[0].imgUrl : ''}
                            />
                          </Col>
                        );
                      })}
                  </Row>
                </Grid>
              </Grid>
            </Container>
          ) : (
            <Container className="p-0">
            <Row className="p-0">
              <Col xs={12}>
                <Card
                  variant="outlined"
                  style={{ borderRadius: "10px", height: "170px" }}
                >
                  <ModalCom
                    channelVedio={
                      channels && channels[0] && channels[0].video
                    }
                    // channelTitle={channels[0] && channels[0].title}
                    channels={channels}
                    channelImage={
                      channels && channels[0] && channels[0].files
                    }
                    channelId={channels && channels[0] && channels[0].id}
                    mainvideo={true}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
            {channels &&
                    channels.slice(1,3).map((channel, index) => {
                      return (
                        <Col xs={6} key={index} className="mt-4">
                        
                          <ModalCom
                            channelVedio={channel.video}
                            channelTitle={channel.title}
                            channels={channels}
                            channelId={channel.id}
                            channelImage={channel.files}
                          />
                        </Col>
                      );
                    })}
            </Row>
          </Container>
          )}
        </Grid>
      </Container>
    </section>
  );
};
export default Index;
