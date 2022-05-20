import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "react-multi-carousel/lib/styles.css";
import { useTranslations } from 'next-intl';

const MapLocation = (props) => {
  
	const t = useTranslations('general');

  return (
    <section className="map my-3">
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >
        <Box
          style={{
            paddingTop: "30px",
          }}
        >
          <Typography className="map_Header" variant="h4">
            {t('officesLocations')}
          </Typography>
          <Typography
            style={{ marginInline: "0px", marginBlock: "10px", width: "80%",color:"#37404d",fontSize:"1rem",fontWeight:"400" }}
          >
            {t('vstNrstBrnch')}
          </Typography>
          <hr/>
        </Box>

        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55275.150648782386!2d31.15462371399995!3d30.016857984341783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2sGiza%2C%20El%20Omraniya%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1646255309538!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          />
        </Box>
      </Container>
    </section>
  );
};
export default MapLocation;
