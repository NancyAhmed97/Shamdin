import React from "react";
import { Typography } from "@mui/material";
import NeedHelp from "../common/ShareBtns";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
function Index({
  text = "text here",
  value = 0,
  img = "https://www.imtilak.net/assets/img/population-count.png",
}) {
  return (
    <div className="img_two_typo_backBlock">
      <div className="img_two_typo_big__container">
        <div>
          <img className="img_two_typo_img" src={img} alt="" />
        </div>

        <div>
          <Typography
            variant="h6"
            component="h3"
            align="center"
            className="img_two_typo_title"
          >
            {text}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            align="center"
            className="img_two_typo_textContent"
          >
            {value}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Index;
