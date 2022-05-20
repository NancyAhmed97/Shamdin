import React from "react";
// common Component
import TitleContainer from "../common/TitleContainer";
// Local component
import ItemList from "./ItemsList";
import FiltersList from "./FiltersList";
import FiltersMobilePopup from "./FiltersMobilePopup";
// MUI component
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const sendx = (val) => {};
  return (
    <div>
      {isDesktop ? (
        <>
          <Grid
            item
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={2}
          >
            <Grid item xs={4}>
              <FiltersList sendx={sendx} />
            </Grid>

            <Grid item xs={8}>
              <TitleContainer searched="Turkey" />
              <ItemList />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <TitleContainer searched="Turkey" />

            <ItemList btn={<FiltersMobilePopup />} />
          </Grid>
        </>
      )}
    </div>
  );
}

export default Index;
