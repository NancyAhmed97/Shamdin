import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import DropdownLang from "../../utilis/dropdownLang";
import DropdownCurrency from "../../utilis/dropdownCurrency";
import DropdownUser from "../../utilis/dropdownUser";
import dropdownSandwitch from "../../utilis/dropdownSandwitch";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link"
const MainMobile = () => {
  // const { currentLocal } = useSelector((state) => state.currentLocal);
  // document
  // .querySelector("html")
  // .setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
  const [socialMediaLinks, setSocialMediaLinks] = React.useState("");
  const { locale } = useRouter();

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}settings?langCode=${locale}`,
    }).then((res) => {
      setSocialMediaLinks(res.data.rows[0]);
    });
  }, []);
  return (
    <div className="main__header">
      <div className="main__header__left">
        <div>
          <Card variant="outlined" className="main_parentCard">
            <Box
              className="main_card"
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownLang />
            </Box>
          </Card>
        </div>

        <div>
    
              <DropdownCurrency  />
        </div>

        <div>
          <Card variant="outlined" className="main_parentCard">
            <Box
              className="main_card"
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              {/* <DropdownUser isMobile={true} /> */}
            </Box>
          </Card>
        </div>

        <div>
          {/* <Card variant="outlined" className="main_parentCard">
            <Box
              className="cardCall"
              justifyContent="center"
              flexDirection="row"
              display="flex"
            > */}
            <Link href={`tel:${socialMediaLinks.phone}`}>
              <PhoneInTalkIcon className="main_mobile_hoverIcon" />
              </Link>
            {/* </Box>
          </Card> */}
        </div>
      </div>
      <Box className="main__header__right">
  <Link href="/">
  <img
          height="100%"
          src={"/logoo.svg"}
          alt="img"
        />
  </Link>
      </Box>
    </div>
  );
};
export default MainMobile;
