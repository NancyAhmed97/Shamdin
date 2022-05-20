import React from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { makeStyles } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const LinkDivider = ({
  title = "Title",
  content = "content content content content content content content content content content content content content content ",
  img = "https://www.imtilak.net/uploads/banners/5c9239f4951e7d329c79ec47d9bb479aVru238.png",
}) => {
  return (
    <div className="link_backBlock">
      <a href="#" className="link_Link">
        <Box p={2} className="link_text">
          <Typography className="link_title" variant="h5">
            {title}
          </Typography>

          <Typography className="link_content" variant="h6">
            {content}
          </Typography>
        </Box>
        <img className="link_img" src={img} alt="img" />
      </a>
    </div>
  );
};
export default LinkDivider;
