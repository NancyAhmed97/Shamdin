import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Box, Typography } from "@mui/material";

function Index({ text = "Text" }) {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "0 0 33.333333%",
      }}
      style={{
        display: "flex",
        flex: "0 0 33.333333%",
      }}
    >
      <CheckBoxIcon />

      <Typography className="text_check_box">{text}</Typography>
    </Box>
  );
}

export default Index;
