import React from "react";
import { makeStyles } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";

function AdInfoRow({ label = "Label", value = "value", hasDivider = true }) {

  return (
    <div>
      <div className="addInfo_adRow">
        <typography className="addInfo_adRowLeft">{label}</typography>
        <typography className="addInfo_adRowRight">{value}</typography>
      </div>
      {hasDivider && <hr />}
    </div>
  );
}

export default AdInfoRow;
