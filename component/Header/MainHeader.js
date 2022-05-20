import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// import DropdownUser from "../utilis/dropdownUser";
import DropdownCurrency from "../utilis/dropdownCurrency";
import DropdownLang from "../utilis/dropdownLang";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslations } from 'next-intl';

const MainHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { locale } = useRouter();
  const [searchKey, setSearchKey] = React.useState("");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [socialMediaLinks, setSocialMediaLinks] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);
  const router = useRouter()
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const t = useTranslations('general');

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}settings?langCode=${locale}`,
    }).then((res) => {
      setSocialMediaLinks(res.data.rows[0]);
    });
  }, []);

 
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const getSearchKey = (event) => {
    setSearchKey(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    router.push({
      pathname: `/search/${searchKey}`,
    });
  };
  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <AppBar
    elevation={0}
    position="static"
    color={"secondary"}
    className="AppBar"
  >
    <Toolbar>
      <form onSubmit={handleSearch} className="search ">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input placeholder={t('search')} onChange={getSearchKey} />
      </form>

     <DropdownLang />

      <Card variant="outlined" className="parentCard">
        <Box
          className="header_card"
          justifyContent="center"
          flexDirection="row"
          display="flex"
        >
          <DropdownCurrency />
        </Box>
      </Card>

      <Card variant="outlined" className="parentCard">
        <CardContent fontSize="small" className="header_card">
          <a
            href={socialMediaLinks.facebookLink}
            target="_blank"
            rel="noreferrer"
            className="socialColor"
            
          >
            {" "}
            <FacebookIcon fontSize="small" className="marginIcon" />
          </a>
          <a
            href={socialMediaLinks.twitterLink}
            target="_blank"
            rel="noreferrer"
            className="socialColor"
            
          >
            <TwitterIcon fontSize="small" className="marginIcon" />
          </a>
          <a
            href={socialMediaLinks.youtubeLink}
            target="_blank"
            rel="noreferrer"
            className="socialColor"
            
          >
            <YouTubeIcon fontSize="small" className="marginIcon" />
          </a>
          <a
            href={socialMediaLinks.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="socialColor"
            
          >
            <InstagramIcon fontSize="small" className="marginIcon" />
          </a>
          <a
            href={socialMediaLinks.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="socialColor"
          >
            <TelegramIcon fontSize="small" className="marginIcon" />
          </a>
        </CardContent>
      </Card>
      {/*
        <Card variant="outlined" className="parentCard">
          <Box
            className="header_card"
            justifyContent="center"
            flexDirection="row"
            display="flex"
          >
            <DropdownUser isMobile={false} />
          </Box>
        </Card> */}

      <div className="glow" />

      {/* <div className="sectionMobile">
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div> */}
    </Toolbar>
  </AppBar>
  );
};
export default MainHeader;

