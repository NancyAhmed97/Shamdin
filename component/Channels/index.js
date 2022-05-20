import React from "react";
// Local Component
import Playlists from "./Playlists";
import Slider from "./Slider";
import MainVideo from "./MainVideo";
import NeedHelp from "../common/NeedHelp";
// Styles
import { makeStyles, alpha } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  hover: {
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

function Index(props) {
  const classes = useStyles();

  return (
    <>
      <Slider />

      <MainVideo />
      <Playlists />
      <NeedHelp />
    </>
  );
}

export default Index;
