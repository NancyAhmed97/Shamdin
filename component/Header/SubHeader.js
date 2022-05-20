import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Item from "../utilis/Item";
import Link from "next/link";
import { useTranslations } from 'next-intl';

function SubHeader() {
  const t = useTranslations('general');

  return (
    <Box
      style={{
        marginTop: "0px",
        marginBottom: "10px",
        justifyContent: "center",
        flexDirection: "row",
        display: "flex",
      }}
      className="sub_header"
    >
      <Link href="/ ">
        <Typography
          style={{ cursor: "pointer", color: "#5f6670" }}
          className="mx-2 py-3 nav_link"
        >
          {t('home')}
        </Typography>
      </Link>
      <Item title={t('aboutUs')} />
      <Item title={t('turkeyProperties')} />
      <Item title={t('turkishCitizenship')} />
      <Link href="/for-resale ">
        <Typography
          style={{
            cursor: "pointer",
            color: "#5f6670",
          }}
          className="mx-2 py-3 nav_link"

        >
          {t('resale')}
        </Typography>
      </Link>
      <Item title={t('blogs')} />
      <Link href="/channels">
        <Typography
          style={{ cursor: "pointer", color: "#5f6670" }}
          className="mx-2 py-3 nav_link"

        >
          {t('channel')}
        </Typography>
      </Link>
      <Link href="/faq-city">
        <Typography
          style={{
            cursor: "pointer",
            color: "#5f6670",
          }}
          className="mx-2 py-3 nav_link"

        >
          {t('faqs')}
        </Typography>
      </Link>
      <Link href="/contact-us">
        <Typography
          style={{
            cursor: "pointer",
            color: "#5f6670",
          }}
          className="mx-2 py-3 nav_link"

        >
          {t('contactUs')}
        </Typography>
      </Link>
    </Box>
  );
}

export default SubHeader;
