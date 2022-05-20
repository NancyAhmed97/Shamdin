import { Box, Container, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles, alpha } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";

import Tabs from "./Tabs";
import Newsletter from "./Newsletter";
import getData from "../../helpers/getData";


function Index(props) {
  const { locale } = useRouter();
const [footerText, setFooterText] = useState("")
  useEffect(() => {
    let active = true;

    function getFooterText() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
     
      };
      
      getData(process.env.apiUrl + 'settings', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }
          setFooterText(response.data.rows[0].copyRights);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getFooterText();

    return () => {
      active = false;
    };
    
  }, [locale]);
  return (
    <section className="footer">
      
      <Newsletter /> 

      <Tabs />


      <div className="copyrights text-center p-3 color-white w-100">

{footerText&&footerText}         
         {/* <Link className="mr-2 text-capitalize text-white text-decoration-none" href="/privacy">
          Privacy Policy
        </Link>
        -
        <Link className="ml-2 text-capitalize text-white text-decoration-none" href="/terms">
          Terms of Use
        </Link> */}
      </div>
    </section>
  );
}

export default Index;

