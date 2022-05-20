import React from "react";
// MUI component
import Box from "@mui/material/Box";
// Local component
import Header from "./Header";
import BigBtn from "./BigBtn";
import ListOfNews from "./ListOfNews";
import FeaturedProjects from "./FeaturedProjects";
// Common component
import LinkDivider from "../common/LinkDivider";
// Style

function index() {
  return (
    <div>
      <Header />
      <BigBtn />
      <ListOfNews />
      <LinkDivider />
      <FeaturedProjects />
    </div>
  );
}

export default index;
