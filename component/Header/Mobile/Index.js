import React from "react";
// Local component
import MainMobile from "./MainMobile";
import SubMobile from "./SubMobile";
import Box from "@mui/material/Box";
import DropdownSandwitch from "../../utilis/dropdownSandwitch";

function Index() {
  return (
    <Box>
      <MainMobile />
      <SubMobile />
      <DropdownSandwitch />

    </Box>
  );
}

export default Index;
