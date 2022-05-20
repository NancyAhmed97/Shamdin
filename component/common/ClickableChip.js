import React from "react";
import Chip from "@mui/material/Chip";

function ClickableChip(props) {
  const { handleFunc, chipName } = props;
  return (
    <Chip
      style={{
        margin: " 0 5px",
      }}
      label={chipName}
      onClick={handleFunc}
      variant="outlined"
      size="medium"
      clickable
      color="primary"
    />
  );
}

export default ClickableChip;
