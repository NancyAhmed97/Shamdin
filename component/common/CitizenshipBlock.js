/* eslint-disable jsx-a11y/anchor-is-valid 
Halid is removing this component */ 
import React from "react";
// MUI COmponent
import { Typography } from "@mui/material";
// Local component
// Common component
import Link from "next/link";
import NeedHelp from "../../component/common/ShareBtns";
import { Button } from "@mui/material";
// Styles
import { makeStyles } from "@mui/material/styles";
import { useTranslations } from 'next-intl';

function Index() {
  
  const t = useTranslations('general');

  return (
    <div className="block_backBlock">
      <div className="block_big__container">
        <h5 className="block_postContent">
          {t('allUNeedToKnowAbtCtznship')}
        </h5>
        <img
          className="block_img"
          src="https://www.imtilak.net/assets/img/turkish-passport.png"
          alt=""
          srcset=""
        />
      </div>
      <Link href="/Citizenship">
        <p className="block_buttnBtn mb-0">{t('moreDetails')}</p>
      </Link>
    </div>
  );
}

export default Index;
