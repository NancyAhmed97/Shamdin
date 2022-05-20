import React from "react";
// MUI Component
import { Box, Link, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
// Icons
import PlaylistIcon from "@mui/icons-material/PlaylistPlay"; // Styles
import { makeStyles, alpha } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
function Index({ channel }) {
  const { locale } = useRouter();
  return (
    <Grid item>
      <Card className="play_list_root">
        <Link
          className="card__link"
          href={`/channels/${channel && channel.id}`}
          variant="h6"
        >
          <CardActionArea className="d-flex flex-column p-0">
            <CardMedia
              className="play_list_boxImage"
              component="img"
              height="auto"
              image={channel.files[0]?channel.files[0].imgUrl:"/logoo.svg"}
            />
            <CardContent style={{minHeight:"66px",display:"flex",alignItems:"center"}}>
              <Box display="flex">
                {locale=="ar"?
                
              <>
              {channel&&channel.title}
<PlaylistIcon className="contact__item__icon mt-2" />
              </>
              :
              <>
              <PlaylistIcon className="contact__item__icon mt-2" />

              {channel&&channel.title}
              </>
              }


              </Box>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default Index;
