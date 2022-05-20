import React, { useState } from "react";
// Styles
// import { makeStyles } from "@emotion/styled";
import clsx from "clsx";
// Local component
import DropdownSandwitch from "../../utilis/dropdownSandwitch";
import Link from "next/link"
// Icons

import GiftIcon from "@mui/icons-material/CardGiftcard";
import BookIcon from "@mui/icons-material/ImportContacts";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BuildingIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

// const useStyles = makeStyles((theme) => ({
//   main__header: {
//     display: "flex",
//     background: "#f7f7f7",
//     justifyContent: "space-around",
//     alignContent: "center",
//     width: "100%!important",
//     height: "40px",
//     marginLeft: "-20px",
//   },
//   sandwitch__left: {},

//   menu__item: {
//     color: "black",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-around",
//     cursor: "pointer",
//     "&:hover": {
//       color: theme.palette.primary.main,
//     },
//   },
// }));
function SubHeader() {
  return (
    <div className="subheader_main__header">
      <div className={clsx("menu__item", "")}>
        <div>
        </div>
      </div>

      {/* <div className="menu__item">
        <div>
          <GiftIcon />
        </div>
      </div> */}

      <div className="menu__item">
        <div>
        
        <Link href="/citizenship">

          <BookIcon />
          </Link>
        </div>
      </div>

      <div className="menu__item">
        <div>
        <Link href="/channels">

          <YouTubeIcon />
          </Link>
        </div>
      </div>

      <div className="menu__item">
        <div>
        <Link href="/for-resale-turkey">
          <BuildingIcon />
          </Link>
        </div>
      </div>

      <div className="menu__item">
        <div>
<Link href="/">
<HomeIcon />

</Link>
        </div>
      </div>

    </div>
  );
}

export default SubHeader;
