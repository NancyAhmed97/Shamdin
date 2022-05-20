/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// MUI Component
import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import LocationIcon from "@mui/icons-material/LocationOn";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

import { useTranslations } from 'next-intl';
// function LimitText(text, count) {
//   return text.slice(0, count) + (text.length > count ? "..." : "");
// }
function createMarkup(data) {
  return { __html: data };
}
function Index({item}) {
  
  const t = useTranslations('general');

  return (
    <Link href={`/galaxy-tower/${item.id}`} passHref>

    <Card className="prop_card_root">
      <div className="prop_card_root__inner">
        <CardMedia
          className="prop_card_CardMedia"
          image={item.files[0] ? item.files[0].imgUrl : "/logoo.svg"}
          title="Live from space album cover"
        >
          <span className="prop_card_span">{item.date}</span>
          <span className="prop_card_spanBut">
            {/* Conforms to conditions of Turkish citizenship */}
          </span>
        </CardMedia>

        <CardContent className="prop_card_CardContent">
          <Typography
            className="prop_card_card__title"
            component="h5"
            variant="h5"
          >
            {item.title}
          </Typography>
          <div className="prop_card_info">
            <div className="prop_card_info__item">
              <LocationIcon className="prop_card_info__item__icon" />
              <a
               
                className="prop_card_info__item__subtitle"
                component="h5"
                variant="h5"
              >
                {item.location}
              </a>
              <span style={{ marginRight: "2px" }}>,</span>
              <a
               
                className="prop_card_info__item__subtitle"
                component="h5"
                variant="h5"
              >
                {item.municipality}
              </a>
            </div>
            <div className="prop_card_info__item">
              <HomeIcon className="prop_card_info__item__icon" />
              <a
               
                className="prop_card_info__item__subtitle"
                component="h5"
                variant="h5"
              >
                {item.type}
              </a>
        
          </div>
          </div>
            {item.payment && (
              <div className="prop_card_info__item" style={{ display: "flex" }}>
                <MoneyIcon className="prop_card_info__item__icon" style={{position:"relative",right:'5px'}} />
                <Typography
                 
                  className="prop_card_info__item__subtitle"
                  component="h5"
                  variant="h5"
                  style={{ marginTop: "7px" }}
                >
                  {item.payment}
                </Typography>
              </div>
            )}
          {item.description&&
          <Typography
          className="prop_card_card__description"
          dangerouslySetInnerHTML={createMarkup(
            item.description.length >= 100
              ? item.description.slice(0, 100) + "....."
              : item.description
          )}
        ></Typography>
          }
          {/* <Typography
            className="prop_card_card__description"
            dangerouslySetInnerHTML={createMarkup(
              description.length >= 100
                ? description.slice(0, 100) + "....."
                : description
            )}
          ></Typography> */}
          {t('startAt')}
          {item.price && (
            <Typography
              className="prop_card_card__price"
              component="h5"
              variant="h5"
            >
              {item.price} $
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
    </Link>
  );
}

export default Index;
