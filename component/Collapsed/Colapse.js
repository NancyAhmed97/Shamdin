import React from "react";
import { makeStyles } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Link from "next/link";
const Colapse = ({ label, text }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      style={{
        textAlign: ` left`,
        marginBlock: "5px",
      }}
    >
      <FormControlLabel
        style={{ textAlign: ` left` }}
        control={
          <Typography
            onClick={handleChange}
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "300",
              fontSize: "1.25rem",
            }}
          >
            {checked ? (
              <RemoveCircleOutlineIcon
                style={{
                  marginInline: "10px",
                }}
              />
            ) : (
              <ControlPointIcon
                style={{
                  marginInline: "10px",
                  fontWeight: "300",
                  fontSize: "1.25rem",
                  color: "#ec94b4 !important",
                }}
              />
            )}
            {label}
          </Typography>
        }
      />
      <div className="Colapse_container">
        <Collapse in={checked} style={{ marginBlock: "10px" }}>
          <Typography
            style={{ marginBlock: "10px", color: "#37404d !important" }}
          >
            {text}
          </Typography>
  
        </Collapse>
      </div>
    </div>
  );
};
export default Colapse;
