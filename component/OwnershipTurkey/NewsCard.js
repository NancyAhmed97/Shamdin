import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { makeStyles, alpha } from "@mui/material/styles";
import LimitTextFunc from "../../component/common/LimitTextFunc";

import { useTranslations } from "next-intl";
const NewsCard = ({news,title,description,updateDate,id}) => {
  const t=useTranslations('general')
  function createMarkup(data) {
		return { __html: data };
	}

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Grid item>

        <Card variant="outlined" style={{ borderRadius: "10px" }}>
          <Box className="new_card_boxImagesmall">
            <span className="new_card_span">{news&&news}</span>

            <Typography className="new_card_paragsmall" variant="h2">
        
        {t('infrastructureProjects')}
            </Typography>
          </Box>

          <Box
            style={{
              backgroundColor: "#eee",
              padding: "1rem",
              minHeight: "189.5px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between"
            }}
          >
            <Typography
              style={{
                width: "100%",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "5px",
              }}
              className="new_card_hover"
            >
          {title&&title}
            </Typography>

            <Typography
              style={{
                margin: "10px 10px 20px 10px",
                fontSize: "0.8rem",
                fontWeight: "light",
                color: "#37404d",
              }}
              dangerouslySetInnerHTML={createMarkup(description&&description.slice(0,120))}
            >
     
            </Typography>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px",
              }}
            >
              <Typography style={{ display: "flex", fontSize: "14px" }}>
                <EventAvailableIcon size="small" />
                {updateDate&&updateDate.slice(0,10)}
              </Typography>
              <Typography style={{ display: "flex", fontSize: "14px" }}>
                <VisibilityIcon size="small" />
                548
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
export default NewsCard;
