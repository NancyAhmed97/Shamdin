import React from "react";
// MUI Component
import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
// Styles
import { makeStyles } from "@mui/material/styles";
import { useTranslations } from "next-intl";

function Index(props) {
  const t=useTranslations('general')
  return (
    <div className="owner_header_backBlock p-5">
      <Grid container spacing={2}>


  <Grid item xs={8}>
  <Typography className="owner_header_title" variant="h3" align="center">
{t('CategouriesNesdesc')}
        </Typography>
  
        <Link href="/Citizenship"><Button variant="contained" className="owner_header_btn" onClick="">{t('moreDetails')}</Button></Link>
  </Grid>
  <Grid item xs={4}>
  <img
            className="owner_header_imgRes"
            src="https://www.imtilak.net/assets/img/turkish-passport.png"
            alt=""
          />
  </Grid>
</Grid>

    </div>
  );
}

export default Index;
