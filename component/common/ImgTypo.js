import React from "react";
import { Typography } from "@mui/material";
import NeedHelp from "../common/ShareBtns";
import { Button } from "@mui/material";


function Index({
  text = "text here",
  img = "https://www.imtilak.net/assets/img/population-count.png",
}) {

  return (
    <div className="img_typo_backBlock">
      <div className="img_typo_big__container">
        <div>
          <Typography
            variant="h6"
            component="h3"
            align="center"
            className="img_typo_title"
          >
            {text}
          </Typography>
        </div>

        <div>
          <img className="img_typo_img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Index;
