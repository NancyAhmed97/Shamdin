import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "../../component/VillaForSaleBodrum/Breadcrumbs";
import Galary from "../../component/VillaForSaleBodrum/Galary";
import AdVieWhatsApp from "../../component/VillaForSaleBodrum/AdVieWhatsApp";
import AdInfo from "../../component/VillaForSaleBodrum/AdInfo";
import AdditionalFeatures from "../../component/VillaForSaleBodrum/AdditionalFeatures";
import RegionReport from "../../component/VillaForSaleBodrum/RegionReport";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../../component/Footer";
import MainMobile from "../../component/Header/Mobile/MainMobile";
import SubMobile from "../../component/Header/Mobile/SubMobile";
import { Container } from "@mui/material";
const Index = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={2}
          >
            {isDesktop ? (
              <>
                <Grid item xs={8}>
                  <Breadcrumbs />
                  <Galary />
                  <AdditionalFeatures />
                  {/* <RegionReport /> */}
                </Grid>
                <Grid item xs={4}>
                  <AdVieWhatsApp />
                  <AdInfo />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Breadcrumbs />
                  <Galary />
                  <AdVieWhatsApp />
                  <AdInfo />
                  <AdditionalFeatures />
                  <RegionReport />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Index;
export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}