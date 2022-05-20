import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { makeStyles } from "@mui/material/styles";
import Link from "next/link";
const AdVieWhatsApp = () => {
  return (
    <div className="addview_backBlock p-3">
      <Box className="addview_upper">
        <Box p={2} className="addview_text">
          <Typography className="addview_title" variant="h5">
            Mesaken Real Estate
          </Typography>

          <Typography className="addview_content" variant="h6">
            is the exclusive agent of resale options in real estate ownership
          </Typography>
        </Box>
        <div className="image_vontainer">
          <img
            className="addview_img"
            src="https://www.imtilak.net/assets/img/logo-mesaken.png"
            alt="img"
          />
        </div>
      </Box>
      <Link href="https://api.whatsapp.com/send?phone=905529000999">
        <Button variant="contained" className="addview_btn" onClick="">
          <WhatsAppIcon mr={2} /> Contact via WhatsApp
        </Button>
      </Link>
    </div>
  );
};
export default AdVieWhatsApp;
