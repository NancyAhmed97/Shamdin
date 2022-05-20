/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// MUI Component
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
// Local COmponent
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";
import MobileHeader from "./Mobile/Index";
import Link from "next/link"; 
// MUI Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "react-bootstrap";
import Image from "next/image";

function Index() {
  const isDesktop = useMediaQuery("(min-width:1100px)");
  return (
    <Box className="bg-white" px={20}>
      {isDesktop ? (
        <Grid 
        container 
        justifyContent='center'
        alignItems='center'
        columnSpacing={2}>

          <Grid md={1} sm={12}>
        
              <Link href="/" passHref>
                <Image
                  src="/logoo.svg"
                  alt="img"
                  style={{ cursor: "pointer" }}
                  width="100"
                  height="100"
                />
              </Link>
          </Grid>
          

          <Grid md={11} sm={12}>
          
              <MainHeader />
              <SubHeader />
          </Grid>
          
          </Grid>
        
      ) : (
        <>
          <Grid item xs={12}>
            <MobileHeader />
          </Grid>

        </>
      )}
    </Box>
  );
}

export default Index;
