import React from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { makeStyles } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import{useRouter} from"next/router"
import Link from "next/link";

const BigBtn = (props) => {
  const t=useTranslations('general')
  const {locale}=useRouter()
  return (
    <div className="big_btn_backBlock">
      <a href="#" className="big_btn_Link">
  <Link href="/articales">
  <Button
          // startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
          className="big_btn_btn"
          // onClick=""
        >
          {locale=="ar"?
          <>
<div >          <ArrowRightAltIcon />
</div>
{t('all')}
</>
:
<>
<KeyboardBackspaceIcon />

{t('all')}
</>
}
        </Button>
  </Link>
      </a>
    </div>
  );
};
export default BigBtn;
