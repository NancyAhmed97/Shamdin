import React from "react";
// MUI component
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// Local component
import FiltersList from "./FiltersList";
import NeedHelp from "../common/NeedHelp";
import CitizenshipBlock from "../common/CitizenshipBlock";
import PostLike from "./PostLike";
import Content from "./Content/index"; 
// Common component
// Style
// import "./fixFont.css";
// MUI Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from 'next-intl';
import ContactForm from "../../component/ContactUs/ContactForm";

function Index() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const t = useTranslations('general');

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
            <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
              <CitizenshipInfoBox />
            </Grid>

            <Grid item xs={8}>
              <PostLike />
              <Content />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <PostLike />
            <Content />
            <ContactForm sendData={sendData} handleInputChange={handleInputChange} />
          </Grid>
        </>
      )}
    </div>
  );
}

export default Index;

export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}