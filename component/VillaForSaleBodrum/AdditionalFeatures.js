import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import Checkbox from "./CheckText";
const AdditionalFeatures = () => {
  return (
    <div className="additional_backBlock">
      <Container maxWidth="lg" className="additional_big__container">
        <Typography
          className="additional_title"
          variant="h6"
          // align={`${i18n.language == "ar" ? "right" : "left"}`}
        >
          Additional Features
        </Typography>

        <div>
          <Typography
            className="additional_subTitle"
            variant="h6"
            // align={`${i18n.language == "ar" ? "right" : "left"}`}
          >
            Frontage
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="One" />
            <Checkbox text="Two" />
            <Checkbox text="Three" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Interior Properties
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="American Kitchen" />
            <Checkbox text="Furniture" />
            <Checkbox text="Painted" />
            <Checkbox text="Refrigerator" />
            <Checkbox text="Shower cabin" />
            <Checkbox text="Stove" />
            <Checkbox text="Air Conditioning" />
            <Checkbox text="Cellar" />
            <Checkbox text="Seramik Zemin" />
            <Checkbox text="Steel Door" />
            <Checkbox text="Terrace" />
            <Checkbox text="Washer" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            External Properties
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Camera System" />
            <Checkbox text="Water Pressure Tank" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Nearliness
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Grocery" />
            <Checkbox text="Mosque" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Transportation
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Minibusses" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Scene
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="City" />
            <Checkbox text="Nature" />
            <Checkbox text="Park & Green Field" />
            <Checkbox text="Sea" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Infrastructure
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Electric" />
            <Checkbox text="ADSL" />
            <Checkbox text="Cable TV" />
            <Checkbox text="Phone Line" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Environmental Features
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Restaurant" />
            <Checkbox text="Street Market" />
            <Checkbox text="Veterinary" />
            <Checkbox text="Village Clinic" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Social
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Open Air Swimming Pool" />
            <Checkbox text="Volleyball Field" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Residence Type
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Garden Floor Duplex" />
            <Checkbox text="Garden Floor" />
            <Checkbox text="Detached Entry" />
          </Box>
        </div>

        <div>
          <Typography className="additional_subTitle" variant="h6" align="left">
            Accessible Housing
          </Typography>
          <Box className="additional_sectionGroup">
            <Checkbox text="Vehicle Parking Lot" />
            <Checkbox text="Wide Hallway" />
            <Checkbox text="Entrance / Ramps" />
          </Box>
        </div>
      </Container>
    </div>
  );
};
export default AdditionalFeatures;
