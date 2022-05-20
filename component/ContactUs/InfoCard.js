import React from "react";
// MUI Component
import { Box, Link, Typography, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import LocationIcon from "@mui/icons-material/LocationOn";
// Styles
import { makeStyles, alpha } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";

// const useStyles = makeStyles((theme) => ({

// 	contact__subtitle: {
// 		margin: "15px 0px",
// 		color: theme.palette.primary.main,
// 	},
// 	contact__item: {
// 		display: "flex",
// 		marginTop: "20px",
// 		alignContent: 'center',
// 	},
// 	contact__item__icon: {
// 		paddingRight: '15px',
// 	},
// 	root: {
// 		width: "300px",
// 		height: "310px",
// 	},
// 	Header: {
// 		color: theme.palette.primary.main,
// 	},
// }));

function Index(props) {
  // const classes = useStyles();

  return (
    <Grid container item className="mt-3">
      <Grid item>
        <Box style={{ width: "100%", position: "relative" }}>
          <Card className="infoCard_root">
            <CardContent className="" style={{ padding: "0px !important" }}>
              <Typography className="info_Header" variant="h5">
                General Management - Istanbul
              </Typography>
              <div>
                <div className="contact__item">
                  <WhatsAppIcon className="contact__item__icon" />

                  <Link
                    href="https://api.whatsapp.com/send?phone=00905074000900"
                    target="_blank"
                    variant="h6"
                  >
                    00905074000900
                  </Link>
                </div>

                <div className="contact__item">
                  <PhoneIcon className="contact__item__icon" />
                  <Link href="tel:00905074000900" target="_blank" variant="h6">
                    00905074000900
                  </Link>
                </div>

                <div className="contact__item">
                  <EmailIcon className="contact__item__icon" />
                  <Link
                    href="mailto:info@Shamdin.net"
                    target="_blank"
                    variant="h6"
                  >
                    info@Shamdin.net
                  </Link>
                </div>

                <div className="contact__item">
                  <LocationIcon className="contact__item__icon" />
                  <Typography>
                    Başakşehir. Mall of Istanbul. Office Block. No.91. Istanbul,
                    Turkey
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
