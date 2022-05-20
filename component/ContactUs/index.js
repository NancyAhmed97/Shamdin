import React from "react";
// Local Component
import ContactUs from "./Contact";
import MapLocation from "./MapLocation";
import NeedHelp from "../common/NeedHelp";
import CitizenshipBlock from "../common/CitizenshipBlock";
// MUI Component
import Grid from "@mui/material/Grid";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Index(props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:940px)");

  return (
    <Grid item spacing={2}>
      {isDesktop ? (
        <>
          <Grid item xs={3}>
            <NeedHelp />
            <CitizenshipBlock />
          </Grid>
          <Grid item xs={9}>
            <ContactUs />
            <MapLocation />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <ContactUs />
            <MapLocation />
            <NeedHelp />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default Index;
