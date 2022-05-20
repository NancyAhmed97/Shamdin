import React from "react";
// MUI Component
import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import LocationIcon from "@mui/icons-material/LocationOn";
// Styles
import { makeStyles, alpha } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

function Index(props) {
  const { date, location, space, rooms, price, title, id,desc,projectDate } = props;
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <Card className="card_root">
      <Link href={`/galaxy-tower/${id}`} passHref>
        <div className="card_root_inner">
          <CardMedia
            className="card_CardMedia"
            image="https://www.imtilak.net/uploads/properties/373/6bbfd9af6a0dede909d335a51e1a10997-3E.jpg"
            title="Live from space album cover"
          >
            {date&&
            <span className="card_span">{date}</span>}
          </CardMedia>

          <CardContent className="card_CardContent">
            <Typography className="card_title" component="h5" variant="h5">
              {title}
            </Typography>
{location&&

            <div className="card_info">
              <div className="card_info_item">
                <LocationIcon className="card_info_item_icon" />
                <Typography
                  className="card_info_item_subtitle"
                  component="h5"
                  variant="h5"
                >
                  {location}
                </Typography>
              </div>
              <div className="card_info_item">
                <HomeIcon className="card_info_item_icon" />
                <Typography
                  className="card_info_item_subtitle"
                  component="h5"
                  variant="h5"
                >
                  {space}
                </Typography>
              </div>
              <div className="card_info_item">
                <HomeIcon className="card_info_item_icon" />
                <Typography
                  className="card_info_item_subtitle"
                  component="h5"
                  variant="h5"
                >
                  {rooms}
                </Typography>
              </div>
            </div>
}
{desc&&
   <p
   className="terms_parag"
   dangerouslySetInnerHTML={createMarkup(
       desc.length>250?desc.slice(0,230)+"......":desc
   )}
 ></p>

}
{projectDate&&

<p style={{fontSize:".8rem"}}>
  {projectDate.slice(0,10)}
</p>

}
            <Typography className="card_price" component="h5" variant="h5">
              {price}
            </Typography>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}

export default Index;
